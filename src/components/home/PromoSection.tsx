
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Computer Parts"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">PC Components</h3>
              <p className="text-white/90 mb-4">Up to 30% off on selected items</p>
              <Link to="/category/computer-parts" className="inline-flex items-center text-white font-medium group">
                <span>Shop Now</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Networking Equipment"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Networking Deals</h3>
              <p className="text-white/90 mb-4">Professional networking solutions</p>
              <Link to="/category/networking" className="inline-flex items-center text-white font-medium group">
                <span>Explore More</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
