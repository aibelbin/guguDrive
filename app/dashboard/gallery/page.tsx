import { ImageGallery } from "@/components/gallery/image-gallery"
import { GallerySearch } from "@/components/gallery/gallery-search"

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Gallery</h2>
        <p className="text-gray-600">Browse and search your uploaded images</p>
      </div>

      <GallerySearch />
      <ImageGallery />
    </div>
  )
}
