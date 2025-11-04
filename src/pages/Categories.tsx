import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const categories = [
  {
    id: "mountains",
    name: "🏔️ Mountains",
    places: [
      "Leh-Ladakh", "Manali", "Shimla", "Nainital", "Darjeeling",
      "Auli", "Mussoorie", "Ooty", "Spiti Valley", "Munnar",
      "Sikkim", "Coorg", "Tawang", "Shillong"
    ],
  },
  {
    id: "beaches",
    name: "🏖️ Beaches",
    places: [
      "Goa", "Andaman Islands", "Kerala Backwaters", "Gokarna", 
      "Pondicherry", "Varkala", "Kovalam", "Puri", "Daman & Diu", "Lakshadweep"
    ],
  },
  {
    id: "temples",
    name: "🛕 Temples",
    places: [
      "Varanasi", "Tirupati", "Golden Temple Amritsar", "Meenakshi Temple Madurai",
      "Konark Sun Temple", "Somnath Temple", "Jagannath Temple Puri", 
      "Kedarnath", "Badrinath", "Rameshwaram"
    ],
  },
  {
    id: "heritage",
    name: "🏛️ Heritage",
    places: [
      "Taj Mahal Agra", "Hampi", "Ajanta Caves", "Ellora Caves",
      "Khajuraho", "Fatehpur Sikri", "Mahabalipuram", "Sanchi Stupa"
    ],
  },
  {
    id: "historical",
    name: "🏰 Historical",
    places: [
      "Red Fort Delhi", "Qutub Minar", "Jaipur Forts", "Mysore Palace",
      "Victoria Memorial Kolkata", "Chittorgarh Fort", "Golconda Fort"
    ],
  },
  {
    id: "mosques",
    name: "🕌 Mosques",
    places: [
      "Jama Masjid Delhi", "Charminar Hyderabad", "Mecca Masjid Hyderabad",
      "Taj-ul-Masajid Bhopal", "Haji Ali Dargah Mumbai", "Ajmer Sharif"
    ],
  },
  {
    id: "churches",
    name: "⛪ Churches",
    places: [
      "Basilica of Bom Jesus Goa", "Se Cathedral Goa", 
      "St. Thomas Cathedral Mumbai", "Medak Church Telangana", "St. Francis Church Kochi"
    ],
  },
  {
    id: "wildlife",
    name: "🦁 Wildlife",
    places: [
      "Jim Corbett National Park", "Ranthambore National Park",
      "Kaziranga National Park", "Bandhavgarh National Park", "Sundarbans"
    ],
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("mountains");

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
                        className="p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all border border-border hover:border-secondary"
                      >
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                          <h3 className="font-semibold text-sm">{place}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
