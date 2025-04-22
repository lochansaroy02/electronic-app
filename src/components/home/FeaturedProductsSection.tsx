import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "../product/ProductCard";

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Intel Core i7-13700K Desktop Processor",
    price: 32999,
    originalPrice: 38999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "computer-parts",
    isFeatured: true,
    discountPercentage: 15
  },
  {
    id: "2",
    name: "TP-Link Archer AX6000 WiFi 6 Router",
    price: 19999,
    originalPrice: 24999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "networking",
    isFeatured: true,
    discountPercentage: 20
  },
  {
    id: "3",
    name: "Samsung 970 EVO Plus 1TB NVMe SSD",
    price: 8499,
    originalPrice: 11999,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "storage",
    isFeatured: true,
    discountPercentage: 29
  },
  {
    id: "4",
    name: "APC BX1100C-IN UPS 1100VA/660W",
    price: 5999,
    originalPrice: 7499,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "power-supplies",
    isFeatured: true,
    discountPercentage: 20
  },
  {
    id: "5",
    name: "D-Link CAT6 Ethernet Cable (305m)",
    price: 4499,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "cables",
    isNew: true,
    isFeatured: true
  },
  {
    id: "6",
    name: "Fluke 117 Digital Multimeter",
    price: 12999,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "tools",
    isFeatured: true,
    discountPercentage: 13
  }
];

const newArrivals = products.filter(product => product.isNew);
const bestSellers = products.filter((_, index) => index % 2 === 0);
const onSale = products.filter(product => product.discountPercentage && product.discountPercentage > 0);

const FeaturedProductsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Featured Products</h2>
        
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="trending" className="text-sm md:text-base px-4 py-2">Trending Now</TabsTrigger>
            <TabsTrigger value="new" className="text-sm md:text-base px-4 py-2">New Arrivals</TabsTrigger>
            <TabsTrigger value="best" className="text-sm md:text-base px-4 py-2">Best Sellers</TabsTrigger>
            <TabsTrigger value="sale" className="text-sm md:text-base px-4 py-2">On Sale</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.length > 0 ? 
                newArrivals.map(product => (
                  <ProductCard key={product.id} product={product} />
                )) : 
                <p className="text-center col-span-full py-8">New arrivals coming soon!</p>
              }
            </div>
          </TabsContent>
          
          <TabsContent value="best">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bestSellers.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sale">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {onSale.length > 0 ? 
                onSale.map(product => (
                  <ProductCard key={product.id} product={product} />
                )) : 
                <p className="text-center col-span-full py-8">No sale items currently available.</p>
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
