import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Waves, Church, Home, Landmark, MapPin } from "lucide-react";

const categoryData = {
  mountains: {
    icon: Mountain,
    color: "bg-sky",
    places: [
      "Himalayan Range, Himachal Pradesh & Uttarakhand", "Ladakh, Jammu & Kashmir",
      "Darjeeling, West Bengal", "Sikkim", "Munnar, Kerala",
      "Ooty, Tamil Nadu", "Coorg, Karnataka", "Spiti Valley, Himachal Pradesh",
      "Auli, Uttarakhand", "Tawang, Arunachal Pradesh", "Shillong, Meghalaya",
      "Nainital, Uttarakhand"
    ]
  },
  beaches: {
    icon: Waves,
    color: "bg-accent",
    places: [
      "Goa Beaches (Calangute, Baga, Anjuna)", "Andaman Islands",
      "Kerala Beaches (Kovalam, Varkala)", "Gokarna, Karnataka",
      "Puri, Odisha", "Pondicherry", "Lakshadweep Islands",
      "Tarkarli, Maharashtra", "Daman & Diu", "Marari Beach, Kerala",
      "Radhanagar Beach, Andaman", "Kudle Beach, Karnataka"
    ]
  },
  temples: {
    icon: Home,
    color: "bg-secondary",
    places: [
      "Tirupati, Andhra Pradesh", "Varanasi, Uttar Pradesh", "Madurai, Tamil Nadu",
      "Golden Temple, Amritsar", "Konark Sun Temple, Odisha", "Khajuraho, Madhya Pradesh",
      "Somnath, Gujarat", "Rameshwaram, Tamil Nadu", "Dwarka, Gujarat",
      "Jagannath Temple, Puri", "Meenakshi Temple, Madurai", "Shirdi, Maharashtra"
    ]
  },
  heritage: {
    icon: Landmark,
    color: "bg-primary",
    places: [
      "Taj Mahal, Agra", "Red Fort, Delhi", "Qutub Minar, Delhi",
      "Fatehpur Sikri, Uttar Pradesh", "Hampi, Karnataka", "Ajanta & Ellora Caves, Maharashtra",
      "Konark Sun Temple, Odisha", "Khajuraho, Madhya Pradesh", "Sanchi Stupa, Madhya Pradesh",
      "Mahabalipuram, Tamil Nadu", "Victoria Memorial, Kolkata", "Charminar, Hyderabad"
    ]
  },
  mosques: {
    icon: Church,
    color: "bg-accent",
    places: [
      "Jama Masjid, Delhi", "Mecca Masjid, Hyderabad", "Taj-ul-Masjid, Bhopal",
      "Jama Masjid, Agra", "Nizamuddin Dargah, Delhi", "Ajmer Sharif Dargah, Rajasthan",
      "Haji Ali Dargah, Mumbai", "Gol Gumbaz, Karnataka", "Bara Imambara, Lucknow"
    ]
  },
  churches: {
    icon: Church,
    color: "bg-sky",
    places: [
      "Se Cathedral, Goa", "Basilica of Bom Jesus, Goa", "St. Francis Church, Kochi",
      "Santa Cruz Basilica, Kochi", "Sacred Heart Cathedral, Delhi",
      "St. Thomas Cathedral, Mumbai", "St. Paul's Cathedral, Kolkata",
      "Velankanni Church, Tamil Nadu", "Medak Cathedral, Telangana"
    ]
  }
};

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("mountains");

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore by Category</h1>
          <p className="text-lg text-muted-foreground">
            Discover destinations based on your interests
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent">
            {Object.entries(categoryData).map(([category, data]) => {
              const Icon = data.icon;
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 data-[state=active]:${data.color} transition-all`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize font-semibold text-sm">{category}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(categoryData).map(([category, data]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <Card className="border-2">
                <CardHeader className={`${data.color}/20`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${data.color} flex items-center justify-center`}>
                      <data.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl capitalize">{category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.places.map((place, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${data.color}/10 hover:${data.color}/20 transition-all border border-border`}
                      >
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 shrink-0" />
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
