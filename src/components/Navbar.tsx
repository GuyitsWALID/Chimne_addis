import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="w-full h-16 bg-[#111111] fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-red-500" : "text-white hover:text-zinc-300"}`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`text-sm font-medium transition-colors ${isActive("/menu") ? "text-red-500" : "text-white hover:text-zinc-300"}`}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-red-500" : "text-white hover:text-zinc-300"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-red-500" : "text-white hover:text-zinc-300"}`}
          >
            Contact
          </Link>
        </div>

        {/* Center section - Brand */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-red-500"
        >
          Chimne
        </Link>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/signin")}
            className={`text-sm font-medium transition-colors ${isActive("/signin") ? "text-red-500" : "text-white hover:text-zinc-300"}`}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-sm font-medium px-4 py-2 rounded bg-[#8B0000] hover:bg-[#660000] text-white transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Right Section - Just to maintain layout */}
        <div className="w-8 md:hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;
