import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Map, Calendar, Sparkles, Grid3x3, Mail, Globe, User, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/", icon: Globe },
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
            {user ? (
              <>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold gap-2"
                >
                  <User className="w-4 h-4" />
                  Profile
                </Button>
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    Log In
                  </Button>
                </Link>
              </>
            )}
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
