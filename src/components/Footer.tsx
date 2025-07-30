import { Instagram, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "../utils/consts";
import Image from "./Image";

export default function Footer() {
  const location = useLocation();
  return (
    <footer className={`bg-gray-900 text-white ${location.pathname == "/blogs" && "absolute bottom-0 left-0 right-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  imageClass="invert"
                  wrapperClass="rounded-none"
                  height={50}
                  width={100}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering smart, scalable digital solutions to help healthcare
                brands thrive in a connected world.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+91 6353142027</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>hello@logoname.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              {navigationItems.map(({ name, href }) => (
                <li key={href} className="list-none">
                  <Link
                    to={href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="flex items-center space-x-4">
                <li>
                  <a
                    href="https://www.instagram.com/docversemedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </li>
                {/* Add more social media links */}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Docvers Media. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
