import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Components
import OrderHistoryItem from '@/components/OrderHistoryItem';

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data for demonstration
const pastOrders = [
  { id: "CKL-98765", date: "2024-08-15", total: 75.50, status: 'Delivered' as const },
  { id: "CKL-98123", date: "2024-08-10", total: 42.00, status: 'Delivered' as const },
  { id: "CKL-97531", date: "2024-07-28", total: 112.80, status: 'Cancelled' as const },
];

const savedAddress = {
  street: "123 Luxe Lane",
  city: "Metropolis",
  state: "CA",
  zip: "90210",
  isDefault: true,
};

const ProfilePage = () => {
  console.log('ProfilePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-28 sm:py-32">
        <Card className="w-full max-w-4xl mx-auto bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight">My Account</CardTitle>
            <CardDescription>
              Manage your profile, addresses, and view your order history.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/80">
                <TabsTrigger value="history">Order History</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
              </TabsList>

              {/* Order History Tab */}
              <TabsContent value="history" className="mt-6">
                 <div className="space-y-4">
                  {pastOrders.length > 0 ? (
                    pastOrders.map((order) => (
                      <OrderHistoryItem
                        key={order.id}
                        id={order.id}
                        date={order.date}
                        total={order.total}
                        status={order.status}
                      />
                    ))
                  ) : (
                    <div className="text-center py-10 text-muted-foreground">
                      <p>You haven't placed any orders yet.</p>
                      <Button variant="link" asChild className="mt-2">
                        <a href="/menu">Start an order</a>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Profile Edit Tab */}
              <TabsContent value="profile" className="mt-6">
                <Card className="bg-gray-900/50 border-gray-700">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your name and email address.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* Using basic form elements for this example */}
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="Alex" className="bg-gray-800 border-gray-600 focus:ring-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" className="bg-gray-800 border-gray-600 focus:ring-primary"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="alex.doe@example.com" className="bg-gray-800 border-gray-600 focus:ring-primary"/>
                            </div>
                            <Button type="submit" className="mt-4">Save Changes</Button>
                        </form>
                    </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses" className="mt-6">
                <Card className="bg-gray-900/50 border-gray-700">
                    <CardHeader>
                        <CardTitle>Manage Addresses</CardTitle>
                        <CardDescription>Add or remove your saved delivery addresses.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                           <div className="p-4 border rounded-md border-gray-700 bg-gray-900">
                                <p className="font-semibold">{savedAddress.street}</p>
                                <p className="text-sm text-muted-foreground">{savedAddress.city}, {savedAddress.state} {savedAddress.zip}</p>
                                <div className="flex items-center gap-4 mt-2">
                                    <Button variant="link" className="p-0 h-auto text-primary">Edit</Button>
                                    <Button variant="link" className="p-0 h-auto text-destructive">Remove</Button>
                                </div>
                           </div>
                           <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-800">Add a new address</Button>
                        </div>
                    </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;