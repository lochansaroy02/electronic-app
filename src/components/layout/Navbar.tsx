
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  Search,
  X,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-brand-purple mr-6">The Bold Move</Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-brand-purple transition-colors">
                Home
              </Link>
              <Link to="/categories" className="text-sm font-medium hover:text-brand-purple transition-colors">
                Categories
              </Link>
              <Link to="/deals" className="text-sm font-medium hover:text-brand-purple transition-colors">
                Deals
              </Link>
            </nav>
          )}

          {/* Search bar - desktop */}
          {!isMobile && !isSearchOpen && (
            <div className="hidden md:flex w-full max-w-sm items-center mx-4">
              <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-8 rounded-full bg-muted/40"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </Button>
            )}

            <Link to="/account">

            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-brand-purple text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
              </Button>
            </Link>

            {/* Mobile menu */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link to="/" className="text-lg font-medium hover:text-brand-purple transition-colors">
                      Home
                    </Link>
                    <Link to="/categories" className="text-lg font-medium hover:text-brand-purple transition-colors">
                      Categories
                    </Link>
                    <Link to="/deals" className="text-lg font-medium hover:text-brand-purple transition-colors">
                      Deals
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>

        {/* Mobile search - conditional */}
        {isMobile && isSearchOpen && (
          <div className="pb-4 px-2">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8 rounded-full bg-muted/40"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
