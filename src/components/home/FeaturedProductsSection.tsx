
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "../product/ProductCard";

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "OnePlus Nord CE 3 Lite 5G (8GB RAM, 128GB Storage)",
    price: 19999,
    originalPrice: 24999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "smartphones",
    isFeatured: true,
    discountPercentage: 20
  },
  {
    id: "2",
    name: "HP Pavilion 14 12th Gen Intel Core i5 16GB RAM/512GB SSD 14 inch(35.6 cm) FHD Micro-Edge Display",
    price: 58990,
    originalPrice: 76000,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHwxfHxsYXB0b3B8ZW58MHx8fHwxNzEzODk1MzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "laptops",
    isFeatured: true,
    discountPercentage: 22
  },
  {
    id: "3",
    name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime",
    price: 1499,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "audio",
    isFeatured: true,
    discountPercentage: 70
  },
  {
    id: "4",
    name: "Sony Alpha 7M4K Full-Frame Hybrid Camera - 33MP, 8x, 4K 60p",
    price: 214990,
    originalPrice: 239990,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "cameras",
    isFeatured: true
  },
  {
    id: "5",
    name: "Echo Dot (5th Gen) | Smart speaker with Alexa",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "smart-home",
    isNew: true,
    isFeatured: true
  },
  {
    id: "6",
    name: "Sony PlayStation 5 Console (PS5) Slim Edition with Astro's Playroom",
    price: 54990,
    originalPrice: 59990,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "gaming",
    isFeatured: true
  },
  {
    id: "7",
    name: "Samsung Galaxy S24 Ultra 5G (12GB, 256GB) 200MP Camera",
    price: 124999,
    originalPrice: 134999,
    image: "https://images.unsplash.com/photo-1643016749310-047ba4ab0ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "smartphones",
    isNew: true,
    isFeatured: true
  },
  {
    id: "8",
    name: "Apple MacBook Air M2 Chip (8GB, 256GB SSD)",
    price: 89990,
    originalPrice: 99990,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "laptops",
    isFeatured: true
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
