from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
import shutil
from pathlib import Path
from datetime import datetime
import uuid
from typing import List

app = FastAPI(title="LokalStowage Upload API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "/home/luca/Documents/File"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/file_upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        if not file.filename:
            raise HTTPException(status_code=400, detail="No file provided")
        
        file_extension = Path(file.filename).suffix
        unique_filename = f"{uuid.uuid4().hex}_{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
        
        file_path = os.path.join(UPLOAD_DIR, unique_filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        file_size = os.path.getsize(file_path)
        
        return JSONResponse(
            status_code=200,
            content={
                "message": "File uploaded successfully",
                "original_filename": file.filename,
                "saved_filename": unique_filename,
                "file_path": file_path,
                "file_size": file_size,
                "upload_time": datetime.now().isoformat()
            }
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

@app.post("/file_upload_multiple")
async def upload_multiple_files(files: List[UploadFile] = File(...)):
    uploaded_files = []
    failed_files = []
    
    for file in files:
        try:
            if not file.filename:
                failed_files.append({"filename": "unknown", "error": "No filename provided"})
                continue
            
            file_extension = Path(file.filename).suffix
            unique_filename = f"{uuid.uuid4().hex}_{datetime.now().strftime('%Y%m%d_%H%M%S')}{file_extension}"
            
            file_path = os.path.join(UPLOAD_DIR, unique_filename)
            
            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
            
            file_size = os.path.getsize(file_path)
            
            uploaded_files.append({
                "original_filename": file.filename,
                "saved_filename": unique_filename,
                "file_path": file_path,
                "file_size": file_size,
                "upload_time": datetime.now().isoformat()
            })
            
        except Exception as e:
            failed_files.append({
                "filename": file.filename,
                "error": str(e)
            })
    
    return JSONResponse(
        status_code=200,
        content={
            "message": f"Upload completed. {len(uploaded_files)} succeeded, {len(failed_files)} failed",
            "uploaded_files": uploaded_files,
            "failed_files": failed_files,
            "total_uploaded": len(uploaded_files),
            "total_failed": len(failed_files)
        }
    )

@app.get("/files/stats")
async def get_file_stats():
    try:
        if not os.path.exists(UPLOAD_DIR):
            return JSONResponse(content={
                "total_files": 0,
                "total_size_bytes": 0,
                "total_size_mb": 0,
                "upload_directory": UPLOAD_DIR
            })
        
        files = os.listdir(UPLOAD_DIR)
        total_files = len(files)
        total_size = 0
        
        for filename in files:
            file_path = os.path.join(UPLOAD_DIR, filename)
            if os.path.isfile(file_path):
                total_size += os.path.getsize(file_path)
        
        total_size_mb = round(total_size / (1024 * 1024), 2)
        
        return JSONResponse(content={
            "total_files": total_files,
            "total_size_bytes": total_size,
            "total_size_mb": total_size_mb,
            "upload_directory": UPLOAD_DIR,
            "files": files
        })
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get stats: {str(e)}")

@app.get("/files/list")
async def list_files():
    try:
        if not os.path.exists(UPLOAD_DIR):
            return JSONResponse(content={"files": []})
        
        files_info = []
        
        for filename in os.listdir(UPLOAD_DIR):
            file_path = os.path.join(UPLOAD_DIR, filename)
            if os.path.isfile(file_path):
                stat_info = os.stat(file_path)
                files_info.append({
                    "filename": filename,
                    "size_bytes": stat_info.st_size,
                    "size_mb": round(stat_info.st_size / (1024 * 1024), 2),
                    "created_time": datetime.fromtimestamp(stat_info.st_ctime).isoformat(),
                    "modified_time": datetime.fromtimestamp(stat_info.st_mtime).isoformat(),
                })
        
        files_info.sort(key=lambda x: x["created_time"], reverse=True)
        
        return JSONResponse(content={
            "files": files_info,
            "total_files": len(files_info)
        })
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to list files: {str(e)}")

@app.get("/")
async def root():
    return {
        "message": "LokalStowage Upload API is running!",
        "upload_directory": UPLOAD_DIR,
        "endpoints": {
            "upload_single": "/file_upload",
            "upload_multiple": "/file_upload_multiple", 
            "get_stats": "/files/stats",
            "list_files": "/files/list"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
