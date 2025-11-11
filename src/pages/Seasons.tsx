import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, Sun, Cloud, Leaf } from "lucide-react";

const seasonData = {
  winter: {
    icon: Snowflake,
    emoji: "❄️",
    color: "primary",
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
    color: "secondary",
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

// Animation components
const SnowAnimation = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white opacity-70"
          style={{
            left: `${flake.left}%`,
            animation: `fall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
            fontSize: `${Math.random() * 10 + 10}px`,
          }}
        >
          ❄
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { top: -10%; transform: translateX(0); }
          100% { top: 100%; transform: translateX(${Math.random() * 40 - 20}px); }
        }
      `}</style>
    </div>
  );
};

const SunriseAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-b from-yellow-200 to-orange-400 animate-[rise_4s_ease-in-out_infinite]">
        <div className="absolute inset-0 rounded-full bg-yellow-300 animate-pulse opacity-50"></div>
      </div>
      <style>{`
        @keyframes rise {
          0% { top: 100%; opacity: 0; }
          50% { top: 10%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const RainAnimation = () => {
  const raindrops = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-gradient-to-b from-sky-400 to-transparent"
          style={{
            left: `${drop.left}%`,
            animation: `rain ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes rain {
          0% { top: -10%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

const LeavesAnimation = () => {
  const leaves = ['🍂', '🍁', '🍃'];
  const fallingLeaves = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    emoji: leaves[Math.floor(Math.random() * leaves.length)],
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fallingLeaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-2xl"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.duration}s ease-in infinite`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          {leaf.emoji}
        </div>
      ))}
      <style>{`
        @keyframes leafFall {
          0% { 
            top: -10%; 
            transform: translateX(0) rotate(0deg); 
            opacity: 1;
          }
          100% { 
            top: 100%; 
            transform: translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg); 
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

const Seasons = () => {
  const [activeTab, setActiveTab] = useState("winter");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(false);
    const timer = setTimeout(() => setShowAnimation(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const getAnimation = () => {
    if (!showAnimation) return null;
    switch (activeTab) {
      case 'winter': return <SnowAnimation />;
      case 'summer': return <SunriseAnimation />;
      case 'monsoon': return <RainAnimation />;
      case 'autumn': return <LeavesAnimation />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 relative">
      {getAnimation()}
      <div className="container mx-auto max-w-6xl relative z-10">
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
