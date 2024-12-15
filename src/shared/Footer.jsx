import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/images/insta.jpg";
import link from "../assets/images/link.png";
import tiktok from "../assets/images/tiktok.webp";

const Footer = ({ bgcolor }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full px-6 py-8 bg-gray-800 text-white`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-evenly">
        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Contact Us</h4>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:" className="text-yellow-400 hover:underline">
              yonelventures@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <br />
            <a
              href="tel:242-612778"
              className="text-yellow-400 hover:underline"
            >
              +233 243-612778 <br />
              +233 207-494520
            </a>
          </p>
          <p>
            Location:
            <br />
            <a
              href="GPS: WR-161-8433"
              className="text-yellow-400 hover:underline"
            >
              GPS: WR-161-8434 <br />
              P.O. Box 190, Sekondi <br />
              Cucumber street <br />
              Asem Asa No 2 off the Takoradi <br />
              Cape Coast highway close to shama junction
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="text-yellow-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="text-yellow-400 hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-yellow-400 hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-yellow-400 hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/yonell_ventures1?igsh=ZG9haXY2aDd4NnF6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-10 h-10 rounded-lg"
              />
            </a>
            <a
              href="https://www.facebook.com/share/19VvMgrRCj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link} alt="LinkedIn" className="w-10 h-10 rounded-lg" />
            </a>
            <a
              href="https://vm.tiktok.com/ZMkLvRJGM/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" className="w-10 h-10 rounded-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {currentYear} Yonell-Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
