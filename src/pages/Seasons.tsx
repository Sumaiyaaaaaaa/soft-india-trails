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
      "Gulmarg, Jammu & Kashmir - Ski resort with gondola rides",
      "Shimla, Himachal Pradesh - Colonial hill station with Mall Road",
      "Manali, Himachal Pradesh - Adventure hub with Solang Valley",
      "Auli, Uttarakhand - Premier skiing destination with cable car",
      "Calangute & Baga Beach, Goa - Golden beaches with water sports",
      "Jaipur (Amber Fort, Hawa Mahal), Rajasthan - Pink city heritage sites",
      "Udaipur (City Palace, Lake Pichola), Rajasthan - City of lakes and palaces",
      "Jaisalmer Fort, Rajasthan - Golden fort in Thar Desert",
      "Alleppey Backwaters, Kerala - Houseboat cruises through canals",
      "Rann of Kutch, Gujarat - White salt desert during Rann Utsav",
      "Hampi (Virupaksha Temple, Vittala Temple), Karnataka - Ancient ruins and monuments",
      "Pondicherry (French Quarter, Auroville), Tamil Nadu - French colonial architecture",
      "Havelock Island, Andaman - Pristine beaches and water activities",
      "Varanasi (Ghats, Kashi Vishwanath), Uttar Pradesh - Spiritual city on Ganges",
      "Mysore Palace, Karnataka - Royal palace with grand architecture",
    ],
    description: "Best time to explore beaches, deserts, and snow-covered mountains"
  },
  summer: {
    icon: Sun,
    emoji: "☀️",
    color: "primary",
    places: [
      "Leh-Ladakh (Pangong Lake, Nubra Valley), Jammu & Kashmir - High-altitude desert landscapes",
      "Spiti Valley (Key Monastery, Chandratal Lake), Himachal Pradesh - Cold desert with ancient monasteries",
      "Nainital (Naini Lake, Snow View Point), Uttarakhand - Lake town in Kumaon hills",
      "Mussoorie (Kempty Falls, Mall Road), Uttarakhand - Queen of hills with ropeway",
      "Darjeeling (Tiger Hill, Toy Train), West Bengal - Tea gardens with Kanchenjunga views",
      "Ooty (Botanical Gardens, Nilgiri Railway), Tamil Nadu - Queen of hill stations",
      "Coorg (Abbey Falls, Dubare Elephant Camp), Karnataka - Coffee plantations and mist-covered hills",
      "Munnar (Tea Gardens, Eravikulam Park), Kerala - Hill station with tea estates",
      "Mount Abu (Dilwara Temples, Nakki Lake), Rajasthan - Only hill station in Rajasthan",
      "Kodaikanal (Coaker's Walk, Bryant Park), Tamil Nadu - Princess of hill stations",
      "Shillong (Elephant Falls, Ward's Lake), Meghalaya - Scotland of the East",
      "Tawang (Tawang Monastery, Sela Pass), Arunachal Pradesh - Buddhist monastery at 10,000 ft",
      "Khajjiar (Mini Switzerland), Himachal Pradesh - Meadows with dense forests",
      "Gangtok (Tsomgo Lake, MG Road), Sikkim - Capital city with monastery views",
    ],
    description: "Escape to cool hill stations and high-altitude destinations"
  },
  monsoon: {
    icon: Cloud,
    emoji: "🌧️",
    color: "sky",
    places: [
      "Munnar (Attukal Waterfalls, Tea Gardens), Kerala - Misty hills with tea plantations",
      "Wayanad (Soochipara Falls, Edakkal Caves), Kerala - Spice plantations and waterfalls",
      "Coorg (Abbey Falls, Talacauvery), Karnataka - Coffee estates in rain",
      "Cherrapunji (Nohkalikai Falls, Living Root Bridges), Meghalaya - Wettest place on earth",
      "Mawsynram (Mawjymbuin Cave), Meghalaya - Receives highest rainfall",
      "Lonavala (Bhushi Dam, Tiger's Leap), Maharashtra - Waterfalls and misty valleys",
      "Mahabaleshwar (Venna Lake, Arthur's Seat), Maharashtra - Strawberry farms and viewpoints",
      "Udaipur (City Palace, Monsoon Palace), Rajasthan - Lakes at full capacity",
      "Mount Abu (Guru Shikhar, Nakki Lake), Rajasthan - Green hills in rain",
      "Valley of Flowers, Uttarakhand - UNESCO site with alpine flowers",
      "Goa (Dudhsagar Falls, Spice Plantations) - Lush greenery and waterfalls",
      "Malshej Ghat, Maharashtra - Waterfalls cascading over mountains",
      "Agumbe (Sunset Point, Rainforest), Karnataka - Cherrapunji of South India",
      "Amboli (Amboli Falls, Sunset Point), Maharashtra - Hill station with waterfalls",
    ],
    description: "Witness lush greenery, waterfalls, and nature at its finest"
  },
  autumn: {
    icon: Leaf,
    emoji: "🍂",
    color: "accent",
    places: [
      "Rishikesh (Laxman Jhula, Ram Jhula), Uttarakhand - Yoga capital with Ganga Aarti",
      "Jaipur (Amber Fort, City Palace, Jantar Mantar), Rajasthan - Pink City monuments",
      "Agra (Taj Mahal, Agra Fort), Uttar Pradesh - Mughal architectural marvels",
      "Khajuraho Temples, Madhya Pradesh - UNESCO site with intricate sculptures",
      "Orchha (Jahangir Mahal, Ram Raja Temple), Madhya Pradesh - Medieval fort complex",
      "Mysore (Mysore Palace, Chamundi Hills), Karnataka - Royal heritage and gardens",
      "Hampi (Virupaksha Temple, Stone Chariot), Karnataka - Ancient Vijayanagara ruins",
      "Ajanta & Ellora Caves, Maharashtra - Rock-cut Buddhist cave monuments",
      "Delhi (Red Fort, Qutub Minar, India Gate) - Capital with Mughal heritage",
      "Kolkata (Victoria Memorial, Howrah Bridge), West Bengal - Cultural capital",
      "Varanasi (Kashi Vishwanath, Dashashwamedh Ghat), Uttar Pradesh - Oldest living city",
      "Pushkar (Brahma Temple, Pushkar Lake), Rajasthan - Holy town with annual fair",
      "Konark (Sun Temple), Odisha - UNESCO World Heritage chariot temple",
      "Mahabalipuram (Shore Temple, Panch Rathas), Tamil Nadu - Ancient rock sculptures",
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
