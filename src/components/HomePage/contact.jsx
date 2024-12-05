import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import smilingimage from "../../assets/images/smilingimage.jpg"



const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
       
        <div className="w-full md:w-1/2 rounded-md py-14 ">
        <img src={smilingimage} alt="" />
          {/* <h1 className="text-3xl font-semibold py-5  underline">Partner with Us Today</h1>
          <p className="mb-6 text-sm leading-relaxed  text-gray-700 md:text-lg">
           <img src={} alt="" />
          </p> */}
        </div>

        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-3xl py-2">
              Get in touch
            </h1>
            <p>Send us a message.</p>
          </div>

          <div className="px-4 md:px-14">
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="h-28 rounded px-5 py-3 outline-none border w-full"
              ></textarea>
              <button
                type="submit"
                className="py-3 border rounded-lg bg-yellow-500 text-white w-36 px-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="px-4 md:px-10 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <MapPinHouse />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Locate Us:</h2>
            <p className="text-sm md:text-base">
            Plot, No. 76, Blk A.
            , <br /> Yaw Nkrumah - Ashanti <br /> AE-0664-8910
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <PhoneCall />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Call Us:</h2>
            <p className="text-sm md:text-base">
              +233 541-655694
              <br />
              +233 506-075866
              <br />
              +233 553-396566
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <Mail />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Email:</h2>
            <p className="text-sm md:text-base">bidigreenghanalimited@gmail.com</p>
          </div>
        </div>
      </div> */}

      <Footer/>
    </div>
  );
};

export default ContactUs;
