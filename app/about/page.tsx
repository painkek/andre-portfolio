// app/about/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/common/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-lime-50 px-6 py-16">
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-0 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-3/6 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/about/about.jpg"
                alt="About"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* text */}
          <div className="w-full md:w-1/2 text-gray-800 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-brown">
              About Me
            </h1>

            <p className="leading-relaxed">
              I’m drawn to quiet, unspoken moments—where memory, emotion, and
              presence quietly unfold. Photography has become my way of honoring
              these moments, not by capturing them to keep, but by observing
              them with reverence.
            </p>

            <p className="leading-relaxed">
              My work is shaped by soft light, muted tones, and a slow,
              attentive process that gives emotion room to breathe. Whether it’s
              an artist mid-performance, a chef immersed in their craft, or a
              fleeting glance across a room, I aim to document with care—never
              disrupting, only witnessing.
            </p>

            <p className="leading-relaxed">
              I collaborate with brands, publications, and individuals who value
              texture, tone, and genuine visual storytelling. If that resonates
              with you, I’d love to connect.
            </p>

            <button className="mt-4 inline-block bg-brown text-white px-6 py-3 rounded-lg hover:bg-brown/90 transition">
              Reach Out
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
