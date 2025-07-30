import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookACallBtn from "./BookACallBtn";
import Image from "./Image";
import { navigationItems } from "../utils/consts";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const nav = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);



  const handleNavigation = (href: string) => {
    nav(href);
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="bg-helper-400 relative">
      <div className="nav-wrapper container">
        {/* Main navigation */}

        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center max-md:justify-between h-16">
              <div className="flex-shrink-0">
                <h1
                  className="text-xl font-bold cursor-pointer"
                  onClick={() => nav("/")}
                >
                  <Image
                    src="/logo.png"
                    wrapperClass="rounded-none"
                    height={30}
                    width={70}
                  />
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigationItems.map((item) => {
                    // const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-white bg-opacity-20 "
                            : "text-black hover:bg-white hover:bg-opacity-10 hover:"
                        }`}
                      >
                        {/* <Icon className="h-4 w-4" /> */}
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="text-right">
              <BookACallBtn
                variant="solid"
                color="primary"
                size="sm"
                text="Book Now"
                customClass="max-md:hidden"
              />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover: hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out  ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 max-md:pb-6"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-20 rounded-lg mt-2 ">
              {navigationItems.map((item) => {
                // const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center space-x-3 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-white bg-opacity-20 "
                        : "text-gray-200 hover:bg-white hover:bg-opacity-10 hover:"
                    }`}
                  >
                    {/* <Icon className="h-5 w-5" /> */}
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[-1] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
