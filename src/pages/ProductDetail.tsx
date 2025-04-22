
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/components/product/ProductCard";

// Mock data for products (in a real app, this would come from an API)
const mockProducts: Product[] = [
  {
    id: "1",
    name: "High-Performance Gaming Laptop",
    price: 78999,
    originalPrice: 89999,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "laptops",
    isNew: true,
    discountPercentage: 12
  },
  {
    id: "2",
    name: "Wireless Noise Cancelling Headphones",
    price: 15999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "audio",
    isFeatured: true,
    discountPercentage: 20
  },
  {
    id: "3",
    name: "Mechanical Keyboard with RGB Backlight",
    price: 4599,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1595044778792-33c0241a4ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "accessories",
    discountPercentage: 15
  },
  {
    id: "4",
    name: "4K UHD Smart Television",
    price: 42999,
    originalPrice: 49999,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "televisions",
    isFeatured: true,
    discountPercentage: 14
  },
  {
    id: "5",
    name: "Professional DSLR Camera",
    price: 58999,
    originalPrice: 64999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "cameras",
    isNew: true,
    discountPercentage: 9
  },
  {
    id: "6",
    name: "Arduino Starter Kit",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "electronic-components",
    isFeatured: true,
    discountPercentage: 16
  },
  {
    id: "7",
    name: "Raspberry Pi 4 Model B",
    price: 3599,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "electronic-components",
    isNew: true,
    discountPercentage: 10
  },
  {
    id: "8",
    name: "Soldering Iron Station Kit",
    price: 1899,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "tools",
    discountPercentage: 17
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = () => {
      setLoading(true);
      // In a real app, this would be an API call
      const foundProduct = mockProducts.find(p => p.id === id);
      
      setTimeout(() => {
        setProduct(foundProduct || null);
        setLoading(false);
      }, 300); // Simulate network delay
    };

    fetchProduct();
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-2xl">Loading product details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/" className="text-brand-blue hover:underline">
            Return to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = product.discountPercentage || 
    (product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="flex items-center text-brand-blue hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden border">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover aspect-square"
              />
              
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-brand-blue text-white">New</Badge>
              )}
              
              {discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-rose-500 text-white">-{discount}%</Badge>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm text-rose-500 font-medium">
                  ({discount}% off)
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                High-quality electronic product with the latest specifications. 
                Perfect for professionals and enthusiasts alike.
              </p>
              <div className="bg-green-50 border border-green-200 rounded p-2 inline-block">
                <span className="text-green-700 font-medium">In Stock</span>
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Quantity</p>
              <div className="flex items-center">
                <button 
                  onClick={handleDecreaseQuantity}
                  disabled={quantity <= 1}
                  className="w-10 h-10 border rounded-l flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
                >
                  -
                </button>
                <div className="w-12 h-10 border-t border-b flex items-center justify-center">
                  {quantity}
                </div>
                <button 
                  onClick={handleIncreaseQuantity}
                  className="w-10 h-10 border rounded-r flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button className="flex-1 gap-2">
                <ShoppingCart size={18} /> Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 gap-2">
                <Heart size={18} /> Add to Wishlist
              </Button>
            </div>
            
            {/* Product Details */}
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Product Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Category: {product.category.replace('-', ' ').replace(/\b\w/g, char => char.toUpperCase())}</li>
                <li>• SKU: {product.id}ELM{new Date().getFullYear()}</li>
                <li>• Warranty: 1 Year Manufacturer Warranty</li>
                <li>• Delivery: Usually dispatched in 2-3 business days</li>
                <li>• Return Policy: 7 Days Easy Return</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
