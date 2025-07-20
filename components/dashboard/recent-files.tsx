import { FileText, ImageIcon, Video, Download } from "lucide-react"

export function RecentFiles() {
  const files: Array<{
    name: string
    type: string
    size: string
    date: string
  }> = []

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-500" />
      case "video":
        return <Video className="h-5 w-5 text-green-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Files</h3>
      <div className="space-y-3">
        {files.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p>No files uploaded yet</p>
          </div>
        ) : (
          files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md">
              <div className="flex items-center space-x-3">
                {getFileIcon(file.type)}
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {file.size} • {file.date}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Download className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
