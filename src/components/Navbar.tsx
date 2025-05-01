
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { itemsCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center space-x-2">
            <IndianRupee className="h-6 w-6 text-crimson" />
            <span className="hidden font-bold sm:inline-block text-xl">
              Elite Ride Bazaar
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              to="/products/superbikes"
              className="transition-colors hover:text-primary"
            >
              Superbikes
            </Link>
            <Link
              to="/products/luxury-cars"
              className="transition-colors hover:text-primary"
            >
              Luxury Cars
            </Link>
            <Link
              to="/products/sports-cars"
              className="transition-colors hover:text-primary"
            >
              Sports Cars
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-crimson text-[10px] font-medium text-white">
                  {itemsCount}
                </span>
              )}
            </Button>
          </Link>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden",
          isMobileMenuOpen ? "block animate-in fade-in" : "hidden"
        )}
      >
        <nav className="container py-8 grid gap-6 text-lg">
          <Link
            to="/products/superbikes"
            className="flex w-full items-center py-3 border-b"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Superbikes
          </Link>
          <Link
            to="/products/luxury-cars"
            className="flex w-full items-center py-3 border-b"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Luxury Cars
          </Link>
          <Link
            to="/products/sports-cars"
            className="flex w-full items-center py-3 border-b"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sports Cars
          </Link>
        </nav>
      </div>
    </header>
  );
}
