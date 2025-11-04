import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const festivalData = {
  january: [
    { name: "Pongal", region: "Tamil Nadu", description: "Harvest festival" },
    { name: "Makar Sankranti", region: "Pan India", description: "Kite flying festival" },
    { name: "Republic Day", region: "Pan India", description: "National celebration" },
  ],
  february: [
    { name: "Surajkund Mela", region: "Haryana", description: "Crafts fair" },
    { name: "Losar", region: "Ladakh, Sikkim", description: "Tibetan New Year" },
  ],
  march: [
    { name: "Holi", region: "Pan India", description: "Festival of colors" },
    { name: "Mahashivratri", region: "Pan India", description: "Celebration of Lord Shiva" },
    { name: "Goa Carnival", region: "Goa", description: "Pre-Lenten celebration" },
  ],
  april: [
    { name: "Baisakhi", region: "Punjab", description: "Harvest festival" },
    { name: "Vishu", region: "Kerala", description: "New Year celebration" },
    { name: "Ugadi", region: "Karnataka, Andhra Pradesh", description: "New Year festival" },
  ],
  may: [
    { name: "Buddha Purnima", region: "Pan India", description: "Buddha's birthday" },
    { name: "Thrissur Pooram", region: "Kerala", description: "Temple festival" },
  ],
  june: [
    { name: "Rath Yatra", region: "Odisha", description: "Chariot festival" },
    { name: "Hemis Festival", region: "Ladakh", description: "Monastery festival" },
  ],
  july: [
    { name: "Eid-ul-Fitr", region: "Pan India", description: "Islamic festival" },
    { name: "Teej", region: "Rajasthan", description: "Monsoon festival" },
  ],
  august: [
    { name: "Independence Day", region: "Pan India", description: "National holiday" },
    { name: "Raksha Bandhan", region: "Pan India", description: "Brother-sister bond" },
    { name: "Janmashtami", region: "Pan India", description: "Krishna's birthday" },
  ],
  september: [
    { name: "Ganesh Chaturthi", region: "Maharashtra", description: "Elephant god festival" },
    { name: "Onam", region: "Kerala", description: "Harvest festival" },
  ],
  october: [
    { name: "Durga Puja", region: "West Bengal", description: "Goddess worship" },
    { name: "Dussehra", region: "Pan India", description: "Victory of good over evil" },
    { name: "Pushkar Fair", region: "Rajasthan", description: "Camel fair" },
  ],
  november: [
    { name: "Diwali", region: "Pan India", description: "Festival of lights" },
    { name: "Guru Nanak Jayanti", region: "Punjab", description: "Sikh festival" },
    { name: "Sonepur Mela", region: "Bihar", description: "Cattle fair" },
  ],
  december: [
    { name: "Christmas", region: "Goa, Kerala", description: "Christian festival" },
    { name: "Hornbill Festival", region: "Nagaland", description: "Cultural festival" },
  ],
};

const Festivals = () => {
  const [activeMonth, setActiveMonth] = useState("january");

  const months = Object.keys(festivalData);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Festival Calendar</h1>
          <p className="text-lg text-muted-foreground">
            Explore India's vibrant festivals throughout the year
          </p>
        </div>

        <Tabs value={activeMonth} onValueChange={setActiveMonth} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 h-auto gap-2 bg-transparent mb-6">
            {months.map((month) => (
              <TabsTrigger
                key={month}
                value={month}
                className="capitalize p-3 rounded-lg border-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {month.slice(0, 3)}
              </TabsTrigger>
            ))}
          </TabsList>

          {months.map((month) => (
            <TabsContent key={month} value={month}>
              <Card className="border-2">
                <CardHeader className="bg-gradient-warm">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    <CardTitle className="text-2xl capitalize">{month}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {festivalData[month as keyof typeof festivalData].map((festival, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all border-2 border-accent/50"
                      >
                        <h3 className="font-semibold text-xl mb-2">{festival.name}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="font-medium">📍 {festival.region}</span>
                          <span>{festival.description}</span>
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

export default Festivals;
