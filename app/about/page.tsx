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
              I am drawn to quiet moments and my work is rooted in stillness,
              memory, and emotional presence. Photography has become my way of
              sitting with these quiet moments in reverence, shooting pictures
              not to possess them but to honor the moment.
            </p>

            <p>
              I work with soft light, muted palettes, and a patient approach
              that allows space for emotion to live within in the frame. Whether
              I&apos;m photographing an artist on stage, a chef in their
              element, or a glance shared across a room, I try to hold each
              moment gently, without interrupting its truth. I work with brands,
              publications, and individuals who value tone, texture, and
              emotional storytelling. If that speaks to you, I&apos;d love to
              connect.
            </p>

            <p>
              Currently based in Los Angeles and available for commissions
              worldwide.
            </p>

            <button className="self-start bg-lime-50 text-brown px-4 py-2 border border-brown hover:bg-brown hover:text-white transition">
              React Out
            </button>
          </div>
        </div>
      </main>
    </nav>
  );
}
