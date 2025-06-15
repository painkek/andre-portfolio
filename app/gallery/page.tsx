"use client";

import Navbar from "@/components/common/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];

  const handleImageClick = (index) => {
    setSelectedAlbum(index);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-lime-50">
        <div className="min-h-screen p-4 md:p-8 mx-auto font-sans text-black">
          {/* album view */}
          {selectedAlbum !== null ? (
            <div className="max-w-6xl mx-auto">
              {/* album header */}
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold mt-2">PORTFOLIO</h2>
              </div>

              {/* main image */}
              <div className="mb-8">
                <Image
                  src={galleryImages[selectedAlbum]}
                  alt={`Gallery image ${selectedAlbum + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* navigation and image count */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={closeAlbum}
                  className="text-black hover:text-gray-600 text-lg"
                >
                  ← Back to Gallery
                </button>
                <div className="text-black">
                  Image {selectedAlbum + 1} of {galleryImages.length}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center">
                GALLERY
              </h1>

              <div className="mb-8 md:mb-12 text-center text-sm md:text-base">
                i do portrait, birthday, events, conceptual.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {galleryImages.map((imgSrc, i) => (
                  <div
                    key={i}
                    className="aspect-[3/2] border border-gray-300 rounded-lg overflow-hidden 
                              hover:shadow-lg transition-all duration-200 cursor-pointer relative group"
                    onClick={() => handleImageClick(i)}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Gallery image ${i + 1}`}
                      width={800}
                      height={533}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-lg transition-opacity duration-300">
                        View all
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
