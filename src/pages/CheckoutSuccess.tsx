
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CheckoutSuccess = () => {
  // Get current date and add 5 days for delivery estimate
  const currentDate = new Date();
  const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
  
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mt-2">
          Thank you for your purchase. Your order has been confirmed.
        </p>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4">Order Details</h2>
        
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">ERB-{Math.floor(Math.random() * 10000000)}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Order Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Estimated Delivery:</span>
            <span className="font-medium">{deliveryDate.toLocaleDateString()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Payment Method:</span>
            <span className="font-medium">Credit/Debit Card</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="font-semibold text-xl mb-4">Shipping Information</h2>
        
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Name:</span>
            <span className="font-medium">John Doe</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Email:</span>
            <span className="font-medium">john@example.com</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium">+91 98765 43210</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="text-muted-foreground">Address:</span>
            <span className="font-medium">123 Main Street, Delhi, 110001</span>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Button asChild size="lg">
          <Link to="/">Continue Shopping</Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to your email address.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
