import React, { useState, useMemo, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, X, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

// In a real application, this interface and state would likely be managed globally (e.g., Zustand, Redux, Context).
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mock data for demonstration purposes
const MOCK_CART_ITEMS: CartItem[] = [
  { id: '1', name: 'Wagyu Beef Burger', price: 28.50, quantity: 1, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop' },
  { id: '2', name: 'Truffle Parmesan Fries', price: 12.00, quantity: 2, image: 'https://images.unsplash.com/photo-1576192548454-ff1017e88b5c?q=80&w=1974&auto=format&fit=crop' },
  { id: '3', name: 'Artisanal Lava Cake', price: 15.75, quantity: 1, image: 'https://images.unsplash.com/photo-1586985289936-76a02a8298a0?q=80&w=1974&auto=format&fit=crop' },
];

const ShoppingCart: React.FC<ShoppingCartProps> = ({ open, onOpenChange }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(MOCK_CART_ITEMS);
  
  useEffect(() => {
    console.log('ShoppingCart component loaded/updated.');
  }, []);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
    } else {
      setCartItems(items =>
        items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col bg-background text-foreground w-full sm:max-w-md">
        <SheetHeader className="pr-14">
          <SheetTitle className="text-2xl font-serif">Your Cart</SheetTitle>
        </SheetHeader>
        <SheetClose asChild className="absolute right-4 top-4">
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
        </SheetClose>

        <Separator className="my-2 bg-border" />
        
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4 -mr-4">
              <div className="flex flex-col gap-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold line-clamp-1">{item.name}</p>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator className="my-2 bg-border" />

            <SheetFooter className="sm:flex-col sm:space-x-0 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                        <Link to="/checkout">Proceed to Checkout</Link>
                    </Button>
                </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center gap-4">
            <ShoppingCartIcon className="h-16 w-16 text-muted-foreground" />
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
            <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
            <SheetClose asChild>
                <Button asChild>
                    <Link to="/menu">Explore Menu</Link>
                </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;