import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { User, CreditCard, Package } from 'lucide-react';

// Define the form schema using Zod for validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  city: z.string().min(2, { message: "Please enter a valid city." }),
  zipCode: z.string().min(5, { message: "Please enter a valid ZIP code." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Please enter a valid 16-digit card number." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Please use MM/YY format." }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: "Please enter a valid CVC." }),
});

// Mock data for the order summary, inspired by the ShoppingCart component
const orderItems = [
  { id: '1', name: 'Wagyu Beef Burger', price: 28.50, quantity: 1, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop' },
  { id: '2', name: 'Truffle Parmesan Fries', price: 12.00, quantity: 2, image: 'https://images.unsplash.com/photo-1576192548454-ff1017e88b5c?q=80&w=1974&auto=format&fit=crop' },
  { id: '3', name: 'Artisanal Lava Cake', price: 15.75, quantity: 1, image: 'https://images.unsplash.com/photo-1586985289936-76a02a8298a0?q=80&w=1974&auto=format&fit=crop' },
];

const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shippingFee = 5.00;
const tax = subtotal * 0.08; // 8% tax
const total = subtotal + shippingFee + tax;


const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. A confirmation has been sent to your email.",
    });
    // Here you would typically handle payment processing and order creation
  }

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight font-serif">Checkout</h1>
          <p className="text-muted-foreground mt-2">Complete your order with a few simple steps.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Column: Form Details */}
            <div className="lg:col-span-3 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><User className="h-5 w-5" /> Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Street Address</FormLabel>
                        <FormControl><Input placeholder="123 Luxury Lane" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl><Input placeholder="Metropolis" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl><Input placeholder="10001" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5" /> Payment Details</CardTitle>
                  <CardDescription>All transactions are secure and encrypted.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl><Input placeholder="MM/YY" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cvc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC</FormLabel>
                          <FormControl><Input placeholder="123" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-2">
              <Card className="sticky top-28">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Package className="h-5 w-5" /> Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderItems.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                            <div>
                                <p className="font-medium line-clamp-1">{item.name}</p>
                                <p className="text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Shipping</p>
                      <p>${shippingFee.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Taxes</p>
                      <p>${tax.toFixed(2)}</p>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <div className="flex justify-between font-bold text-lg">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" size="lg" className="w-full">Place Order</Button>
                </CardFooter>
              </Card>
            </div>
            
          </form>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;