import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Map, Calendar, Grid, MapPin, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { allPlacesData } from "@/data/placesData";
import heroImage from "@/assets/india-professional-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/india-hero-modern.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allPlacesData>([]);
  const [selectedPlace, setSelectedPlace] = useState<typeof allPlacesData[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filterState, setFilterState] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterSeason, setFilterSeason] = useState<string>("all");

  // Get unique values for filters
  const uniqueStates = useMemo(() => {
    const states = [...new Set(allPlacesData.map(p => p.state).filter(Boolean))];
    return states.sort();
  }, []);

  const uniqueCategories = useMemo(() => {
    const categories = [...new Set(allPlacesData.map(p => p.category).filter(Boolean))];
    return categories.sort();
  }, []);

  const uniqueSeasons = useMemo(() => {
    const seasons = [...new Set(allPlacesData.map(p => p.season).filter(Boolean))];
    return seasons.sort();
  }, []);

  // Autocomplete suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    return allPlacesData
      .filter((place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.state?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      let results = allPlacesData.filter((place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Apply filters
      if (filterState !== "all") {
        results = results.filter(p => p.state === filterState);
      }
      if (filterCategory !== "all") {
        results = results.filter(p => p.category === filterCategory);
      }
      if (filterSeason !== "all") {
        results = results.filter(p => p.season === filterSeason);
      }

      setSearchResults(results);
      setShowSuggestions(false);
      
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

  const handleSuggestionClick = (place: typeof allPlacesData[0]) => {
    setSearchQuery(place.name);
    setShowSuggestions(false);
    setSelectedPlace(place);
    setDialogOpen(true);
  };

  const clearFilters = () => {
    setFilterState("all");
    setFilterCategory("all");
    setFilterSeason("all");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-background/80"></div>
        </div>

        <div className="relative z-10 container max-w-5xl mx-auto px-4 text-center space-y-10">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-background via-background/90 to-background/80 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in tracking-tight">
              Discover Incredible India
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-background to-transparent rounded-full"></div>
          </div>
          <p className="text-xl md:text-3xl text-background/95 max-w-3xl mx-auto drop-shadow-2xl animate-fade-in font-light leading-relaxed">
            Explore diverse landscapes, rich culture, and ancient heritage across 28 states and 8 union territories
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative max-w-3xl mx-auto animate-fade-in">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary/70 h-6 w-6 group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Search destinations, states, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowSuggestions(true)}
                className="pl-14 pr-14 py-7 text-lg border-2 border-background/30 rounded-2xl shadow-2xl bg-background/95 backdrop-blur-md focus:border-primary/50 transition-all hover:shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchResults([]);
                    setShowSuggestions(false);
                  }}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Autocomplete Suggestions */}
            {showSuggestions && searchQuery && suggestions.length > 0 && (
              <Card className="absolute top-full mt-3 w-full z-50 border-2 border-primary/20 shadow-2xl max-h-80 overflow-y-auto backdrop-blur-md bg-card/98">
                <CardContent className="p-3">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-5 py-4 hover:bg-primary/10 rounded-xl transition-all flex items-center gap-4 border-b border-border/50 last:border-0 hover:shadow-md"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-base">{suggestion.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <span>{suggestion.state}</span>
                          <span className="text-primary">•</span>
                          <span>{suggestion.category}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Search Filters */}
      {searchQuery && (
        <section className="py-6 px-4 bg-primary/5 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                <span className="font-semibold">Filters:</span>
              </div>

              <Select value={filterState} onValueChange={setFilterState}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {uniqueStates.map(state => (
                    <SelectItem key={state} value={state!}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map(cat => (
                    <SelectItem key={cat} value={cat!}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterSeason} onValueChange={setFilterSeason}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Seasons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seasons</SelectItem>
                  {uniqueSeasons.map(season => (
                    <SelectItem key={season} value={season!}>{season}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(filterState !== "all" || filterCategory !== "all" || filterSeason !== "all") && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}

              <Button variant="secondary" size="sm" onClick={handleSearch}>
                Apply Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className="py-12 px-4 bg-accent/5">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Search Results ({searchResults.length})</h2>
              {searchResults.length > 0 && (
                <div className="flex gap-2">
                  <Badge variant="secondary">{filterState !== "all" ? filterState : "All States"}</Badge>
                  {filterCategory !== "all" && <Badge variant="outline">{filterCategory}</Badge>}
                  {filterSeason !== "all" && <Badge variant="outline">{filterSeason}</Badge>}
                </div>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((place, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 border-primary/20 hover:border-primary hover:scale-105 animate-fade-in"
                  onClick={() => handlePlaceClick(place)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{place.name}</h3>
                    {place.state && (
                      <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.state}
                      </p>
                    )}
                    <p className="text-sm mb-3 line-clamp-3">{place.description}</p>
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
