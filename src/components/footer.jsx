import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#09DCD5] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kiri */}
        <div>
          <h2 className="text-2xl font-bold">Wonk Cafe</h2>
          <p className="mt-2 text-sm">
            Memberikan layanan terbaik dengan desain modern dan elegan.
          </p>
        </div>

        {/* Tengah */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-lg font-semibold mb-2">Ikuti Kami</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-black transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaTiktok />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaYoutube />
            </a>

            <a href="#" className="hover:text-black transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="text-sm text-right">
          <h3 className="text-lg font-semibold mb-2">Lokasi</h3>
          <p>Jl. Contoh Raya No. 123</p>
          <p>Balikpapan, Indonesia</p>
          <p>Email: info@mywebsite.com</p>
        </div>
      </div>

      {/* Bawah */}
      <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Muhadzdzib. All rights reserved.
      </div>
    </footer>
  );
}
