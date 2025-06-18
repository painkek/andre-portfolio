"use client";

import Navbar from "@/components/common/navbar";
import Image from "next/image";
import { useState } from "react";

type Album = {
  id: string;
  clientName: string;
  photos: string[];
  thumbnail: string;
};

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  const clientAlbums: Album[] = [
    {
      id: "heart",
      clientName: "Heart",
      photos: Array.from(
        { length: 8 },
        (_, i) => `/gallery/heart/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/1.jpg",
    },
    {
      id: "azul",
      clientName: "Azul",
      photos: Array.from({ length: 8 }, (_, i) => `/gallery/azul/${i + 1}.jpg`),
      thumbnail: "/gallery/2.jpg",
    },
    {
      id: "lost",
      clientName: "Lost",
      photos: Array.from({ length: 8 }, (_, i) => `/gallery/lost/${i + 1}.jpg`),
      thumbnail: "/gallery/3.jpg",
    },
    {
      id: "first-birthday",
      clientName: "1st Birthday",
      photos: Array.from(
        { length: 8 },
        (_, i) => `/gallery/first-birthday/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/4.jpg",
    },
    {
      id: "kirsten",
      clientName: "Kirsten",
      photos: Array.from(
        { length: 8 },
        (_, i) => `/gallery/kirsten/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/5.jpg",
    },
    {
      id: "edna",
      clientName: "Edna's 50th",
      photos: Array.from({ length: 8 }, (_, i) => `/gallery/edna/${i + 1}.jpg`),
      thumbnail: "/gallery/6.jpg",
    },
  ];

  const handleAlbumClick = (album: Album) => {
    setSelectedAlbum(album);
    setSelectedPhotoIndex(0);
  };

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsFullViewOpen(true);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setIsFullViewOpen(false);
  };

  const nextPhoto = () => {
    if (!selectedAlbum) return;
    setSelectedPhotoIndex((prev) =>
      prev === selectedAlbum.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    if (!selectedAlbum) return;
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1
    );
  };

  const closeFullView = () => {
    setIsFullViewOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-lime-50">
        <div className="min-h-screen p-4 md:p-8 mx-auto font-sans text-black">
          {/* fullscreen Image Modal */}
          {isFullViewOpen && selectedAlbum && (
            <div className="fixed inset-0 z-50 bg-lime-50/30 backdrop-blur-md flex items-center justify-center">
              <button
                onClick={closeFullView}
                className="absolute top-6 right-6 text-black text-2xl font-bold"
              >
                ✕
              </button>
              <button
                onClick={prevPhoto}
                className="absolute left-4 text-black text-3xl font-bold px-4"
              >
                ‹
              </button>
              <Image
                src={selectedAlbum.photos[selectedPhotoIndex]}
                alt="Full view"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain rounded-md"
              />
              <button
                onClick={nextPhoto}
                className="absolute right-4 text-black text-3xl font-bold px-4"
              >
                ›
              </button>
            </div>
          )}

          {/* Album Detail View */}
          {selectedAlbum ? (
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-light mt-2">
                  {selectedAlbum.clientName + "'s" + " Gallery"}
                </h2>
              </div>

              <div className="mb-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedAlbum.photos.map((photo, index) => (
                    <div
                      key={index}
                      onClick={() => handlePhotoClick(index)}
                      className="aspect-square cursor-pointer rounded-lg overflow-hidden border hover:ring-2 hover:ring-blue-400 transition"
                    >
                      <Image
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={closeAlbum}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  ← Back to Gallery
                </button>
                <span className="text-gray-700">
                  Photo {selectedPhotoIndex + 1} of{" "}
                  {selectedAlbum.photos.length}
                </span>
              </div>
            </div>
          ) : (
            /* Main Gallery View */
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                GALLERY
              </h1>
              <p className="mb-10 text-center text-sm md:text-base">
                I do portrait, birthday, events, conceptual.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {clientAlbums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => handleAlbumClick(album)}
                    className="aspect-[3/2] border rounded-lg overflow-hidden cursor-pointer relative group hover:shadow-md transition"
                  >
                    <Image
                      src={album.thumbnail}
                      alt={album.clientName}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold text-lg">
                        View {album.clientName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
