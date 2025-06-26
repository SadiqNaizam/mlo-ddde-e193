import React from 'react';
import { motion } from 'framer-motion';

// Import Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FoodItemCard from '@/components/FoodItemCard';

// Import shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Placeholder data for the menu items
const mainCourses = [
  { id: 'mc1', name: 'Wagyu Beef Burger', price: 28.50, imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop' },
  { id: 'mc2', name: 'Seared Scallops with Risotto', price: 34.00, imageUrl: 'https://images.unsplash.com/photo-1625938228941-85434259b12e?q=80&w=1974&auto=format&fit=crop' },
  { id: 'mc3', name: 'Miso Glazed Salmon', price: 31.75, imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop' },
  { id: 'mc4', name: 'Ribeye Steak with Asparagus', price: 45.00, imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1974&auto=format&fit=crop' },
];

const appetizers = [
  { id: 'ap1', name: 'Truffle Parmesan Fries', price: 12.00, imageUrl: 'https://images.unsplash.com/photo-1576192548454-ff1017e88b5c?q=80&w=1974&auto=format&fit=crop' },
  { id: 'ap2', name: 'Bruschetta with Balsamic Glaze', price: 14.50, imageUrl: 'https://images.unsplash.com/photo-1505253716362-afb74bf60d44?q=80&w=2070&auto=format&fit=crop' },
  { id: 'ap3', name: 'Crispy Calamari', price: 16.00, imageUrl: 'https://images.unsplash.com/photo-1579631542720-3a8138295a82?q=80&w=1983&auto=format&fit=crop' },
];

const desserts = [
  { id: 'ds1', name: 'Artisanal Lava Cake', price: 15.75, imageUrl: 'https://images.unsplash.com/photo-1586985289936-76a02a8298a0?q=80&w=1974&auto=format&fit=crop' },
  { id: 'ds2', name: 'Deconstructed Tiramisu', price: 14.00, imageUrl: 'https://images.unsplash.com/photo-1571115332346-95f77858686a?q=80&w=1974&auto=format&fit=crop' },
];

const beverages = [
    { id: 'bv1', name: 'Craft Elderflower Soda', price: 8.00, imageUrl: 'https://images.unsplash.com/photo-1553531384-411a247ccd78?q=80&w=1974&auto=format&fit=crop' },
    { id: 'bv2', name: 'Sparkling Water', price: 5.00, imageUrl: 'https://images.unsplash.com/photo-1607685166663-81d1b849b2b4?q=80&w=1974&auto=format&fit=crop' },
];


const MenuPage = () => {
  console.log('MenuPage loaded');

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="container py-12 md:py-20"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">Explore Our Menu</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover a symphony of flavors, crafted with passion and the finest ingredients.
            </p>
          </div>

          {/* Tabs for categories */}
          <Tabs defaultValue="main-courses" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-neutral-900/80 backdrop-blur-sm p-1 h-auto rounded-lg">
              <TabsTrigger value="main-courses">Main Courses</TabsTrigger>
              <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            {/* Content for Main Courses */}
            <TabsContent value="main-courses" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {mainCourses.map(item => (
                  <FoodItemCard key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
              </div>
            </TabsContent>

            {/* Content for Appetizers */}
            <TabsContent value="appetizers" className="mt-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {appetizers.map(item => (
                    <FoodItemCard key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
              </div>
            </TabsContent>
            
            {/* Content for Desserts */}
            <TabsContent value="desserts" className="mt-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {desserts.map(item => (
                    <FoodItemCard key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
              </div>
            </TabsContent>

            {/* Content for Beverages */}
            <TabsContent value="beverages" className="mt-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {beverages.map(item => (
                    <FoodItemCard key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                ))}
              </div>
            </TabsContent>
            
          </Tabs>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;