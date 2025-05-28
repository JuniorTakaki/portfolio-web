import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  topics: string[];
}

export function Navbar({ topics }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-6 py-3 flex justify-between items-center">
      {/* Logo / Nome */}
      <h1 className="text-white text-xl sm:text-2xl font-bold font-mono tracking-widest">
    Takaki.S
  </h1>

      {/* Menu desktop */}
      <div className="hidden sm:flex gap-10 text-white font-semibold tracking-wide">
        {topics.map((topic) => {
          const href = `#${topic.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <a
              key={topic}
              href={href}
              className="relative text-white transition-colors duration-300 hover:text-purple-500"
            >
              {topic}
            </a>
          );
        })}
      </div>

      {/* Botão do menu mobile */}
      <button
        className="sm:hidden text-white transition-all duration-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full backdrop-blur-md flex flex-col px-6 py-4 sm:hidden gap-4 z-40">
          {topics.map((topic) => {
            const href = `#${topic.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <a
                key={topic}
                href={href}
                className="text-white font-semibold transition-colors duration-300 hover:text-purple-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {topic}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
