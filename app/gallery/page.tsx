"use client";

import Navbar from "@/components/common/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Albums organized by client names
  const clientAlbums = [
    {
      id: "heart",
      clientName: "Heart",
      photos: Array.from(
        { length: 6 },
        (_, i) => `/gallery/heart/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/1.jpg",
    },
    {
      id: "azul",
      clientName: "Azul",
      photos: Array.from({ length: 6 }, (_, i) => `/gallery/azul/${i + 1}.jpg`),
      thumbnail: "/gallery/2.jpg",
    },
    {
      id: "lost",
      clientName: "Lost",
      photos: Array.from({ length: 6 }, (_, i) => `/gallery/lost/${i + 1}.jpg`),
      thumbnail: "/gallery/3.jpg",
    },
    {
      id: "first-birthday",
      clientName: "1st Birthday",
      photos: Array.from(
        { length: 6 },
        (_, i) => `/gallery/first-birthday/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/4.jpg",
    },
    {
      id: "kirsten",
      clientName: "Kirsten",
      photos: Array.from(
        { length: 6 },
        (_, i) => `/gallery/kirsten/${i + 1}.jpg`
      ),
      thumbnail: "/gallery/5.jpg",
    },
    {
      id: "edna",
      clientName: "Edna's 50th",
      photos: Array.from({ length: 6 }, (_, i) => `/gallery/edna/${i + 1}.jpg`),
      thumbnail: "/gallery/6.jpg",
    },
  ];

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setSelectedPhotoIndex(0);
  };

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-lime-50">
        <div className="min-h-screen p-4 md:p-8 mx-auto font-sans text-black">
          {/* album detail view */}
          {selectedAlbum ? (
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold mt-2">
                  {selectedAlbum.clientName}
                </h2>
              </div>

              {/* main featured image */}
              <div className="mb-8">
                <Image
                  src={selectedAlbum.photos[selectedPhotoIndex]}
                  alt={`${selectedAlbum.clientName} - Photo ${
                    selectedPhotoIndex + 1
                  }`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-cover"
                  priority
                />
              </div>

              {/* album photos grid */}
              <div className="mb-12">
                <h4 className="text-2xl font-semibold mb-6 text-center">
                  Full Album
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedAlbum.photos.map((photo, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer
                                ${
                                  selectedPhotoIndex === index
                                    ? "ring-4 ring-blue-500"
                                    : "border border-gray-200"
                                }`}
                      onClick={() => handlePhotoClick(index)}
                    >
                      <Image
                        src={photo}
                        alt={`${selectedAlbum.clientName} photo ${index + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                <div className="text-gray-700">
                  Photo {selectedPhotoIndex + 1} of{" "}
                  {selectedAlbum.photos.length}
                </div>
              </div>
            </div>
          ) : (
            /* main gallery view */
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center">
                GALLERY
              </h1>

              <div className="mb-8 md:mb-12 text-center text-sm md:text-base">
                I do portrait, birthday, events, conceptual.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {clientAlbums.map((album, i) => (
                  <div
                    key={album.id}
                    className="aspect-[3/2] border border-gray-300 rounded-lg overflow-hidden 
                              hover:shadow-lg transition-all duration-200 cursor-pointer relative group"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <Image
                      src={album.thumbnail}
                      alt={`${album.clientName} album`}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
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
