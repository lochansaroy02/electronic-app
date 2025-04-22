import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

// Sample products data - in a real app, this would come from an API
const categoryProducts = {
  "computer-parts": [
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
      id: "cp2",
      name: "NVIDIA RTX 4070 Graphics Card",
      price: 59999,
      originalPrice: 64999,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "computer-parts"
    },
  ],
  "networking": [
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
      id: "net2",
      name: "Netgear 24-Port Managed Switch",
      price: 15999,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "networking"
    },
  ],
  "storage": [
    {
      id: "st1",
      name: "Samsung 2TB NVMe SSD",
      price: 12999,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "storage"
    },
    {
      id: "st2",
      name: "WD Red Pro 8TB NAS HDD",
      price: 18999,
      image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "storage",
      isNew: true
    },
  ],
  "power-supplies": [
    {
      id: "ps1",
      name: "Corsair RM850x Power Supply",
      price: 11999,
      originalPrice: 13999,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "power-supplies"
    },
    {
      id: "ps2",
      name: "APC 1500VA UPS Battery Backup",
      price: 15999,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "power-supplies",
      isNew: true
    },
  ],
  "cables": [
    {
      id: "cb1",
      name: "Cat 6A Ethernet Cable Bundle",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "cables"
    },
    {
      id: "cb2",
      name: "HDMI 2.1 8K Cable",
      price: 999,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "cables"
    },
  ],
  "tools": [
    {
      id: "tl1",
      name: "iFixit Pro Tech Toolkit",
      price: 4999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "tools"
    },
    {
      id: "tl2",
      name: "Digital Multimeter Professional",
      price: 2999,
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      category: "tools"
    },
  ],
};

const categoryNames: { [key: string]: string } = {
  "computer-parts": "Computer Parts & Components",
  "networking": "Networking & Security",
  "storage": "Storage & Drives",
  "power-supplies": "Power Supplies & UPS",
  "cables": "Cables & Connectors",
  "tools": "Tools & Testing Equipment"
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const products = categoryId ? categoryProducts[categoryId] : [];
  const categoryName = categoryId ? categoryNames[categoryId] : "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
