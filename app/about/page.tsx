// app/about/page.tsx
import Image from "next/image";
import Navbar from "@/components/common/navbar";

export default function AboutPage() {
  return (
    <nav>
      <Navbar />
      <main className="min-h-screen bg-cream px-6 py-12 flex flex-col items-center justify-start bg-lime-50">
        <div className="max-w-4xl w-full flex flex-col md:flex-row gap-3">
          {/* image */}
          <div className="w-full md:w-xs mx-12 flex justify-center md:justify-start">
            <Image
              src="/about/about.jpg"
              alt="About"
              width={600}
              height={400}
              className="w-full h-auto max-w-xs md:max-w-full object-cover rounded"
            />
          </div>

          {/* text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-black space-y-6">
            <h2 className="text-lg font-semibold">ABOUT</h2>

            <p>
              I’m drawn to quiet, unspoken moments—where memory, emotion, and
              presence quietly unfold. Photography has become my way of honoring
              these moments, not by capturing them to keep, but by observing
              them with reverence.
            </p>

            <p>
              My work is shaped by soft light, muted tones, and a slow,
              attentive process that gives emotion room to breathe. Whether it’s
              an artist mid-performance, a chef immersed in their craft, or a
              fleeting glance across a room, I aim to document with care—never
              disrupting, only witnessing.
            </p>

            <p>
              I collaborate with brands, publications, and individuals who value
              texture, tone, and genuine visual storytelling. If that resonates
              with you, I’d love to connect.
            </p>

            <button className="self-start bg-lime-50 text-brown px-4 py-2 border border-brown hover:bg-brown hover:text-white transition">
              Reach Out
            </button>
          </div>
        </div>
      </main>
    </nav>
  );
}
