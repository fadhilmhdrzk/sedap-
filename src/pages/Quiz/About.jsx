import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-white">

            {/* Main Offer Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Image */}
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/56/71/59/atmosphere.jpg"
                    alt="Promo Vacation"
                    className="w-full md:w-1/2 rounded-xl shadow-lg"
                />

                {/* Text Info */}
                <div className="md:w-1/2">
                    <p className="text-red-500 font-semibold uppercase text-sm mb-2">Exclusive Offer</p>
                    <h2 className="text-3xl font-Jost-Medium mb-4 leading-tight">Nikmati hidangan Impian Anda di Restoran kami</h2>
                    <p className="text-gray-600 mb-6 text-sm">Pilihan menu istimewa dengan rasa yang menggugah selera. Cocok untuk menemani setiap momen spesial bersama orang terdekat.</p>
                    <div className="flex items-center text-sm mb-4">
                        <span className="mr-4">Tersedia Set Menu 2 Orang</span>
                        <span className="mr-4">|</span>
                        <span className="text-red-500 font-bold">Hanya Rp150.000</span>
                    </div>
                    <Link to="/Login">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition">Pesan Sekarang</button>
                    </Link>
                </div>
            </div>

            {/* Popular Destinations Section */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold mb-1">Menu Terpopuler Kami</h3>
                        <p className="text-sm text-gray-500">Pilihan makanan favorit pelanggan dengan rasa terbaik.</p>
                    </div>
                    <Link to="/Produk">
                        <button className="border border-red-500 text-red-500 px-4 py-1 rounded text-sm hover:bg-red-500 hover:text-white transition">Lihat Semua</button>
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src="https://dcostseafood.id/wp-content/uploads/2023/04/Nasi-Goreng-Spesial.jpg" alt="Resort" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-xs text-red-400 mb-1">Menu Nusantara</p>
                            <h4 className="font-semibold text-lg">Nasi Goreng Spesial</h4>
                            <p className="text-sm text-gray-600">Rp.60.000 | ⭐ 4.8</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src="https://www.dapurkobe.co.id/wp-content/uploads/rendang-daging.jpg" alt="Eiffel" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-xs text-red-400 mb-1">Menu Nusantara</p>
                            <h4 className="font-semibold text-lg">Rendang Daging Sapi</h4>
                            <p className="text-sm text-gray-600">Rp.80.000 | ⭐ 4.6</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src="https://images.ctfassets.net/uexfe9h31g3m/6QtnhruEFi8qgEyYAICkyS/ab01e9b1da656f35dd1a721c810162a0/Spaghetti_bolognese_4x3_V2_LOW_RES.jpg?q=90&w=1200&h=600" alt="Floating Food" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <p className="text-xs text-red-400 mb-1">Western Food</p>
                            <h4 className="font-semibold text-lg">spaghetti bolognese</h4>
                            <p className="text-sm text-gray-600">Rp.80.000 |⭐ 4.7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
