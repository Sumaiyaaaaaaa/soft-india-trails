import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sun, Cloud, Leaf } from "lucide-react";

const seasonData = {
  winter: {
    icon: Snowflake,
    color: "bg-sky",
    places: [
      "Gulmarg, Kashmir", "Shimla, Himachal Pradesh", "Manali, Himachal Pradesh",
      "Auli, Uttarakhand", "Goa Beaches", "Rajasthan (Jaipur, Udaipur, Jaisalmer)",
      "Kerala Backwaters", "Rann of Kutch, Gujarat", "Hampi, Karnataka",
      "Pondicherry", "Andaman Islands", "Varanasi, Uttar Pradesh"
    ],
    description: "Best time to explore beaches, deserts, and snow-covered mountains"
  },
  summer: {
    icon: Sun,
    color: "bg-secondary",
    places: [
      "Ladakh", "Spiti Valley, Himachal Pradesh", "Nainital, Uttarakhand",
      "Mussoorie, Uttarakhand", "Darjeeling, West Bengal", "Ooty, Tamil Nadu",
      "Coorg, Karnataka", "Munnar, Kerala", "Mount Abu, Rajasthan",
      "Kodaikanal, Tamil Nadu", "Shillong, Meghalaya", "Tawang, Arunachal Pradesh"
    ],
    description: "Escape to cool hill stations and high-altitude destinations"
  },
  monsoon: {
    icon: Cloud,
    color: "bg-accent",
    places: [
      "Munnar, Kerala", "Wayanad, Kerala", "Coorg, Karnataka",
      "Cherrapunji, Meghalaya", "Mawsynram, Meghalaya", "Lonavala, Maharashtra",
      "Mahabaleshwar, Maharashtra", "Udaipur, Rajasthan", "Mount Abu, Rajasthan",
      "Valley of Flowers, Uttarakhand", "Goa", "Malshej Ghat, Maharashtra"
    ],
    description: "Witness lush greenery, waterfalls, and nature at its finest"
  },
  autumn: {
    icon: Leaf,
    color: "bg-primary",
    places: [
      "Rishikesh, Uttarakhand", "Jaipur, Rajasthan", "Agra, Uttar Pradesh",
      "Khajuraho, Madhya Pradesh", "Orchha, Madhya Pradesh", "Mysore, Karnataka",
      "Hampi, Karnataka", "Ajanta & Ellora Caves, Maharashtra", "Delhi",
      "Kolkata, West Bengal", "Varanasi, Uttar Pradesh", "Pushkar, Rajasthan"
    ],
    description: "Perfect weather for sightseeing, heritage tours, and festivals"
  }
};

const Seasons = () => {
  const [activeTab, setActiveTab] = useState("winter");

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Travel by Season</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect destinations for every season in India
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent">
            {Object.entries(seasonData).map(([season, data]) => {
              const Icon = data.icon;
              return (
                <TabsTrigger
                  key={season}
                  value={season}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 data-[state=active]:${data.color} transition-all`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="capitalize font-semibold">{season}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(seasonData).map(([season, data]) => (
            <TabsContent key={season} value={season} className="mt-6">
              <Card className="border-2">
                <CardHeader className={`${data.color}/20`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${data.color} flex items-center justify-center`}>
                      <data.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl capitalize">{season}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {data.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {data.places.map((place, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${data.color}/10 hover:${data.color}/20 transition-all border border-border`}
                      >
                        <h3 className="font-semibold">{place}</h3>
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

export default Seasons;
