import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-20 bg-white overflow-hidden">
      {/* Logo container */}
      <div className="absolute inset-0 z-10 flex items-center px-8">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={180}
          height={90}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Angled gradient overlay on the right */}
      <div 
        className="absolute right-0 top-0 h-full"
        style={{
          width: '25%',
          background: 'linear-gradient(to right, white, #9ca3af)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />
    </header>
  );
}
