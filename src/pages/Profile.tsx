import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Calendar, LogOut } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-2xl text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <Card className="border-2 shadow-2xl">
          <CardHeader className="space-y-2 bg-gradient-warm/30 border-b-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {user?.email?.[0].toUpperCase()}
                </div>
                <div>
                  <CardTitle className="text-3xl">Profile</CardTitle>
                  <CardDescription className="text-base">
                    Manage your account information
                  </CardDescription>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="border-2 hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-8">
            {/* Account Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Account Information
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="border-2 bg-muted/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userId" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    value={user?.id || ""}
                    disabled
                    className="border-2 bg-muted/30 font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="created" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Account Created
                  </Label>
                  <Input
                    id="created"
                    value={user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : ""}
                    disabled
                    className="border-2 bg-muted/30"
                  />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t-2">
              <Card className="border-2 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Email Verified
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">
                    {user?.email_confirmed_at ? "✓ Yes" : "✗ No"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Last Sign In
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-secondary">
                    {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : "N/A"}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-accent/10 to-accent/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Account Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">
                    Active
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
