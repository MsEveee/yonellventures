import momwash from "../../assets/images/momwash.jpeg";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: `url(${momwash})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <li className="text-4xl font-extrabold underline text-white py-5">
            ABOUT US
          </li>
          {/* <p className="text-white font-bold text-lg">
        
      </p> */}
        </div>
      </div>

      <div className="py-10 px-8">
        <h2 className=" py-3 text-3xl font-bold text-yellow-700 underline">
          WHAT WE DO
        </h2>
        <p>
          Yonell Ventures produces eco-friendly personal care and household
          products, utilizing natural ingredients such as cocoa pod, turmeric,{" "}
          <br />
          sandalwood, aloe vera, carrot, and lemongrass for laundry, skin, and
          hair care.
        </p>
        <p className="py-4">
          The brand is committed to providing high-quality, sustainable products
          that improve daily routines. The product range includes organic
          shampoos, <br /> liquid soaps, laundry detergents, and bleach,
          designed to promote healthy living while supporting environmental
          sustainability.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-9 p-6 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading provider of ecofriendly, skin-safe cleaning
            solutions, revolutionizing the cleaning industry by harnessing the
            power of natural ingredients, like cocoa pods, while ensuring
            sustainability, affordability, and customer well-being.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            To offer a more sustainable and skin-friendly cleaning solution that
            benefits both the environment and consumers. We aim to bridge the
            gap between nature and cleanliness by providing a detergent that is
            tough on dirt but gentle on the skin.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Our Goal</h2>
          <p className="text-gray-700">
            Introduce and establish our detergent brand in local markets by
            building awareness around its skin-friendly and eco-friendly
            properties. We prioritize customer satisfaction and loyalty through
            exceptional product quality and engaging, targeted marketing
            campaigns on social media. We also aim to expand regionally and
            nationally to become a leading provider of natural cleaning
            products. Our aim is to build a strong and loyal customer base,
            recognized for sustainability, affordability, and skin health
            benefits. We are committed to continuous innovation to meet the
            evolving needs of our customers.
          </p>
        </div>
      </div>

      <div className="py-10 px-8">
        <h2 className="text-3xl font-semibold text-yellow-700 underline">WHAT WE PRODUCE</h2>
        <p className="py-2">We produce an extensive variety of products at our manufacturing facility.</p>

        <li>Liquid Detergents including handwash soap, dishwashing liquids, hair shampoo, shower gel, and more.</li>
        <li>Disinfectants, including  antiseptic solutions and general-purpose disinfectants.</li>
        
      </div>

      <div className="px-8 pb-5">
        <h2 className="text-lg  font-semibold">Key Features of Our Products</h2>
        <li>Multi-purpose: for hand washing, laundry, dishwashing, andskincare.</li>
        <li>Effective chemicals used alongside organic materials for powerful</li>
        <li>Eco-friendly, gentle on the skin, and tough on dirt.</li>
        <li>Gentle on skin, ideal for sensitive skin and irritation.</li>
        <li>High-quality materials ensure safety and performance</li>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
