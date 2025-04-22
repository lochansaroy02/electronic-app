
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-brand-dark to-brand-purple py-16 md:py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Next-Gen Electronics at Unbeatable Prices
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-md">
              Discover the latest tech with exclusive deals and fast delivery across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Deals
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljc3xlbnwwfHx8fDE3MTM4OTUzNDZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Featured Electronics" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
