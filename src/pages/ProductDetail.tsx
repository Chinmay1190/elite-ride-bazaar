
import { useParams, Link } from "react-router-dom";
import products from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, Heart, Share2, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Product Not Found</h1>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  // Handle quantity changes
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  // Handle wishlist (just a toast notification for now)
  const handleAddToWishlist = () => {
    toast.success("Added to wishlist", {
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  // Handle share (just a toast notification for now)
  const handleShare = () => {
    toast.success("Link copied", {
      description: "Product link copied to clipboard.",
    });
  };

  return (
    <div className="container py-8">
      <Link
        to={`/products/${product.category}`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to {product.category.split("-").join(" ")}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover h-[500px]"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">{formatPrice(product.price)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="border-t border-b py-4">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="rounded-none"
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                className="rounded-none"
              >
                +
              </Button>
            </div>

            <Button 
              onClick={handleAddToCart} 
              className="flex-1"
            >
              <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={handleAddToWishlist}>
              <Heart className="h-4 w-4 mr-2" /> Wishlist
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" /> Share
            </Button>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Free shipping for orders above ₹50,00,000</p>
            <p>• Secure payment options available</p>
            <p>• 7-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
