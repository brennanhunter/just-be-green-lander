import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          New Sites Under Development
        </h1>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Who Are We?
          </h2>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            We are an Aquaponics company helping create self sustaining living across the globe.
          </p>
        </div>

        <a
          href="https://justbegreenworldnews.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#71C863] hover:bg-[#5db04f] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Sign In
        </a>
      </div>
    </section>
  );
}
