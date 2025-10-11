import { useEffect, useState } from 'react';

export default function HeaderClient() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-8 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/68e55206dd9a99d26d08a73b/68e7203ec72ce71aa5a7dd83_white%20runway%20trans.png"
              alt="Centerline Flight Training"
              className="h-20 w-auto"
            />
          </div>
          <div className="w-[3px] h-6 bg-white/30 hidden md:block"></div>
          <ul className={`md:flex list-none gap-8 ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-gray-900 md:bg-transparent p-4 md:p-0`}>
            <li>
              <a
                href="#programs"
                onClick={(e) => handleNavClick(e, '#programs')}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#fleet"
                onClick={(e) => handleNavClick(e, '#fleet')}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                Fleet
              </a>
            </li>
            <li>
              <a
                href="#discovery"
                onClick={(e) => handleNavClick(e, '#discovery')}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                Discovery
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, '#why-us')}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, '#faq')}
                className="text-white font-medium hover:text-yellow-400 transition-colors"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18014770418" className="secondary-button">
            (801) 477-0418
          </a>
          <button
            className="md:hidden text-white text-2xl bg-none border-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

