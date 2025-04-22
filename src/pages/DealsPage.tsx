
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

const DealsPage = () => {
  const dealsProducts = [
    {
      id: "cp1",
      name: "Intel Core i7 12700K Processor",
      price: 32999,
      originalPrice: 38999,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "computer-parts",
      isNew: true
    },
    {
      id: "net1",
      name: "TP-Link Archer AX6000 Router",
      price: 21999,
      originalPrice: 24999,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "networking",
      isNew: true
    },
    {
      id: "st1",
      name: "Samsung 2TB NVMe SSD",
      price: 12999,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "storage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Today's Best Deals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
