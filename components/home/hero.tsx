import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-lime-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[300px] h-[400px] md:max-w-[800px] md:h-[600px] mb-24">
          <Image
            src="/home/hero.jpg"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
