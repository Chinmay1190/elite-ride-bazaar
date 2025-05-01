
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Trash2, ShoppingCart } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, total, checkout } = useCart();

  const shipping = subtotal > 5000000 ? 0 : 25000;

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link to="/products/all">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row items-start gap-4 border rounded-lg p-4"
              >
                <div className="w-full sm:w-40 h-32 rounded-md overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-lg">{item.product.name}</h3>
                    </Link>
                    <p className="font-bold">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Category: {item.product.category.split("-").join(" ")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Unit Price: {formatPrice(item.product.price)}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        +
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-20">
            <h2 className="font-bold text-xl mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping > 0 ? formatPrice(shipping) : "Free"}</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <Button className="w-full mt-6" size="lg" onClick={checkout}>
              Checkout
            </Button>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              Free shipping for orders above ₹50,00,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
