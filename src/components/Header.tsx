"use client";

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50
      bg-[#0A142F]/80 backdrop-blur-lg
      border-b border-white/10
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <div className="leading-tight">
            <p className="font-bold text-white">AM Software</p>
            <p className="text-xs text-gray-400">Solutions</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#get-quote"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Get Quote
        </a>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          ☰
        </button>
      </div>
    </header>
  );
}
