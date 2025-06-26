import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, RefreshCw } from 'lucide-react';
import { toast } from "sonner";

interface OrderHistoryItemProps {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Cancelled';
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ id, date, total, status }) => {
  console.log('OrderHistoryItem loaded for order:', id);

  const getStatusVariant = (): 'secondary' | 'default' | 'destructive' => {
    switch (status) {
      case 'Processing':
        return 'secondary';
      case 'Delivered':
        return 'default'; // default is a subtle green in many themes
      case 'Cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const handleReorder = () => {
    console.log(`Re-ordering order ${id}`);
    toast.success("Items from your past order have been added to your cart!");
  };

  const handleViewDetails = () => {
    // In a real app, this would likely open a modal or navigate to a details page.
    console.log(`Viewing details for order ${id}`);
    toast.info(`Showing details for Order #${id}`);
  };

  return (
    <Card className="w-full bg-gray-900/50 border-gray-700 text-gray-200 hover:bg-gray-800/60 transition-colors duration-300">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left Side: Order Info */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-grow">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-400">Order ID</p>
              <p className="font-mono text-sm font-semibold truncate">#{id}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-semibold">{date}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-lg font-bold">${total.toFixed(2)}</p>
            </div>
          </div>

          {/* Right Side: Status & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
             <Badge variant={getStatusVariant()} className="py-1 px-3 text-sm w-full sm:w-auto text-center justify-center">
                {status}
             </Badge>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" onClick={handleViewDetails} className="flex-1 border-gray-600 hover:bg-gray-700 hover:text-white">
                <Eye className="mr-2 h-4 w-4" />
                Details
              </Button>
              <Button variant="secondary" size="sm" onClick={handleReorder} className="flex-1 bg-gray-700 hover:bg-gray-600">
                <RefreshCw className="mr-2 h-4 w-4" />
                Re-order
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderHistoryItem;