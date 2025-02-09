import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2080&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Chimne Bakery
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-2xl mx-auto">
            Artisanal breads and pastries baked fresh daily with the finest
            ingredients
          </p>
          <Button
            size="lg"
            className="bg-red-800 hover:bg-red-700 text-white text-lg"
            onClick={() => navigate("/menu")}
          >
            Order Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <ProductCard
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff"
              name="Artisan Sourdough"
              price={7.99}
              description="Freshly baked sourdough bread with perfect crust"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
              name="Chocolate Croissant"
              price={4.99}
              description="Flaky, buttery croissant filled with rich chocolate"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907"
              name="Blueberry Muffin"
              price={3.99}
              description="Moist muffin packed with fresh blueberries"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-6">Our Story</h2>
          <p className="text-lg text-zinc-300 mb-8">
            Since 1995, Chimne Bakery has been crafting exceptional breads and
            pastries using traditional methods and the finest ingredients. Our
            passion for baking is reflected in every item we create.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-2">Artisanal</h3>
              <p className="text-zinc-400">
                Handcrafted with care using traditional methods
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-2">
                Fresh Daily
              </h3>
              <p className="text-zinc-400">
                Baked fresh every morning for the best quality
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-2">Local</h3>
              <p className="text-zinc-400">
                Supporting local farmers and suppliers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
