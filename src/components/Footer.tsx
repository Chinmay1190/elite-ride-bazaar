
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IndianRupee className="h-6 w-6 text-crimson" />
              <span className="font-bold text-xl">Elite Ride Bazaar</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Premium marketplace for luxury cars, sports cars, and high-performance superbikes in India.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products/superbikes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Superbikes
                </Link>
              </li>
              <li>
                <Link to="/products/luxury-cars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Luxury Cars
                </Link>
              </li>
              <li>
                <Link to="/products/sports-cars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sports Cars
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Luxury Avenue</p>
              <p>New Delhi, India 110001</p>
              <p>Email: info@eliteridebazaar.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; 2025 Elite Ride Bazaar. All Rights Reserved.</p>
          <p className="text-sm mt-1">Luxury Vehicle Marketplace in India</p>
        </div>
      </div>
    </footer>
  );
}
