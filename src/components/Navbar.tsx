import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-700/50 shadow-md transition duration-300 bg-black/30 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-white tracking-wide hover:text-indigo-400 transition-colors duration-300">
            <a href="#hero">Amogha Rao K</a>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all duration-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700 text-center py-4 space-y-2 animate-fade-down">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-white hover:bg-indigo-500 hover:bg-opacity-10 py-2 px-4 rounded-md transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
