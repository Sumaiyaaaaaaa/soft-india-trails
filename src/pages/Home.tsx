import { Search, MapPin, Calendar, Sparkles, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Discover the Magic of India
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            From snow-capped mountains to sun-kissed beaches, ancient temples to modern cities
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search destinations, festivals, or categories..."
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-border bg-background/80 backdrop-blur-sm"
              />
              <Button
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-sky hover:bg-sky/90"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About India Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Travel to India?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              India is a land of incredible diversity, where every state tells a different story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Diverse Destinations</h3>
                <p className="text-muted-foreground">
                  From the Himalayas in the north to tropical Kerala in the south, explore 28 states and 8 union territories, each with unique culture, cuisine, and landscapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Year-Round Festivals</h3>
                <p className="text-muted-foreground">
                  Experience vibrant festivals throughout the year - from Diwali's lights to Holi's colors, Durga Puja to Navratri, celebrating India's rich cultural heritage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Timeless Heritage</h3>
                <p className="text-muted-foreground">
                  Discover ancient temples, magnificent forts, UNESCO World Heritage sites, and architectural wonders that span thousands of years of history.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-cool">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How This Guide Helps You
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our comprehensive platform makes planning your Indian adventure effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive State Map</h3>
                  <p className="text-muted-foreground">
                    Click on any state to discover its top destinations, hidden gems, and must-visit places. Visual navigation makes exploration intuitive and fun.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Season-Based Planning</h3>
                  <p className="text-muted-foreground">
                    Find the perfect destinations for every season. Whether you're seeking winter snow, summer beaches, or monsoon magic, we guide you to the best places.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Festival Calendar</h3>
                  <p className="text-muted-foreground">
                    Browse festivals by month, region, and city. Plan your trip around India's most spectacular celebrations and cultural events.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-sky flex items-center justify-center shrink-0">
                  <ImageIcon className="w-5 h-5 text-sky-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Category Browsing</h3>
                  <p className="text-muted-foreground">
                    Explore by interest - mountains, beaches, temples, heritage sites, historical monuments, mosques, churches, and more. Find exactly what you love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Indian Adventure Today
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Explore our interactive map, discover seasonal destinations, or browse by category
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-sky hover:bg-sky/90">
              Explore Map
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              View Festivals
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
