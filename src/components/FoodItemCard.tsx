import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface FoodItemCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ id, name, price, imageUrl }) => {
  console.log('FoodItemCard loaded for:', name);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click event if any
    toast.success(`${name} has been added to your cart.`);
    console.log(`Added product ${id} to cart.`);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="group cursor-pointer"
    >
      <Card className="relative overflow-hidden rounded-lg bg-neutral-900 border-2 border-neutral-800 text-white transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10">
        <div className="overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225'}
              alt={name}
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </AspectRatio>
          {/* Overlay for button */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition-all duration-300">
            <Button
              size="lg"
              onClick={handleAddToCart}
              aria-label={`Add ${name} to cart`}
              className="bg-primary text-primary-foreground font-bold transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
        <CardContent className="p-4 text-left">
          <h3 className="text-xl font-bold tracking-tight text-neutral-100">{name}</h3>
          <p className="text-lg font-semibold text-primary/90">${price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FoodItemCard;