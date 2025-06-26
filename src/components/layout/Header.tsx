import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart as ShoppingCartIcon, UtensilsCrossed } from 'lucide-react';
import ShoppingCart from '@/components/ShoppingCart';

const Header: React.FC = () => {
  console.log('Header loaded');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">CloudKitchen Luxe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClasses}>
            Menu
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCartIcon className="h-5 w-5" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">3</Badge>
                <span className="sr-only">Open Shopping Cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <ShoppingCart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;