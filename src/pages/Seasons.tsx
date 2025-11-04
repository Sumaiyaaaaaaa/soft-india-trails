import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sun, Cloud, Leaf } from "lucide-react";

const seasonData = {
  winter: {
    icon: Snowflake,
    emoji: "❄️",
    color: "secondary",
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
    emoji: "☀️",
    color: "primary",
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
    emoji: "🌧️",
    color: "sky",
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
    emoji: "🍂",
    color: "accent",
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel by Season</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect destinations for every season in India
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 mb-12 bg-transparent h-auto p-0">
            {Object.entries(seasonData).map(([season, data]) => {
              const Icon = data.icon;
              const isActive = activeTab === season;
              return (
                <TabsTrigger
                  key={season}
                  value={season}
                  className={`h-24 flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all hover:scale-105 shadow-lg text-lg font-bold ${
                    isActive 
                      ? `bg-${data.color} text-${data.color}-foreground border-${data.color}` 
                      : `border-${data.color} hover:bg-${data.color}/10`
                  }`}
                >
                  <span className="text-3xl">{data.emoji}</span>
                  <span className="capitalize">{season}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(seasonData).map(([season, data]) => (
            <TabsContent key={season} value={season} className="mt-6">
              <Card className="border-2">
                <CardHeader className={`bg-${data.color}/20`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-16 h-16 rounded-full bg-${data.color} flex items-center justify-center text-3xl`}>
                      {data.emoji}
                    </div>
                    <div>
                      <CardTitle className="text-3xl capitalize">{season}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {data.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.places.map((place, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-xl bg-${data.color}/10 hover:bg-${data.color}/20 transition-all border-2 border-${data.color}/30 hover:border-${data.color} hover:shadow-md`}
                      >
                        <h3 className="font-semibold text-lg">{place}</h3>
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
