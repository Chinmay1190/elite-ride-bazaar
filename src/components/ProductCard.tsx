
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-lg">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="product-image h-full w-full object-cover"
          />
        </div>
        
        {product.featured && (
          <div className="absolute top-2 right-2 bg-crimson text-white text-xs py-1 px-2 rounded-full">
            Featured
          </div>
        )}
      </Link>
      
      <div className="p-4 space-y-2 border-x border-b rounded-b-lg">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold truncate">{product.name}</h3>
        </Link>
        <p className="font-bold text-lg">{formatPrice(product.price)}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
        
        <Button 
          onClick={() => addItem(product)}
          className="w-full mt-4"
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
