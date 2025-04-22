
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "laptops",
    name: "Laptops & Computers",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHwxfHxsYXB0b3B8ZW58MHx8fHwxNzEzODk1MzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
    count: 120
  },
  {
    id: "smartphones",
    name: "Smartphones & Accessories",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    count: 95
  },
  {
    id: "audio",
    name: "Audio & Headphones",
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    count: 78
  },
  {
    id: "cameras",
    name: "Cameras & Photography",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    count: 45
  },
  {
    id: "smart-home",
    name: "Smart Home Devices",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    count: 63
  },
  {
    id: "gaming",
    name: "Gaming & Consoles",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    count: 52
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <Link to="/categories" className="text-brand-blue hover:underline mt-2 md:mt-0">
            View all categories
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="group overflow-hidden h-full hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-40 w-full overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium text-sm">{category.name}</h3>
                      <p className="text-white/80 text-xs">{category.count} products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
