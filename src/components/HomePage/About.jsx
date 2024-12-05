import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mansmile from "../../assets/images/mansmile.jpg";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full max-w-sm p-4">
      <img
        src={mansmile}
        alt="Produce"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 text-center md:px-8 md:text-left">
      <h1 className="mb-4 text-3xl font-bold text-yellow-800 md:text-4xl underline">
        What We Do
      </h1>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
        Yonell Ventures produces eco-friendly personal care and household
        products, utilizing natural ingredients such as cocoa pod, turmeric,
        sandalwood, aloe vera, carrot, and lemongrass for laundry, skin, and
        hair care. The brand is committed to providing high-quality, sustainable
        products that improve daily routines. The product range includes organic
        shampoos, liquid soaps, laundry detergents, and bleach, designed to
        promote healthy living while supporting environmental sustainability.
      </p>
      <NavLink
        to="/about"
        className="px-6 py-2 text-sm font-bold text-white transition duration-300 bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 md:text-base"
        onClick={() => navigate("/about")}

      >
        Learn More
      </NavLink>
    </div>
  );
};

const Services = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen px-4 py-8 md:flex-row md:px-8 bg-gray-50">
      {/* Text Section */}
      <div ref={textRef} className="flex justify-center w-full md:w-1/2">
        <TextSection />
      </div>

      {/* Image Section */}
      <div ref={imageRef} className="flex justify-center w-full md:w-1/2">
        <ImageSection />
      </div>
    </div>
  );
};

export default Services;
