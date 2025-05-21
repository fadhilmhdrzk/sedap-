
export default function ErrorPage({ code, message, image }) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <img src={image} alt={`Error ${code}`} className="max-w-xs mb-8" />
        <h1 className="text-6xl font-bold text-hijau mb-4">{code}</h1>
        <p className="text-gray-600 text-lg mb-6">{message}</p>
        <a href="/" className="bg-hijau text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Kembali ke Beranda
        </a>
      </div>
    );
  }