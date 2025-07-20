import { FileText, ImageIcon, Video, Download } from "lucide-react"

export function RecentFiles() {
  const files = [
    {
      name: "family-vacation-2024.jpg",
      type: "image",
      size: "2.4 MB",
      date: "2 hours ago",
    },
    {
      name: "birthday-video.mp4",
      type: "video",
      size: "45.2 MB",
      date: "1 day ago",
    },
    {
      name: "important-document.pdf",
      type: "document",
      size: "1.2 MB",
      date: "3 days ago",
    },
    {
      name: "wedding-photos.zip",
      type: "archive",
      size: "156 MB",
      date: "1 week ago",
    },
  ]

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
        {files.map((file, index) => (
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
        ))}
      </div>
    </div>
  )
}
