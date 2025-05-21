import { Link } from "react-router-dom";
import produk from "../../assets/produk.json";

export default function Produk() {
  const produkNusantara = produk.filter((p) => p.kategori === "Nusantara");
  const produkWestern = produk.filter((p) => p.kategori === "Western");

  const renderProduk = (data) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((product) => (
        <div
          key={product.kode_produk}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={product.image}
            alt={product.nama_produk}
            className="w-full h-48 object-cover"
          />
          <div className="flex-1 flex flex-col justify-between p-4">
            <h2 className="text-lg font-semibold mb-1">
              {product.nama_produk}
            </h2> 
            <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
              <span className="font-medium">
                Rp {product.harga.toLocaleString()}
              </span>
              <span className="flex items-center text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.429L24 9.748l-6 5.853 1.417 8.263L12 19.771 4.583 23.864 6 15.601 0 9.748l8.332-1.732z" />
                </svg>
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-4">
      {/* Header & Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-center w-full">Our Menu</h1>
        <div className="absolute right-6">
          <Link to="/cekProduk">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
              Cek Produk
            </button>
          </Link>
        </div>
      </div>

      {/* Kategori: Nusantara */}
      <h2 className="text-2xl font-bold mb-4">Menu Nusantara</h2>
      {renderProduk(produkNusantara)}

      {/* Kategori: Western */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Menu Western</h2>
      {renderProduk(produkWestern)}

    </div>
  );
}
