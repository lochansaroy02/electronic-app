
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import PromoSection from "@/components/home/PromoSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <PromoSection />
        <FeaturedProductsSection />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-brand-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with ElectroMart</h2>
            <p className="max-w-md mx-auto mb-8">
              Subscribe to our newsletter for exclusive deals, new arrivals, and tech tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <button className="bg-white text-brand-blue font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
