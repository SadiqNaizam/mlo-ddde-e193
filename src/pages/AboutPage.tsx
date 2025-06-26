import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ChefHat, Leaf, Sparkles } from 'lucide-react';

const AboutPage = () => {
  console.log('AboutPage loaded');

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container py-16 md:py-24">
          
          {/* Page Header */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">Our Culinary Journey</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover the passion, philosophy, and people behind CloudKitchen Luxe.
            </p>
          </section>

          {/* Our Story Section */}
          <section className="mb-16">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl text-white">The Story of Luxe</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  CloudKitchen Luxe was born from a simple yet profound idea: that a dining experience delivered to your door should be as memorable and exquisite as one in a fine restaurant. We saw a world of convenience that often compromised on quality and artistry. We decided to change that.
                </p>
                <p>
                  Our journey began with a team of visionary chefs and culinary artists dedicated to elevating the concept of at-home dining. We don't just cook; we craft experiences. Every dish is a testament to our commitment to innovation, quality, and the sheer joy of food.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Meet the Chefs Section */}
          <section className="mb-16">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Meet Our Master Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chef 1 */}
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop"
                    alt="Portrait of Chef Antoine"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2"><ChefHat className="text-primary"/> Chef Antoine Dubois</CardTitle>
                  <CardDescription>Executive Chef & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>With over 20 years of experience in Michelin-starred kitchens across Europe, Chef Antoine brings a touch of classic French elegance to modern cuisine. His vision is the driving force behind our menu's sophistication.</p>
                </CardContent>
              </Card>

              {/* Chef 2 */}
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1622023083437-8dde2d3f0b8a?q=80&w=2070&auto=format&fit=crop"
                    alt="Portrait of Chef Elena Sato"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2"><ChefHat className="text-primary"/> Chef Elena Sato</CardTitle>
                  <CardDescription>Head of Culinary Innovation</CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>Chef Elena is a master of fusion, blending traditional Japanese techniques with bold, global flavors. She is the creative genius behind our most innovative and surprising dishes, constantly pushing the boundaries of taste.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Philosophy Section */}
          <section>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <Card className="bg-gray-900/50 border-gray-800 p-6">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                           <Leaf className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Ingredient Purity</h3>
                    <p className="text-muted-foreground">We believe extraordinary meals begin with extraordinary ingredients. We partner with local, sustainable farms to source the freshest produce and highest-quality proteins available.</p>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800 p-6">
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                           <Sparkles className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Culinary Artistry</h3>
                    <p className="text-muted-foreground">Our kitchen is a studio where culinary art comes to life. Each dish is meticulously designed, prepared, and plated to be a feast for the eyes as well as the palate.</p>
                </Card>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;