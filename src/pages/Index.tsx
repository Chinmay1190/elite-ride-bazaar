
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Luxury Vehicle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative container h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-4">
              Luxury Redefined
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Discover the finest collection of superbikes, luxury cars, and sports cars in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="animate-slide-in">
                <Link to="/products/superbikes">Explore Superbikes</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 animate-slide-in">
                <Link to="/products/luxury-cars">View Luxury Cars</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Premium Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/products/superbikes" className="group relative h-80 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Superbikes"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Superbikes</h3>
              <p className="text-white/80 mb-4">High-performance motorbikes designed for speed enthusiasts</p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Collection
              </Button>
            </div>
          </Link>
          
          <Link to="/products/luxury-cars" className="group relative h-80 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Luxury Cars"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Luxury Cars</h3>
              <p className="text-white/80 mb-4">Exclusive automobiles offering ultimate comfort and elegance</p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Collection
              </Button>
            </div>
          </Link>
          
          <Link to="/products/sports-cars" className="group relative h-80 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Sports Cars"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Sports Cars</h3>
              <p className="text-white/80 mb-4">High-performance vehicles designed for adrenaline seekers</p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Collection
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Vehicles</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link to="/products/all">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Elite Ride Bazaar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Selection</h3>
            <p className="text-muted-foreground">Curated collection of the world's finest vehicles.</p>
          </div>
          
          <div className="p-6 border rounded-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>
            <p className="text-muted-foreground">Multiple secure payment options for your convenience.</p>
          </div>
          
          <div className="p-6 border rounded-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-muted-foreground">Dedicated support team for all your inquiries.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
