import { FileUpload } from "@/components/upload/file-upload"

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Upload Files</h2>
        <p className="text-gray-600">Upload your files to the family cloud storage</p>
      </div>

      <FileUpload />
    </div>
  )
}
