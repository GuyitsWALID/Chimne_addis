import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen?: boolean;
  onClose?: () => void;
  items?: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}

const Cart = ({
  isOpen = true,
  onClose = () => console.log("Close cart"),
  items = [
    {
      id: "1",
      name: "Chocolate Croissant",
      price: 4.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop",
    },
    {
      id: "2",
      name: "Strawberry Tart",
      price: 6.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=350&fit=crop",
    },
  ],
  onUpdateQuantity = (id: string, quantity: number) =>
    console.log("Update quantity", id, quantity),
  onRemoveItem = (id: string) => console.log("Remove item", id),
}: CartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-zinc-900 border-zinc-800">
        <SheetHeader>
          <SheetTitle className="flex items-center text-zinc-100">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-400">
              <ShoppingCart className="h-12 w-12 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-zinc-800/50 p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-zinc-100 font-medium">{item.name}</h3>
                    <p className="text-red-500">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600"
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1),
                          )
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-zinc-100 w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-100">Total</span>
            <span className="text-red-500 font-bold">${total.toFixed(2)}</span>
          </div>
          <Button
            className="w-full bg-red-800 hover:bg-red-700 text-white"
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
