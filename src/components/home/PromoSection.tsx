
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Promo Card 1 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Gaming Deals"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Gaming Gear</h3>
              <p className="text-white/90 mb-4">Up to 25% off on selected items</p>
              <Link to="/category/gaming" className="inline-flex items-center text-white font-medium group">
                <span>Shop Now</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Promo Card 2 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Laptop Sale"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/70 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Laptop Festival</h3>
              <p className="text-white/90 mb-4">Exclusive deals on premium laptops</p>
              <Link to="/category/laptops" className="inline-flex items-center text-white font-medium group">
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
