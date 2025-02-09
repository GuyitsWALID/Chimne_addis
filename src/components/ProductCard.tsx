import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  image = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop",
  name = "Chocolate Croissant",
  price = 4.99,
  description = "Flaky, buttery croissant filled with rich chocolate",
  onAddToCart = () => console.log("Add to cart clicked"),
}: ProductCardProps) => {
  return (
    <Card className="w-[320px] h-[400px] bg-zinc-900 border-zinc-800 overflow-hidden">
      <div className="relative w-full h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-zinc-100 mb-2">{name}</h3>
        <p className="text-zinc-400 text-sm line-clamp-3 mb-2">{description}</p>
        <p className="text-red-500 font-bold">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onAddToCart}
          className="w-full bg-red-800 hover:bg-red-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
