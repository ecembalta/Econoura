import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full pb-4 md:px-0 bg-gray-100">
      <div className="items-center mx-auto">
        <div className="md:w-[1050px] w-[348px] max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between items-start py-10">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            Econoura
          </div>
          <div className="flex space-x-6 text-[#23A6F0]">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="w-full bg-white py-10">
          <div className="md:w-[1050px] w-[348px] mx-auto flex flex-col md:flex-row justify-between text-left gap-6">
            <div>
              <h4 className="font-bold text-primary text-s mb-3">
                Company Info
              </h4>
              <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-s mb-3">Legal</h4>
              <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-s mb-3">Features</h4>
              <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    User Analytic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-s mb-3">Resources</h4>
              <ul className="space-y-2 text-[#737373] font-bold text-[14px]">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    IOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary text-s mb-3">
                Get In Touch
              </h4>
              <form className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-[14px]"
                />
                <button
                  type="submit"
                  className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500">Lorem imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className="md:w-[1050px] w-[348px] mx-auto text-left text-[#737373] text-[14px] pt-4">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
