const HeroCarusol = ({ slide }) => {
  // Prevent errors if slide is undefined
  if (!slide) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-gradient-to-r from-blue-100 to-white">
      {/* Left text content */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600">{slide.subtitle}</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="flex justify-center">
        <img
          src={slide.image}
          alt={slide.title || "Stay Bangla"}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroCarusol;
