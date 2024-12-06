import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import smilingimage from "../../assets/images/smilingimage.jpg";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jaj2gr2",
        "template_vo348b7",
        formRef.current,
        "So4G5NE49PJeSK3-B"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
        <div className="w-full md:w-1/2 rounded-md py-14 ">
          <img src={smilingimage} alt="" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-3xl py-2">
              Place Your Order
            </h1>
            <p>Send us a message</p>
          </div>

          <div className="px-4 md:px-14">
            <form
              action=""
              className="flex flex-col gap-4 "
              ref={formRef}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="text"
                name="product"
                placeholder="Product"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Quantity"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <textarea
                name="delivery_details"
                placeholder="Delivery Details"
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

      <Footer />
    </div>
  );
};

export default ContactUs;
