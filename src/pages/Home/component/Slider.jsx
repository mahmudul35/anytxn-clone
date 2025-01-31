import React, { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle";

const slides = [
  {
    id: 1,
    title: "Customer focused",
    heading: "Agile and adaptable for growth",
    description: (
      <p>
        Innovate with evolving customer demands through our open platform-based
        technology architecture. Stay ahead of the ever-changing financial
        landscape with a strong focus on security, compliance, and performance.{" "}
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, mollitia
        ducimus. Reprehenderit maxime dolorum velit, reiciendis esse, expedita
        rem eos nemo minus delectus quo quis perspiciatis modi sapiente magnam
        ea!
      </p>
    ),
    image: "https://i.ibb.co.com/JWtM4YtK/girl2.jpg",
  },
  {
    id: 2,
    title: "Agile and adaptable",
    heading: "Adaptability is the key to success",
    description: (
      <p>
        Innovate with evolving customer demands through our open platform-based
        technology architecture. Stay ahead of the ever-changing financial
        landscape with a strong focus on security, compliance, and performance.{" "}
        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus nemo mollitia vero aut veritatis, deserunt praesentium omnis fuga,
        eligendi quibusdam nisi a magnam cupiditate inventore adipisci voluptas
        animi iure facilis.
      </p>
    ),
    image: "https://i.ibb.co.com/5XwGSDxg/girl1.jpg",
  },
  {
    id: 3,
    title: "Compliance ready",
    heading: "Stay ahead of regulatory requirements",
    description: (
      <p>
        Ensure seamless compliance with evolving global regulations while
        maintaining the trust of your stakeholders through secure, transparent
        processes.
        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus nemo mollitia vero aut veritatis, deserunt praesentium omnis fuga,
        eligendi quibusdam nisi a magnam cupiditate inventore adipisci voluptas
        animi iure facilis.
      </p>
    ),
    image: "https://i.ibb.co.com/JWtM4YtK/girl2.jpg",
  },
  {
    id: 4,
    title: "Secure and safe",
    heading: "Security as a cornerstone",
    description: (
      <p>
        Leverage state-of-the-art security protocols to safeguard your assets,
        ensuring peace of mind for your business and your customers.
        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus nemo mollitia vero aut veritatis, deserunt praesentium omnis fuga,
        eligendi quibusdam nisi a magnam cupiditate inventore adipisci voluptas
        animi iure facilis.
      </p>
    ),
    image: "https://i.ibb.co.com/5XwGSDxg/girl1.jpg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <SectionTitle
        subtitle={"TECHNOLOGY BUILT FOR YOU"}
        title="The future of finance"
      />
      {/* Title Bar */}
      <div className="flex justify-center space-x-6 text-blue-600 font-semibold text-lg">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-4 py-2 rounded-lg ${
              index === currentIndex ? "bg-blue-100" : "hover:bg-blue-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Slider Content */}
      <div className="flex flex-col md:flex-row items-center h-[550px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-blue-600 font-bold text-xl uppercase">
            {slides[currentIndex].title}
          </h3>
          <h2 className="text-gray-900 font-extrabold text-4xl my-3">
            {slides[currentIndex].heading}
          </h2>
          <p className="text-gray-700  leading-relaxed">
            {slides[currentIndex].description}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].heading}
            className="w-full h-[95%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
