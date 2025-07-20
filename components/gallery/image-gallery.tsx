"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Eye, MoreHorizontal, X } from "lucide-react"

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Empty array - replace with actual data from Supabase
  const images: Array<{
    id: number
    name: string
    url: string
    size: string
    date: string
    tags: string[]
  }> = []

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        {images.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Image
              src="/placeholder.svg"
              alt="No images"
              width={64}
              height={64}
              className="mx-auto mb-4 opacity-50"
            />
            <p className="text-lg font-medium">No images uploaded yet</p>
            <p className="text-sm">Start uploading photos to see them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="group relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                    <button
                      onClick={() => setSelectedImage(image.url)}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Download className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-white text-sm font-medium truncate">{image.name}</p>
                  <p className="text-gray-300 text-xs">{image.size}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
