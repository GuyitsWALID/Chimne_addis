import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2080&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
            Crafting exceptional breads and pastries since 1995
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-500 mb-6">
                Our Heritage
              </h2>
              <p className="text-zinc-300 mb-4">
                Founded in 1995 by Master Baker Jean-Pierre, Chimne Bakery began
                as a small neighborhood bakery with a simple mission: to bring
                authentic artisanal baking to our community.
              </p>
              <p className="text-zinc-300 mb-6">
                Today, while we've grown in size, our commitment to quality and
                tradition remains unchanged. Every loaf, every pastry, and every
                sweet treat is still crafted with the same care and attention as
                our very first day.
              </p>
              <Button
                onClick={() => navigate("/menu")}
                className="bg-red-800 hover:bg-red-700 text-white"
              >
                Explore Our Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579494376524-43a7e9d22877"
                alt="Baker working"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                Quality Ingredients
              </h3>
              <p className="text-zinc-300">
                We source the finest ingredients from local suppliers, ensuring
                every creation meets our high standards.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                Traditional Methods
              </h3>
              <p className="text-zinc-300">
                Our bakers use time-honored techniques passed down through
                generations to create authentic flavors.
              </p>
            </div>
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                Community First
              </h3>
              <p className="text-zinc-300">
                We're proud to be part of our local community, supporting events
                and giving back whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Jean-Pierre",
                role: "Master Baker",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jp",
              },
              {
                name: "Maria",
                role: "Head Pastry Chef",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
              },
              {
                name: "David",
                role: "Artisan Baker",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
              },
              {
                name: "Sophie",
                role: "Pastry Artist",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophie",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
