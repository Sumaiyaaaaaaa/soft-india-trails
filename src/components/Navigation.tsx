import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Map, Calendar, Sparkles, Grid3x3, Mail, Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Map", path: "/map", icon: Map },
    { name: "Seasons", path: "/seasons", icon: Sparkles },
    { name: "Festivals", path: "/festivals", icon: Calendar },
    { name: "Categories", path: "/categories", icon: Grid3x3 },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <Globe className="w-6 h-6 text-sky" />
            <span className="bg-gradient-to-r from-primary via-accent to-sky bg-clip-text text-transparent">
              Incredible India
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`gap-2 transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-sky hover:bg-sky/90">
              Log In
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-1 pb-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`gap-1 text-xs whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
