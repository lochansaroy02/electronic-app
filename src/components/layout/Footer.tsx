
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ElectroMart</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your one-stop destination for premium electronic products at competitive prices.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-brand-purple">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm text-gray-600 hover:text-brand-purple">
                  Deals & Offers
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-brand-purple">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/best-sellers" className="text-sm text-gray-600 hover:text-brand-purple">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-brand-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-brand-purple">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-brand-purple">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-600 hover:text-brand-purple">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-brand-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-brand-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-brand-purple">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} ElectroMart. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-600">
                Made in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
