import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">
              Chimne Bakery
            </h3>
            <p className="text-sm">
              Artisanal breads and pastries baked fresh daily with the finest
              ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="hover:text-red-500">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Bakery Street</li>
              <li>San Francisco, CA 94105</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@chimnebakery.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Chimne Bakery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
