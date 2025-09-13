import React, { useState, useEffect } from "react";

const Header = () => {
  const [lang, setLang] = useState("Ind");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menus = [
    { label: "Tentang", link: "tentang" },
    { label: "Menu", link: "#" },
    { label: "Gallery", link: "#" },
    { label: "Berita", link: "#" },
    { label: "Karir", link: "#" },
    { label: "Kontak", link: "#" },
  ];

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = menus
        .filter(menu => menu.link !== "#")
        .map(menu => document.getElementById(menu.link));
      for (let section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-between items-center px-8 py-4 border-b-2 border-[#09DCD5] bg-white relative">
      {/* Logo */}
      <div className="font-bold text-4xl">WonkCaffe</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        {menus.map((menu, idx) => (
          <a
            key={idx}
            href={menu.link !== "#" ? `#${menu.link}` : "#"}
            className={`font-medium transition ${
              activeSection === menu.link
                ? "text-[#09DCD5]"
                : "text-[#D2D0D0] hover:text-[#09DCD5]"
            }`}
          >
            {menu.label}
          </a>
        ))}
        {/* Language Switch */}
        <div className="ml-6 flex gap-2">
          <button
            onClick={() => setLang("Ind")}
            className={`px-3 py-1 rounded ${
              lang === "Ind" ? "bg-[#09DCD5] text-white" : "text-[#D2D0D0]"
            }`}
          >
            Ind
          </button>
          <button
            onClick={() => setLang("Eng")}
            className={`px-3 py-1 rounded ${
              lang === "Eng" ? "bg-[#09DCD5] text-white" : "text-[#D2D0D0]"
            }`}
          >
            Eng
          </button>
        </div>
      </nav>
      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-7 h-1 bg-gray-800 rounded"></span>
        <span className="block w-7 h-1 bg-gray-800 rounded"></span>
        <span className="block w-7 h-1 bg-gray-800 rounded"></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-48 bg-white shadow-md rounded-b z-20 flex flex-col py-4 px-6 md:hidden animate-fade-in">
          {menus.map((menu, idx) => (
            <a
              key={idx}
              href={menu.link !== "#" ? `#${menu.link}` : "#"}
              className={`py-2 font-medium transition ${
                activeSection === menu.link
                  ? "text-[#09DCD5]"
                  : "text-gray-800 hover:text-[#09DCD5]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {menu.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setLang("Ind")}
              className={`px-3 py-1 rounded ${
                lang === "Ind" ? "bg-gray-900 text-white" : "text-gray-900"
              }`}
            >
              Ind
            </button>
            <button
              onClick={() => setLang("Eng")}
              className={`px-3 py-1 rounded ${
                lang === "Eng" ? "bg-gray-900 text-white" : "text-gray-900"
              }`}
            >
              Eng
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;