import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'トップ', path: '/' },
  { label: '事業内容', path: '/services' },
  { label: '会社概要', path: '/about' },
  { label: '採用情報', path: '/recruit' },
  { label: 'お問い合わせ', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-[#1a2b4a] shadow-lg' : 'bg-[#1a2b4a]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://static.readdy.ai/image/da7e08cc1cb0c329c54c3ccbfd3bc827/2ba1a161c54e89fecb9ede1616aa3ff5.png"
              alt="FLOW株式会社ロゴ"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'text-[#f8b500]'
                    : 'text-white hover:text-[#f8b500]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-[#f8b500] text-[#1a2b4a] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#e6a800] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              無料相談
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a2b4a] flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-medium transition-colors duration-200 whitespace-nowrap ${
                location.pathname === link.path ? 'text-[#f8b500]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 bg-[#f8b500] text-[#1a2b4a] text-base font-bold px-8 py-3 rounded-full whitespace-nowrap cursor-pointer"
          >
            無料相談・お問い合わせ
          </Link>
        </nav>
      </div>
    </>
  );
}
