import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Info } from "lucide-react";

const categories = [
  {
    id: "mountains",
    name: "🏔️ Mountains",
    places: [
      "Leh-Ladakh (Pangong Lake, Nubra Valley) - Jammu & Kashmir",
      "Manali (Rohtang Pass, Solang Valley) - Himachal Pradesh",
      "Shimla (Mall Road, Jakhoo Temple) - Himachal Pradesh",
      "Nainital (Naini Lake, Snow View Point) - Uttarakhand",
      "Darjeeling (Tiger Hill, Tea Gardens) - West Bengal",
      "Auli (Skiing, Gondola) - Uttarakhand",
      "Mussoorie (Kempty Falls, Gun Hill) - Uttarakhand",
      "Ooty (Nilgiri Railway, Botanical Garden) - Tamil Nadu",
      "Spiti Valley (Key Monastery, Chandratal) - Himachal Pradesh",
      "Munnar (Tea Estates, Eravikulam Park) - Kerala",
      "Gangtok (Tsomgo Lake, Rumtek Monastery) - Sikkim",
      "Coorg (Abbey Falls, Coffee Plantations) - Karnataka",
      "Tawang (Tawang Monastery) - Arunachal Pradesh",
      "Shillong (Elephant Falls, Ward's Lake) - Meghalaya",
      "Gulmarg (Gondola, Skiing) - Jammu & Kashmir",
    ],
  },
  {
    id: "beaches",
    name: "🏖️ Beaches",
    places: [
      "Calangute & Baga Beach, Goa - Water sports and nightlife",
      "Anjuna Beach, Goa - Flea market and beach parties",
      "Palolem Beach, Goa - Quiet crescent bay",
      "Havelock Island (Radhanagar Beach) - Andaman",
      "Neil Island - Andaman & Nicobar",
      "Alleppey Backwaters - Kerala",
      "Gokarna (Om Beach, Kudle Beach) - Karnataka",
      "Pondicherry (Promenade Beach, Paradise Beach) - Tamil Nadu",
      "Varkala (Papanasam Beach, Cliff) - Kerala",
      "Kovalam (Lighthouse Beach) - Kerala",
      "Puri (Golden Beach, Jagannath Temple) - Odisha",
      "Diu (Nagoa Beach, Ghoghla Beach) - Daman & Diu",
      "Lakshadweep (Agatti, Bangaram) - Islands",
      "Tarkarli Beach - Maharashtra",
    ],
  },
  {
    id: "temples",
    name: "🛕 Temples",
    places: [
      "Kashi Vishwanath Temple, Varanasi - Uttar Pradesh",
      "Tirupati Balaji Temple - Andhra Pradesh",
      "Golden Temple (Harmandir Sahib), Amritsar - Punjab",
      "Meenakshi Amman Temple, Madurai - Tamil Nadu",
      "Konark Sun Temple (UNESCO) - Odisha",
      "Somnath Temple - Gujarat",
      "Jagannath Temple, Puri - Odisha",
      "Kedarnath Temple - Uttarakhand",
      "Badrinath Temple - Uttarakhand",
      "Ramanathaswamy Temple, Rameshwaram - Tamil Nadu",
      "Vaishno Devi Temple - Jammu & Kashmir",
      "Brihadeeswarar Temple (UNESCO), Thanjavur - Tamil Nadu",
      "Lingaraja Temple, Bhubaneswar - Odisha",
      "Kamakhya Temple, Guwahati - Assam",
      "Dwarkadhish Temple, Dwarka - Gujarat",
    ],
  },
  {
    id: "heritage",
    name: "🏛️ Heritage",
    places: [
      "Taj Mahal (UNESCO), Agra - Uttar Pradesh",
      "Hampi Monuments (UNESCO) - Karnataka",
      "Ajanta Caves (UNESCO) - Maharashtra",
      "Ellora Caves (UNESCO) - Maharashtra",
      "Khajuraho Temples (UNESCO) - Madhya Pradesh",
      "Fatehpur Sikri (UNESCO), Agra - Uttar Pradesh",
      "Mahabalipuram (UNESCO Shore Temple) - Tamil Nadu",
      "Sanchi Stupa (UNESCO) - Madhya Pradesh",
      "Qutub Minar (UNESCO), Delhi - Delhi",
      "Humayun's Tomb (UNESCO), Delhi - Delhi",
      "Elephanta Caves (UNESCO), Mumbai - Maharashtra",
      "Konark Sun Temple (UNESCO) - Odisha",
      "Rani Ki Vav (UNESCO), Patan - Gujarat",
      "Champaner-Pavagadh (UNESCO) - Gujarat",
    ],
  },
  {
    id: "historical",
    name: "🏰 Historical",
    places: [
      "Red Fort (UNESCO), Delhi - Mughal fort",
      "Qutub Minar (UNESCO), Delhi - Medieval tower",
      "Amber Fort, Jaipur - Rajasthan",
      "Nahargarh Fort, Jaipur - Rajasthan",
      "Mysore Palace - Karnataka",
      "Victoria Memorial, Kolkata - West Bengal",
      "Chittorgarh Fort (UNESCO) - Rajasthan",
      "Golconda Fort, Hyderabad - Telangana",
      "Agra Fort (UNESCO) - Uttar Pradesh",
      "Mehrangarh Fort, Jodhpur - Rajasthan",
      "Jaisalmer Fort - Rajasthan",
      "Gwalior Fort - Madhya Pradesh",
      "Jhansi Fort - Uttar Pradesh",
      "Kumbhalgarh Fort - Rajasthan",
    ],
  },
  {
    id: "mosques",
    name: "🕌 Mosques",
    places: [
      "Jama Masjid, Delhi - Largest mosque in India",
      "Charminar, Hyderabad - Iconic monument with mosque",
      "Mecca Masjid, Hyderabad - Telangana",
      "Taj-ul-Masajid, Bhopal - Madhya Pradesh",
      "Haji Ali Dargah, Mumbai - Maharashtra",
      "Ajmer Sharif Dargah - Rajasthan",
      "Moti Masjid, Agra - Uttar Pradesh",
      "Jama Masjid, Fatehpur Sikri - Uttar Pradesh",
      "Hazratbal Shrine, Srinagar - Jammu & Kashmir",
      "Bara Imambara, Lucknow - Uttar Pradesh",
      "Adhai Din Ka Jhonpra, Ajmer - Rajasthan",
    ],
  },
  {
    id: "churches",
    name: "⛪ Churches",
    places: [
      "Basilica of Bom Jesus (UNESCO), Old Goa - Goa",
      "Se Cathedral, Old Goa - Largest church in Asia",
      "St. Francis Church, Kochi - Kerala",
      "St. Thomas Cathedral, Mumbai - Maharashtra",
      "Medak Church - Telangana",
      "St. Philomena's Cathedral, Mysore - Karnataka",
      "Santa Cruz Basilica, Kochi - Kerala",
      "Sacred Heart Cathedral, Delhi - Delhi",
      "St. Paul's Cathedral, Kolkata - West Bengal",
      "Velankanni Church - Tamil Nadu",
      "CSI Christ Church, Shimla - Himachal Pradesh",
    ],
  },
  {
    id: "wildlife",
    name: "🦁 Wildlife",
    places: [
      "Jim Corbett National Park - Uttarakhand (Tigers)",
      "Ranthambore National Park - Rajasthan (Tigers, Fort)",
      "Kaziranga National Park (UNESCO) - Assam (One-horned Rhinos)",
      "Bandhavgarh National Park - Madhya Pradesh (Tigers)",
      "Sundarbans (UNESCO) - West Bengal (Royal Bengal Tigers)",
      "Gir National Park - Gujarat (Asiatic Lions)",
      "Periyar Wildlife Sanctuary - Kerala (Elephants)",
      "Keoladeo National Park (UNESCO), Bharatpur - Rajasthan (Birds)",
      "Kanha National Park - Madhya Pradesh (Tigers, Barasingha)",
      "Bandipur National Park - Karnataka (Tigers, Elephants)",
      "Nagarhole National Park - Karnataka (Wildlife)",
      "Pench National Park - Madhya Pradesh (Mowgli's Jungle)",
    ],
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("mountains");
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    setDialogOpen(true);
  };

  const getPlaceDetails = (place: string) => {
    const parts = place.split(" - ");
    const mainPart = parts[0];
    const location = parts[1] || "";
    
    const nameMatch = mainPart.match(/^([^(]+)/);
    const attractionsMatch = mainPart.match(/\(([^)]+)\)/);
    
    return {
      name: nameMatch ? nameMatch[1].trim() : mainPart,
      attractions: attractionsMatch ? attractionsMatch[1] : "",
      location: location,
    };
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore by Categories</h1>
          <p className="text-lg text-muted-foreground">
            Discover destinations based on your interests
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-sm font-semibold border-2 border-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground rounded-lg transition-all hover:scale-105"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">{category.name}</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.places.map((place, index) => (
                      <div
                        key={index}
                        onClick={() => handlePlaceClick(place)}
                        className="p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all border border-border hover:border-secondary cursor-pointer group"
                      >
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                          <h3 className="font-semibold text-sm flex-1">{place}</h3>
                          <Info className="w-4 h-4 mt-0.5 shrink-0 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-secondary" />
                {selectedPlace && getPlaceDetails(selectedPlace).name}
              </DialogTitle>
              <DialogDescription className="text-base space-y-4 pt-4">
                {selectedPlace && (
                  <>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">{getPlaceDetails(selectedPlace).location}</p>
                    </div>
                    {getPlaceDetails(selectedPlace).attractions && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Attractions</h4>
                        <p className="text-muted-foreground">{getPlaceDetails(selectedPlace).attractions}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Category</h4>
                      <p className="text-muted-foreground capitalize">{activeCategory}</p>
                    </div>
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Categories;
