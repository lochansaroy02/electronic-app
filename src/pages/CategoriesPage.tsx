
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CategoriesPage = () => {
  const categories = [
    {
      id: "computer-parts",
      name: "Computer Parts & Components",
      description: "High-performance components for your PC build",
    },
    {
      id: "networking",
      name: "Networking & Security",
      description: "Network equipment and security solutions",
    },
    {
      id: "storage",
      name: "Storage & Drives",
      description: "SSDs, HDDs, and external storage solutions",
    },
    {
      id: "power-supplies",
      name: "Power Supplies & UPS",
      description: "Reliable power solutions for your equipment",
    },
    {
      id: "cables",
      name: "Cables & Connectors",
      description: "High-quality cables for all your connections",
    },
    {
      id: "tools",
      name: "Tools & Testing Equipment",
      description: "Professional tools for electronics work",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="block p-6 rounded-lg border hover:border-brand-purple transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
