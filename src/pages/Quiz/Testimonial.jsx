import testimonial from "../../assets/testimonial.json";

export default function Testimonial() {
  return (
    <div>
      <section id="testimoni" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonial</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonial.map((item) => (
            <div
              key={item.id}
              className="bg-[#f3fdff] p-6 shadow rounded text-center"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-700 italic mb-2">"{item.review}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
