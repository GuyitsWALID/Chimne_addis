import React, { useState } from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Chocolate Croissant",
      price: 4.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop",
    },
  ]);

  const handleAddToCart = (productId: string) => {
    console.log(`Adding product ${productId} to cart`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      quantity === 0
        ? prevItems.filter((item) => item.id !== id)
        : prevItems.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {/* Menu Hero */}
        <section className="relative h-[40vh] flex items-center justify-center mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2080&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Menu
            </h1>
            <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
              Discover our selection of freshly baked goods
            </p>
          </div>
        </section>

        {/* Categories */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 mb-12">
            {["All", "Breads", "Pastries", "Cakes", "Seasonal"].map(
              (category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${category === 'All' ? 'bg-red-800 text-white' : 'text-zinc-400 hover:text-white'}"
                >
                  {category}
                </button>
              ),
            )}
          </div>

          <ProductGrid onAddToCart={handleAddToCart} />
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Home;
