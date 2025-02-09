import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-500 mb-8 text-center">
          Contact Us
        </h1>

        <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-zinc-100">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-zinc-800 border-zinc-700 text-zinc-100"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-zinc-100">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-zinc-800 border-zinc-700 text-zinc-100"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="message" className="text-zinc-100">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="h-32 bg-zinc-800 border-zinc-700 text-zinc-100"
              />
            </div>
          </div>

          <Button className="w-full bg-red-800 hover:bg-red-700 text-white">
            Send Message
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold text-red-500 mb-2">Visit Us</h3>
            <p className="text-zinc-400">
              123 Bakery Street
              <br />
              San Francisco, CA 94105
            </p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold text-red-500 mb-2">Call Us</h3>
            <p className="text-zinc-400">(555) 123-4567</p>
          </div>

          <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold text-red-500 mb-2">Email Us</h3>
            <p className="text-zinc-400">hello@chimnebakery.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
