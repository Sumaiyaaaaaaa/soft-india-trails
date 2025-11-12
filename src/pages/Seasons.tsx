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
  const snowflakes = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 10 + Math.random() * 15,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white/90 shadow-lg"
          style={{
            left: `${flake.left}%`,
            top: '-20px',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `fall ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        />
      ))}
      {/* Snowman */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="relative">
          {/* Bottom snowball */}
          <div className="w-32 h-32 bg-white rounded-full border-4 border-white/80 shadow-2xl"></div>
          {/* Middle snowball */}
          <div className="w-24 h-24 bg-white rounded-full border-4 border-white/80 shadow-2xl absolute -top-20 left-4"></div>
          {/* Head snowball */}
          <div className="w-16 h-16 bg-white rounded-full border-4 border-white/80 shadow-2xl absolute -top-32 left-8">
            {/* Eyes */}
            <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
            {/* Nose */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-orange-500"></div>
            {/* Smile */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>
          {/* Arms */}
          <div className="absolute top-[-80px] -left-8 w-16 h-1 bg-amber-800 rotate-45 origin-right"></div>
          <div className="absolute top-[-80px] -right-8 w-16 h-1 bg-amber-800 -rotate-45 origin-left"></div>
        </div>
      </div>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const SunriseAnimation = () => {
  const rays = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    rotation: (i * 18),
    delay: i * 0.1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="relative">
        {/* Sun */}
        <div className="w-48 h-48 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full shadow-2xl animate-pulse"></div>
        {/* Radiating rays */}
        {rays.map((ray) => (
          <div
            key={ray.id}
            className="absolute top-1/2 left-1/2 origin-bottom"
            style={{
              transform: `translate(-50%, -100%) rotate(${ray.rotation}deg)`,
              animation: `radiate 2s ease-in-out ${ray.delay}s infinite`,
            }}
          >
            <div className="w-3 h-40 bg-gradient-to-t from-yellow-400 via-orange-300 to-transparent rounded-full opacity-70"></div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes radiate {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -100%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -100%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

const RainAnimation = () => {
  const raindrops = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 0.5,
  }));

  const clouds = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: Math.random() * 80,
    delay: i * 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute top-10"
          style={{
            left: `${cloud.left}%`,
            animation: `float 20s linear ${cloud.delay}s infinite`,
          }}
        >
          <div className="relative">
            <div className="w-20 h-12 bg-gray-400/80 rounded-full"></div>
            <div className="absolute top-2 left-6 w-24 h-14 bg-gray-400/80 rounded-full"></div>
            <div className="absolute top-1 left-14 w-18 h-12 bg-gray-400/80 rounded-full"></div>
          </div>
        </div>
      ))}
      {/* Rain drops */}
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-600 opacity-60"
          style={{
            left: `${drop.left}%`,
            top: '80px',
            animation: `rain ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes rain {
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20vw);
          }
        }
      `}</style>
    </div>
  );
};

const LeavesAnimation = () => {
  const leaves = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    emoji: ['🍂', '🍁', '🍃'][Math.floor(Math.random() * 3)],
    drift: -20 + Math.random() * 40,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-3xl"
          style={{
            left: `${leaf.left}%`,
            top: '-50px',
            animation: `leafFall ${leaf.duration}s ease-in-out ${leaf.delay}s infinite`,
            '--drift': `${leaf.drift}px`,
          } as React.CSSProperties}
        >
          {leaf.emoji}
        </div>
      ))}
      <style>{`
        @keyframes leafFall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) translateX(var(--drift)) rotate(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(0) rotate(180deg);
          }
          75% {
            transform: translateY(75vh) translateX(calc(var(--drift) * -1)) rotate(270deg);
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0.5;
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
