import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

interface ProductGridProps {
  products?: Product[];
  onAddToCart?: (productId: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      name: "Chocolate Croissant",
      price: 4.99,
      description: "Flaky, buttery croissant filled with rich chocolate",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      name: "Artisan Sourdough",
      price: 7.99,
      description: "Freshly baked sourdough bread with perfect crust",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907",
      name: "Blueberry Muffin",
      price: 3.99,
      description: "Moist muffin packed with fresh blueberries",
    },
  ],
  onAddToCart = (productId: string) =>
    console.log(`Add product ${productId} to cart`),
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-[800px] bg-zinc-950 p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
