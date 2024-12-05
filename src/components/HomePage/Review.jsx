import { Archive, Banknote, ThumbsUp, User } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-semibold text-yellow-700 underline">
        WHY CHOOSE US
      </h1>
      <p className="text-base leading-relaxed text-gray-700 py-3 px-3">
        At Yonell Ventures, we’re dedicated to bringing you a premium detergent
        brand that prioritizes your well-being and the environment. Our mission
        is to build awareness around the skin-friendly and eco-conscious
        qualities of our products while ensuring unmatched quality and customer
        satisfaction. Our goal is to become the go-to provider of natural
        cleaning solutions by delivering sustainability, affordability, and
        exceptional care for skin health. With a commitment to innovation, we
        continuously strive to meet and exceed your expectations, creating a
        community of loyal customers who value effective, earth-friendly
        cleaning products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
    <ThumbsUp className="text-yellow-500  text-4xl mb-4" />
    <p className="text-gray-700 text-center font-medium">We Provide You With Quality Products</p>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
    <User className="text-yellow-500 text-4xl mb-4" />
    <p className="text-gray-700 text-center font-medium">We go above and beyond to ensure customer satisfaction.</p>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
    <Archive className="text-yellow-500 text-4xl mb-4" />
    <p className="text-gray-700 text-center font-medium">We fulfill every order, no matter the quantity.</p>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
    <Banknote className="text-yellow-500 text-4xl mb-4" />
    <p className="text-gray-700 text-center font-medium">We deliver exceptional quality for every penny spent.</p>
  </div>
</div>

    </div>
  );
};

export default Review;
