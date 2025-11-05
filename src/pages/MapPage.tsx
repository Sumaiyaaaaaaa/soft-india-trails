import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

interface PlaceDetail {
  name: string;
  description: string;
  bestTime: string;
}

const stateData: Record<string, PlaceDetail[]> = {
  "Jammu and Kashmir": [
    { name: "Srinagar", description: "The summer capital known for Dal Lake, houseboats, and Mughal gardens. A paradise on earth with stunning natural beauty and shikara rides.", bestTime: "April to October" },
    { name: "Gulmarg", description: "Famous ski resort and Asia's highest golf course. Known for its gondola ride, snow-capped peaks, and winter sports activities.", bestTime: "December to March (skiing), June to August (meadows)" },
    { name: "Pahalgam", description: "Base camp for Amarnath Yatra, surrounded by pine forests and the Lidder River. Popular destination for trekking, fishing, and nature walks.", bestTime: "April to November" },
    { name: "Sonmarg", description: "Gateway to Ladakh, known as 'Meadow of Gold'. Features glaciers, lakes, and stunning mountain views. Perfect for adventure enthusiasts.", bestTime: "May to October" },
    { name: "Dal Lake", description: "Iconic lake with shikaras and houseboats. The jewel of Srinagar featuring floating gardens, markets, and serene waters.", bestTime: "April to October" },
    { name: "Leh", description: "Capital of Ladakh, high-altitude desert with Buddhist monasteries. Adventure hub for biking, trekking, and experiencing unique Ladakhi culture.", bestTime: "May to September" },
    { name: "Vaishno Devi Temple", description: "Sacred Hindu pilgrimage site dedicated to Goddess Vaishno Devi. Located in Trikuta Mountains, attracts millions of devotees annually.", bestTime: "March to October" },
    { name: "Patnitop", description: "Hill station with panoramic views, meadows, and pine forests. Ideal for nature lovers, trekking, and adventure activities like paragliding.", bestTime: "March to November" },
    { name: "Yusmarg", description: "Pristine meadow surrounded by dense forests and snow-capped peaks. Perfect for picnics, horse riding, and experiencing untouched natural beauty.", bestTime: "April to November" },
    { name: "Doodhpathri", description: "'Valley of Milk' with lush green meadows and crystal-clear streams. Offbeat destination for nature enthusiasts seeking tranquility.", bestTime: "May to September" },
    { name: "Kishtwar", description: "Known for saffron fields, scenic beauty, and challenging trekking routes. Home to Kishtwar National Park with diverse wildlife.", bestTime: "April to October" },
    { name: "Aru Valley", description: "Quaint village with meadows and mountain views. Starting point for treks to Kolahoi Glacier and popular for camping.", bestTime: "April to November" },
    { name: "Betaab Valley", description: "Named after Bollywood film, features lush greenery, snow-covered mountains, and crystal-clear streams. Popular filming location.", bestTime: "April to November" },
    { name: "Nubra Valley", description: "Cold desert with sand dunes, double-humped Bactrian camels, and ancient Buddhist monasteries. Accessible via world's highest motorable pass Khardung La.", bestTime: "May to September" },
    { name: "Pangong Lake", description: "Stunning high-altitude lake with water that changes colors. Extends from India to Tibet, offering breathtaking views and camping opportunities.", bestTime: "May to September" },
  ],
  "Himachal Pradesh": [
    { name: "Shimla", description: "Former summer capital of British India. Features colonial architecture, Mall Road, scenic toy train, and Christ Church. Popular honeymoon destination.", bestTime: "March to June, December to February" },
    { name: "Manali", description: "Adventure paradise offering skiing, paragliding, trekking, and river rafting. Gateway to Rohtang Pass and Solang Valley with stunning mountain views.", bestTime: "October to June" },
    { name: "Dharamshala", description: "Home to Dalai Lama and Tibetan government-in-exile. Known for McLeod Ganj, Buddhist monasteries, and strong Tibetan cultural influence.", bestTime: "March to June, September to November" },
    { name: "Kasauli", description: "Peaceful hill station with colonial charm and pine forests. Perfect for quiet getaways, nature walks, and enjoying pristine mountain air.", bestTime: "April to June, September to November" },
    { name: "Kullu", description: "Valley of gods with sprawling apple orchards and adventure sports. Famous for Dussehra festival celebrated with great fervor and tradition.", bestTime: "March to June, October to November" },
    { name: "Spiti Valley", description: "High-altitude cold desert landscape with ancient monasteries. Known for stark beauty, Buddhist culture, and resemblance to Tibet.", bestTime: "May to October" },
    { name: "Dalhousie", description: "Colonial-era hill station featuring Victorian architecture and churches. Offers stunning views of Dhauladhar mountain range and peaceful ambiance.", bestTime: "March to June, September to November" },
    { name: "Khajjiar", description: "'Mini Switzerland of India' with lush meadows, dense forests, and a lake. Famous for its scenic beauty and adventure activities like zorbing.", bestTime: "March to June, September to November" },
    { name: "McLeod Ganj", description: "Tibetan culture hub with numerous monasteries, cafes, and handicraft markets. Popular among backpackers, spiritual seekers, and trekkers.", bestTime: "March to June, September to November" },
    { name: "Kinnaur", description: "Tribal district featuring apple orchards, ancient temples, and traditional villages. Offers spectacular views of Kinner Kailash peak.", bestTime: "April to October" },
    { name: "Chamba", description: "Ancient town with beautiful temples, palaces, and traditional architecture. Known for Chamba Rumal embroidery and annual Minjar festival.", bestTime: "March to June, September to November" },
    { name: "Bir Billing", description: "Paragliding capital of India with perfect thermals. Tibetan colony featuring monasteries, cafes, and meditation centers.", bestTime: "March to June, September to November" },
    { name: "Palampur", description: "Tea capital of North India with lush tea gardens carpeting hillsides. Offers panoramic views of Dhauladhar range and pleasant climate.", bestTime: "March to June, September to November" },
    { name: "Rohtang Pass", description: "High mountain pass at 3,978m with year-round snow activities. Gateway to Lahaul and Spiti valleys, offering breathtaking mountain vistas.", bestTime: "May to October" },
    { name: "Solang Valley", description: "Adventure sports hub near Manali. Popular for skiing, snowboarding, zorbing, paragliding, and cable car rides with mountain views.", bestTime: "October to June" },
  ],
  "Punjab": [
    { name: "Golden Temple, Amritsar", description: "Holiest shrine of Sikhism with stunning golden architecture reflecting in Amrit Sarovar. Known for world's largest community kitchen serving free meals to thousands daily.", bestTime: "October to March" },
    { name: "Jallianwala Bagh, Amritsar", description: "Memorial garden of tragic 1919 massacre under British rule. Important national monument with preserved bullet marks and memorial flame.", bestTime: "October to March" },
    { name: "Wagah Border, Amritsar", description: "India-Pakistan border famous for daily flag-lowering ceremony at sunset. Patriotic atmosphere with elaborate military parade and cultural experience.", bestTime: "October to March" },
    { name: "Rock Garden, Chandigarh", description: "Unique sculpture garden created from industrial and urban waste. Features rock sculptures, waterfalls, and creative art installations by Nek Chand.", bestTime: "September to March" },
    { name: "Sukhna Lake, Chandigarh", description: "Scenic man-made lake offering boating, paddle boats, and walking tracks. Popular spot for morning walks, jogging, and evening relaxation with sunset views.", bestTime: "September to March" },
    { name: "Qila Mubarak, Patiala", description: "Historic fort complex featuring palaces, museums, and royal artifacts. Showcases rich heritage and grandeur of erstwhile Patiala state.", bestTime: "October to March" },
    { name: "Anandpur Sahib", description: "Sacred Sikh city where Khalsa was founded in 1699. Important pilgrimage site with historical gurdwaras and Virasat-e-Khalsa museum.", bestTime: "October to March" },
    { name: "Harike Wetland", description: "Largest wetland in northern India and important bird sanctuary. Home to over 200 migratory bird species, especially during winter months.", bestTime: "November to March" },
    { name: "Virasat-e-Khalsa, Anandpur Sahib", description: "State-of-the-art museum showcasing 500 years of Sikh culture and history. Modern architecture with interactive exhibits and multimedia presentations.", bestTime: "October to March" },
    { name: "Gobindgarh Fort, Amritsar", description: "Historic 18th-century fort now open to public as living museum. Offers cultural shows, museums, and experiences depicting Punjab's rich history.", bestTime: "October to March" },
    { name: "Bharatpur Bird Sanctuary, Ludhiana", description: "Urban bird sanctuary with diverse bird species and peaceful environment. Perfect spot for birdwatching, photography, and nature walks.", bestTime: "November to March" },
    { name: "Ranjit Sagar Dam, Pathankot", description: "Large reservoir surrounded by scenic hills and forests. Popular for picnics, boating, water sports, and enjoying natural beauty.", bestTime: "October to March" },
    { name: "Durgiana Temple, Amritsar", description: "Beautiful Hindu temple with architecture similar to Golden Temple. Dedicated to Goddess Durga, featuring intricate carvings and peaceful atmosphere.", bestTime: "October to March" },
    { name: "Bathinda Fort", description: "Ancient fort with deep historical significance dating back to Kushana era. Believed to be one of the oldest surviving forts in India.", bestTime: "October to March" },
    { name: "Kapurthala", description: "City known as 'Paris of Punjab' due to French-inspired architecture. Features magnificent Jagatjit Palace and Moorish Mosque with European design.", bestTime: "October to March" },
  ],
  // Add remaining states similarly...
};

const MapPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetail | null>(null);

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };

  const handleBack = () => {
    setSelectedState(null);
  };

  const handlePlaceClick = (place: PlaceDetail) => {
    setSelectedPlace(place);
  };

  if (selectedState) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Button>

          <Card className="border-2">
            <CardHeader className="bg-gradient-warm">
              <CardTitle className="text-3xl">{selectedState}</CardTitle>
              <p className="text-muted-foreground">Explore {stateData[selectedState]?.length} popular destinations</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stateData[selectedState]?.map((place, index) => (
                  <div
                    key={index}
                    onClick={() => handlePlaceClick(place)}
                    className="p-5 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all border-2 border-accent cursor-pointer hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{place.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{place.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Place Detail Dialog */}
        <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                {selectedPlace?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">About</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedPlace?.description}</p>
              </div>
              <div className="flex items-center gap-2 p-4 bg-accent/20 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Best Time to Visit</p>
                  <p className="text-sm text-muted-foreground">{selectedPlace?.bestTime}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore India by State</h1>
          <p className="text-lg text-muted-foreground">
            Click on any state to discover its top destinations with detailed information
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.keys(stateData).sort().map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateClick(state)}
                  className="p-4 rounded-lg text-left transition-all border-2 hover:scale-105 bg-primary hover:bg-primary/80 border-primary/30 text-primary-foreground"
                >
                  <h3 className="font-semibold text-sm">{state}</h3>
                  <p className="text-xs opacity-80 mt-1">{stateData[state]?.length} places</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Click on any state to explore popular destinations with descriptions and travel information</p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
