
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  discountPercentage?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, originalPrice, image, isNew, discountPercentage } = product;
  
  const discount = discountPercentage || 
    (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  return (
    <div className="group bg-white rounded-lg border hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <div className="relative pb-[75%]">
            <img 
              src={image} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-brand-blue text-white">New</Badge>
          )}
          
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-rose-500 text-white">-{discount}%</Badge>
          )}
        </Link>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm line-clamp-2 min-h-[40px] mb-2 group-hover:text-brand-purple transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-lg">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        
        <Button className="w-full gap-2">
          <ShoppingCart size={16} /> Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
