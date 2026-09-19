import { Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = ["Home", "Services", "About", "Contact"];

  return (
    <footer className="relative mt-40 bg-[#05081C] text-white">
      {/* =========================================
          NEWSLETTER CARD
      ========================================= */}
      <div className="absolute left-1/2 top-0 z-10 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-hidden rounded-2xl border border-[#D9D9D9] bg-white px-5 py-10 text-center shadow-sm sm:px-8 lg:py-12">
          {/* Left blue glow */}
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#8DBFFF]/40 blur-[80px]" />

          {/* Right peach glow */}
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#FFD0B5]/50 blur-[80px]" />

          {/* Newsletter Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 text-xs text-[#777777] sm:text-sm">
              Get the latest updates and news right in your inbox!
            </p>

            {/* Input + Button */}
            <form
              className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-xs text-gray-700 outline-none transition focus:border-[#D81B7E] focus:ring-1 focus:ring-[#D81B7E]/20"
                />
              </div>

              <button
                type="submit"
                className="h-11 rounded-lg bg-gradient-to-r from-[#F6A8D0] to-[#F6C84B] px-7 text-xs font-bold text-[#111111] transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-40 sm:px-8 lg:px-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Cricket logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Footer Columns */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* About Us */}
          <div>
            <h3 className="text-sm font-bold text-white">About Us</h3>

            <p className="mt-4 max-w-xs text-xs leading-5 text-[#A6A9B8]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-[#A6A9B8] transition hover:text-white"
                  >
                    • {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-sm font-bold text-white">Subscribe</h3>

            <p className="mt-4 text-xs leading-5 text-[#A6A9B8]">
              Subscribe to our newsletter for the latest updates.
            </p>

            <form
              className="mt-5 flex w-full max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 min-w-0 flex-1 rounded-l-lg border-0 bg-white px-3 text-xs text-gray-700 outline-none"
              />

              <button
                type="submit"
                className="h-10 rounded-r-lg bg-gradient-to-r from-[#F6A8D0] to-[#F6C84B] px-5 text-xs font-bold text-[#111111] transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* =========================================
          COPYRIGHT
      ========================================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-center px-5">
          <p className="text-center text-[11px] text-[#777B8C]">
            ©{new Date().getFullYear()} Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
