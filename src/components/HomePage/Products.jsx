import { useNavigate } from "react-router-dom";
import products from "../../utils/constants";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-2xl font-semibold py-5 underline text-yellow-700">
        Explore Our Products
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="border relative flex  w-full sm:w-auto  p-4 mb-4 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-500 cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-36 h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h2 className="text-lg py-5 font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-green-600 font-medium mt-2">
                GHS {product.price}
              </p>
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-lg font-semibold bg-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className=" text-black py-2 px-4">
                Place an Order
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
