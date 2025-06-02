import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  User,
  Search,
  ShoppingCart,
  X,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";
import ShopDropdown from "../components/ShopDropdown";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full">
      <div className="w-full flex justify-between items-center px-12 py-2 shadow-none md:hidden">
        <div className="font-bold text-primary text-2xl font-bold">
          Econoura
        </div>
        <div className="flex gap-4 ">
          <button>
            <User size={22} />
          </button>
          <button>
            <Search size={22} />
          </button>
          <button>
            <ShoppingCart size={22} />
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-[64px] left-0 w-full h-screen bg-white z-50 p-6 md:hidden">
          <nav className="flex flex-col items-center space-y-6 text-neutral-500 text-3xl font-medium">
            <Link to="/" className="hover:text-neutral-800">
              Home
            </Link>
            <Link to="/product" className="hover:text-neutral-800">
              Product
            </Link>
            <Link to="/pricing" className="hover:text-neutral-800">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-neutral-800">
              Contact
            </Link>
          </nav>
        </div>
      )}

      <div className="w-full hidden text-sm md:flex justify-between items-center px-4 lg:px-16 py-2 bg-[#252B42] text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={16} className="text-white" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} className="text-white" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div>
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Follow Us :</span>
          <div className="flex gap-2">
            <Instagram size={16} className="text-white cursor-pointer" />
            <Youtube size={16} className="text-white cursor-pointer" />
            <Facebook size={16} className="text-white cursor-pointer" />
            <Twitter size={16} className="text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full hidden md:flex justify-between items-center px-4 lg:px-16 py-4 bg-white gap-40">
        <Link to="/" className="font-bold text-primary text-2xl font-bold">
          Econoura
        </Link>
        <div className="w-full flex items-center justify-between text-sm">
          <nav className="flex items-center space-x-6 text-neutral-500 font-bold">
            <Link to="/" className="cursor-pointer hover:text-gray-800 ">
              Home
            </Link>
            <ShopDropdown
              isOpen={isShopMenuOpen}
              onToggle={toggleShopMenu}
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
            />
            <Link to="/about" className="hover:text-gray-800">
              About
            </Link>
            <Link to="/blog" className="hover:text-gray-800">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-gray-800">
              Contact
            </Link>
            <Link to="/pages" className="hover:text-gray-800">
              Pages
            </Link>
          </nav>
          <div className="flex items-center space-x-5 text-[#23A6F0]">
            <div className="flex items-center gap-1 font-bold">
              <User size={16} />
              <div className="flex gap-1">
                <Link to="/login" className="hover:text-blue-500">
                  Login
                </Link>
                <span>/</span>
                <Link to="/register" className="hover:text-blue-500">
                  Register
                </Link>
              </div>
            </div>
            <div className="relative">
              <button onClick={toggleSearch}>
                <Search size={16} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded p-2">
                  <div className="flex items-center border border-gray-300 rounded">
                    <input
                      type="text"
                      placeholder="Ara..."
                      className="w-full px-3 py-1 outline-none text-gray-700"
                    />
                    <Search size={16} className="mr-2 text-gray-500" />
                  </div>
                </div>
              )}
            </div>
            <Link to="/cart" className="relative flex items-center gap-1">
              <ShoppingCart size={16} />
              <span>1</span>
            </Link>
            <Link to="/wishlist" className="relative flex items-center gap-1">
              <Heart size={16} />
              <span>1</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
