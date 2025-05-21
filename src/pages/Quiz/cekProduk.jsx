import { useState } from "react";
import { useNavigate } from "react-router-dom";
import produk from "../../assets/produk.json";

export default function CekProduk() {
  const [query, setQuery] = useState("");
  const [hasil, setHasil] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCek = (e) => {
    e.preventDefault();
    setError("");
    setHasil([]);

    if (query.trim() === "") {
      setError("Masukkan kata kunci untuk pencarian.");
      return;
    }

    const hasilPencarian = produk.filter((item) => {
      const q = query.toLowerCase();
      return (
        item.kode_produk.toLowerCase().includes(q) ||
        item.nama_produk.toLowerCase().includes(q) ||
        item.harga.toString().includes(q) ||
        item.stok.toString().includes(q) ||
        (item.review && item.review.toLowerCase().includes(q))
      );
    });

    if (hasilPencarian.length === 0) {
      setHasil([{ status: "not_found" }]);
    } else {
      setHasil(
        hasilPencarian.map((item) => ({
          status: item.stok > 0 ? "available" : "empty",
          data: item,
        }))
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cek Ketersediaan Produk</h2>
      <form onSubmit={handleCek} className="mb-4">
        <input
          type="text"
          placeholder="Cari berdasarkan kode, nama, harga, stok, atau review..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-2"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex w-full items-center justify-between">
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Cari Produk</button>
        <button type="button" onClick={() => navigate("/produk")} className="text-sm text-blue-600 hover:underline">Kembali</button>
        </div>
      </form>

      {/* Hasil */}
      {hasil.length > 0 && (
        <div className="mt-4 space-y-4">
          {hasil.map((item, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-50">
              {item.status === "available" && (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-600 text-2xl">✅</span>
                    <p className="font-medium">
                      Produk <strong>{item.data.nama_produk}</strong> tersedia dengan
                      harga <strong>Rp {item.data.harga.toLocaleString()}</strong>.
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Stok tersedia: <strong>{item.data.stok}</strong>
                  </p>
                  {item.data.review && (
                    <p className="text-sm text-gray-600 italic mb-2">
                      Review: "{item.data.review}"
                    </p>
                  )}
                  <img
                    src={item.data.image}
                    alt={item.data.nama_produk}
                    className="w-32 h-32 object-cover rounded-md shadow"
                  />
                </>
              )}

              {item.status === "empty" && (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-yellow-500 text-2xl">⚠️</span>
                    <p className="font-medium">
                      Produk <strong>{item.data.nama_produk}</strong> saat ini sedang
                      habis.
                    </p>
                  </div>
                  <img
                    src="https://www.portent.com/wp-content/uploads/2019/07/Out-of-stock-red-square-grunge-textured-rubber-stamp-seal.-Sold-out-sign.-1066573002_5000x3750.jpeg"
                    alt="Out of Stock"
                    className="w-24 h-24 object-contain"
                  />
                </>
              )}

              {item.status === "not_found" && (
                <div className="flex items-center gap-3 text-red-600">
                  <span className="text-2xl">❌</span>
                  <p>Produk tidak ditemukan.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
