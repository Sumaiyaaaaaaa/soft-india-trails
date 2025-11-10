import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Map, Calendar, Grid, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { allPlacesData } from "@/data/placesData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroBackground from "@/assets/india-hero-bg.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allPlacesData>([]);
  const [selectedPlace, setSelectedPlace] = useState<typeof allPlacesData[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = allPlacesData.filter((place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      
      // Auto-open first result if only one match
      if (results.length === 1) {
        setSelectedPlace(results[0]);
        setDialogOpen(true);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePlaceClick = (place: typeof allPlacesData[0]) => {
    setSelectedPlace(place);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section 
        className="relative py-32 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(52, 101, 109, 0.7), rgba(51, 68, 67, 0.8)), url(${heroBackground})`
        }}
      >
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Discover India
          </h1>
          <p className="text-xl md:text-2xl text-white/95 drop-shadow">
            Your Gateway to Incredible Destinations
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto bg-white/95 p-3 rounded-xl shadow-2xl backdrop-blur">
            <Input
              placeholder="Search places, cities, monuments..."
              className="flex-1 border-0 text-lg focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button className="gap-2 px-6" onClick={handleSearch}>
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="py-12 px-4 bg-accent/5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6">Search Results ({searchResults.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((place, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 border-primary/20 hover:border-primary"
                  onClick={() => handlePlaceClick(place)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{place.name}</h3>
                    {place.state && (
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.state}
                      </p>
                    )}
                    <p className="text-sm mb-3">{place.description}</p>
                    {place.bestTime && (
                      <p className="text-xs text-primary font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Best Time: {place.bestTime}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Place Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary">
              {selectedPlace?.name}
            </DialogTitle>
            {selectedPlace?.state && (
              <DialogDescription className="text-base flex items-center gap-2 mt-2">
                <MapPin className="w-4 h-4" />
                {selectedPlace.state}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">About</h4>
              <p className="text-muted-foreground">{selectedPlace?.description}</p>
            </div>
            {selectedPlace?.bestTime && (
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Best Time to Visit
                </h4>
                <p className="text-muted-foreground">{selectedPlace.bestTime}</p>
              </div>
            )}
            {selectedPlace?.category && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Category</h4>
                <p className="text-muted-foreground">{selectedPlace.category}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* About India Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Travel India?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From the Himalayas to tropical beaches, ancient temples to modern cities, 
              India offers an unparalleled diversity of experiences for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-accent/20 hover:border-accent transition-all">
              <CardContent className="p-8 text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Diverse Destinations</h3>
                <p className="text-muted-foreground">
                  28 states, each with unique culture, cuisine, and landscapes waiting to be explored
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all">
              <CardContent className="p-8 text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Vibrant Festivals</h3>
                <p className="text-muted-foreground">
                  Celebrate colorful festivals and cultural events throughout the year across the nation
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all">
              <CardContent className="p-8 text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Grid className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Rich Heritage</h3>
                <p className="text-muted-foreground">
                  UNESCO World Heritage Sites, ancient monuments, and timeless traditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">How This Guide Helps You</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start p-6 rounded-xl bg-background border-2 border-accent/20 hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Map className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive State Map</h3>
                <p className="text-muted-foreground">
                  Click on any state to discover popular destinations with detailed descriptions and best visiting times
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-background border-2 border-accent/20 hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Season-Based Planning</h3>
                <p className="text-muted-foreground">
                  Find the perfect destinations for winter, summer, monsoon, or autumn with specific location details
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-background border-2 border-accent/20 hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Festival Calendar</h3>
                <p className="text-muted-foreground">
                  Explore festivals by month, region, and city with comprehensive event information
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 rounded-xl bg-background border-2 border-accent/20 hover:border-accent transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Grid className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Category Browsing</h3>
                <p className="text-muted-foreground">
                  Browse by interest - mountains, beaches, temples, heritage sites, wildlife, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
