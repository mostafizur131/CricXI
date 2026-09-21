import { useState } from "react";
import { Menu, X, Coins } from "lucide-react";
import logo from "../assets/logo.png";

const NavBar = ({ coin }: { coin: number }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Fixture", "Teams", "Schedules"];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 ">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between md:h-20">
          {/* ========================================
              MOBILE HAMBURGER
          ======================================== */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* ========================================
              LOGO
              Mobile: Absolutely centered
              Desktop: Normal left position
          ======================================== */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img
              src={logo}
              alt="Cricket logo"
              className="h-11 w-auto object-contain md:h-14"
            />
          </a>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>

          {/* ========================================
              COIN
              Mobile: Right side
              Desktop: Right side
          ======================================== */}
          <button
            type="button"
            className="min-w-20 flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition hover:border-gray-200 hover:shadow"
          >
            <Coins className="h-4 w-4 text-yellow-500" />
            <span>{coin}</span>
          </button>
        </div>

        {/* ========================================
            MOBILE MENU
        ======================================== */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
