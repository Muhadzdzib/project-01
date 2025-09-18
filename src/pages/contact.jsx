import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { supabase } from "../../supabaseClient"; // pastikan path sesuai

const Contact = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 0,
  });
  const [notification, setNotification] = useState(null); // notifikasi

  const position = [-1.2675, 116.8289]; // Balikpapan
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
  });

  // === Fetch data awal ===
  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from("feedbacks")
        .select("*")
        .order("id", { ascending: false });

      if (error) console.error("Fetch error:", error);
      else setFeedbacks(data || []);
    };

    fetchFeedbacks();
  }, []);

  // === Supabase Realtime Listener ===
  useEffect(() => {
    const channel = supabase
      .channel("feedback-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedbacks" },
        (payload) => {
          setFeedbacks((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // === Handle Submit ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message || !formData.rating) return;

    const { error } = await supabase.from("feedbacks").insert([
      {
        name: formData.name,
        message: formData.message,
        rating: formData.rating,
      },
    ]);

    if (error) {
      console.error("Insert error:", error);
      setNotification({
        type: "error",
        message: "Gagal !",
      });
    } else {
      setNotification({
        type: "success",
        message: "Terimakasih !",
      });
    }

    setFormData({ name: "", message: "", rating: 0 });

    // hilangkan notif setelah 3 detik
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white py-10 px-6 md:px-12 pt-20 flex flex-col gap-10"
    >
      {/* === Notifikasi === */}
      {notification && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white z-50 ${
            notification.type === "success" ? "bg-[#59AC77]" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      {/* === Bagian Atas: Form + Maps === */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Form */}
        <div className="w-full md:w-1/2 p6">
          <h2 className="text-2xl font-bold mb-4">Tinggalkan Pesan</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-lg p-2 border-[#09DCD5]"
                placeholder="Nama / Username"
              />
            </div>

            <div>
              <textarea
                rows="3"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border rounded-lg p-2 border-[#09DCD5]"
                placeholder="Tulis pesan Anda..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nilai kami
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`cursor-pointer text-2xl ${
                      formData.rating >= star
                        ? "text-[#09DCD5]"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#09DCD5] text-white px-6 py-2 rounded-lg hover:bg-black transition"
            >
              Kirim
            </button>
          </form>
        </div>

        {/* Maps */}
        <div className="w-full md:w-1/2 h-[400px] rounded-lg shadow-md overflow-hidden">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>Lokasi Kami - Balikpapan</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* === Feedback Loop === */}
      <div className="overflow-hidden relative w-fullpy-6 rounded-lg">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...feedbacks, ...feedbacks].map((fb, idx) => (
            <div
              key={idx}
              className="min-w-[250px] max-w-[250px] bg-gray-100 p-4 rounded-lg"
            >
              <p className="text-sm italic">"{fb.message}"</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-semibold">{fb.name}</span>
                <span className="text-yellow-400">
                  {"★".repeat(fb.rating)}
                  {"☆".repeat(5 - fb.rating)}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
