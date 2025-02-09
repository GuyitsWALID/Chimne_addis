import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MobileNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-transparent focus:bg-transparent"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] bg-[#111111] border-none p-0"
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-transparent focus:bg-transparent"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`px-6 py-4 text-base transition-colors hover:bg-zinc-900/50 ${isActive("/") ? "text-red-500" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            onClick={handleLinkClick}
            className={`px-6 py-4 text-base transition-colors hover:bg-zinc-900/50 ${isActive("/menu") ? "text-red-500" : "text-white"}`}
          >
            Menu
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`px-6 py-4 text-base transition-colors hover:bg-zinc-900/50 ${isActive("/about") ? "text-red-500" : "text-white"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`px-6 py-4 text-base transition-colors hover:bg-zinc-900/50 ${isActive("/contact") ? "text-red-500" : "text-white"}`}
          >
            Contact
          </Link>

          <div className="mt-auto border-t border-zinc-800/50 p-6 space-y-4">
            <Link
              to="/signin"
              onClick={handleLinkClick}
              className={`block text-base transition-colors hover:text-red-400 ${isActive("/signin") ? "text-red-500" : "text-white"}`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={handleLinkClick}
              className="block text-base px-4 py-2.5 rounded-md bg-gradient-to-br from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white text-center transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-red-900/20"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
