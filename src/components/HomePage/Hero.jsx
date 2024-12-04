import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import shower from "../../assets/images/shower.jpg";
import dtergent from "../../assets/images/dtergent.jpg"; // Add more images as needed
import washingL from "../../assets/images/washingL.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const texts = [
    "WELCOME TO YONELL VENTURES!!!!",
    
  ];

  const textRefs = useRef([]);
  const images = [dtergent, washingL, shower]; // Array of background images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle text animation
  useEffect(() => {
    if (textRefs.current.length > 0) {
      gsap.fromTo(
        textRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Background image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div
      className="relative w-full bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"
        aria-hidden="true"
      ></div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="text-white">
          {texts.map((text, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-xl md:text-3xl lg:text-5xl font-bold mb-4"
            >
              {text}
            </div>
           
          ))}
          <p className="text-4lg font-extrabold ">We Provide the best Detergent,Disinfectant and Shower Gell</p>
        </div>
        {/* Call-to-Action Button */}
        <button
          className="mt-6 px-6 py-3 bg-yellow-500 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-4"
          onClick={() => navigate("/products")}
        >
          Browse Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
