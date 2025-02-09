import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { Badge } from "./ui/badge";

interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onMenuClick?: () => void;
}

const Header = ({
  cartItemCount = 3,
  onCartClick = () => console.log("Cart clicked"),
  onMenuClick = () => console.log("Menu clicked"),
}: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-zinc-900 border-b border-zinc-800 fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-zinc-100"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <div className="flex-1 flex justify-center md:justify-start">
          <h1 className="text-2xl font-bold text-red-500">Chimne</h1>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-100"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <Badge
                className="absolute -top-2 -right-2 bg-red-500 text-white"
                variant="secondary"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
