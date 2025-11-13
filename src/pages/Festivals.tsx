import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Info } from "lucide-react";

const festivalData = {
  january: [
    { name: "Makar Sankranti", region: "Pan India", city: "Various", description: "Harvest festival marking the sun's transition to Capricorn" },
    { name: "Pongal", region: "South India", city: "Tamil Nadu", description: "Four-day harvest festival celebrating prosperity" },
    { name: "Republic Day", region: "Pan India", city: "Delhi", description: "National holiday celebrating the Constitution of India" },
    { name: "Rann Utsav", region: "West India", city: "Kutch, Gujarat", description: "Cultural festival in the white desert of Kutch" },
    { name: "Kite Festival", region: "Gujarat", city: "Ahmedabad", description: "International kite flying festival" },
  ],
  february: [
    { name: "Maha Shivaratri", region: "Pan India", city: "Varanasi, Haridwar", description: "Night festival honoring Lord Shiva" },
    { name: "Desert Festival", region: "Rajasthan", city: "Jaisalmer", description: "Celebrating desert culture with camel races and folk music" },
    { name: "Losar", region: "North India", city: "Ladakh, Sikkim", description: "Tibetan New Year celebration with prayers and festivities" },
    { name: "Surajkund Mela", region: "Haryana", city: "Faridabad", description: "Annual crafts fair showcasing Indian handicrafts" },
  ],
  march: [
    { name: "Holi", region: "North India", city: "Mathura, Vrindavan", description: "Festival of colors celebrating spring and love" },
    { name: "Goa Carnival", region: "West India", city: "Goa", description: "Three-day festival with parades, music, and dance" },
    { name: "Rang Panchami", region: "West India", city: "Maharashtra", description: "Extended Holi celebration with colors" },
    { name: "Konark Dance Festival", region: "East India", city: "Konark, Odisha", description: "Classical dance performances at Sun Temple" },
  ],
  april: [
    { name: "Baisakhi", region: "Punjab", city: "Amritsar", description: "Sikh New Year and harvest festival" },
    { name: "Ram Navami", region: "Pan India", city: "Ayodhya, Various", description: "Celebrating Lord Rama's birth" },
    { name: "Ugadi", region: "South India", city: "Karnataka, Andhra Pradesh", description: "Telugu and Kannada New Year" },
    { name: "Vishu", region: "South India", city: "Kerala", description: "Malayalam New Year with traditional rituals" },
    { name: "Mahavir Jayanti", region: "Pan India", city: "Various", description: "Jain festival celebrating Lord Mahavira's birth" },
  ],
  may: [
    { name: "Buddha Purnima", region: "Pan India", city: "Bodh Gaya", description: "Celebrating Buddha's birth, enlightenment, and death" },
    { name: "Thrissur Pooram", region: "South India", city: "Kerala", description: "Grand temple festival with decorated elephants" },
    { name: "Hemis Festival", region: "North India", city: "Ladakh", description: "Buddhist monastery festival with masked dances" },
  ],
  june: [
    { name: "Rath Yatra", region: "East India", city: "Puri, Odisha", description: "Chariot festival of Lord Jagannath" },
    { name: "Hemis Festival", region: "North India", city: "Ladakh", description: "Largest monastic festival in Ladakh" },
    { name: "Sindhu Darshan", region: "North India", city: "Ladakh", description: "Festival celebrating the Indus River" },
  ],
  july: [
    { name: "Guru Purnima", region: "Pan India", city: "Various", description: "Honoring spiritual and academic teachers" },
    { name: "Teej", region: "North India", city: "Rajasthan, Haryana", description: "Monsoon festival celebrated by women" },
    { name: "Rath Yatra", region: "East India", city: "Puri", description: "Continues from June in some years" },
    { name: "Bonalu", region: "South India", city: "Hyderabad", description: "Festival honoring Goddess Mahakali" },
  ],
  august: [
    { name: "Independence Day", region: "Pan India", city: "Delhi", description: "National holiday celebrating freedom from British rule" },
    { name: "Janmashtami", region: "Pan India", city: "Mathura, Vrindavan", description: "Celebrating Lord Krishna's birth" },
    { name: "Raksha Bandhan", region: "Pan India", city: "Various", description: "Festival celebrating sibling bonds" },
    { name: "Onam", region: "South India", city: "Kerala", description: "Ten-day harvest festival of Kerala" },
    { name: "Nag Panchami", region: "Pan India", city: "Various", description: "Festival worshipping serpent deities" },
  ],
  september: [
    { name: "Ganesh Chaturthi", region: "West India", city: "Mumbai, Pune", description: "10-day festival honoring Lord Ganesha" },
    { name: "Navaratri Begins", region: "Pan India", city: "Gujarat, West Bengal", description: "Nine nights of goddess worship" },
    { name: "Onam", region: "South India", city: "Kerala", description: "Continues from August in some years" },
    { name: "Tarnetar Fair", region: "Gujarat", city: "Surendranagar", description: "Traditional tribal fair" },
  ],
  october: [
    { name: "Durga Puja", region: "East India", city: "Kolkata", description: "Grand five-day celebration of Goddess Durga" },
    { name: "Navratri", region: "West India", city: "Gujarat, Rajasthan", description: "Nine nights of Garba dance and devotion" },
    { name: "Dussehra", region: "Pan India", city: "Various", description: "Celebrating victory of good over evil" },
    { name: "Gandhi Jayanti", region: "Pan India", city: "Delhi, Rajghat", description: "Birthday of Mahatma Gandhi" },
    { name: "Diwali", region: "Pan India", city: "Various", description: "Falls in October or November - Festival of lights" },
  ],
  november: [
    { name: "Diwali", region: "Pan India", city: "Various", description: "Festival of lights celebrating prosperity" },
    { name: "Pushkar Camel Fair", region: "Rajasthan", city: "Pushkar", description: "World's largest camel fair and trading festival" },
    { name: "Guru Nanak Jayanti", region: "Pan India", city: "Amritsar", description: "Birthday of first Sikh Guru" },
    { name: "Chhath Puja", region: "East India", city: "Bihar, Jharkhand", description: "Sun worship festival on riverbanks" },
    { name: "Sonepur Mela", region: "Bihar", city: "Sonepur", description: "Asia's largest cattle fair" },
  ],
  december: [
    { name: "Christmas", region: "Pan India", city: "Goa, Kerala", description: "Celebrating birth of Jesus Christ" },
    { name: "Hornbill Festival", region: "Northeast India", city: "Nagaland", description: "Festival of festivals showcasing tribal culture" },
    { name: "Rann Utsav Begins", region: "West India", city: "Kutch, Gujarat", description: "Cultural extravaganza in white desert" },
    { name: "Goa Feast of St. Francis Xavier", region: "West India", city: "Goa", description: "Catholic festival honoring patron saint" },
    { name: "International Kala Ghoda Festival", region: "West India", city: "Mumbai", description: "Arts and culture festival" },
  ],
};

const Festivals = () => {
  const [activeMonth, setActiveMonth] = useState("january");
  const [selectedFestival, setSelectedFestival] = useState<{ name: string; region: string; city: string; description: string } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const months = Object.keys(festivalData);

  const handleFestivalClick = (festival: { name: string; region: string; city: string; description: string }) => {
    setSelectedFestival(festival);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Festival Calendar</h1>
          <p className="text-lg text-muted-foreground">
            Explore India's vibrant festivals throughout the year
          </p>
        </div>

        <Tabs value={activeMonth} onValueChange={setActiveMonth} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 h-auto gap-2 bg-transparent mb-8">
            {months.map((month) => (
              <TabsTrigger
                key={month}
                value={month}
                className="capitalize p-3 rounded-lg border-2 border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all hover:scale-105"
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
                    <CardTitle className="text-3xl capitalize">{month} Festivals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {festivalData[month as keyof typeof festivalData].map((festival, index) => (
                      <div
                        key={index}
                        onClick={() => handleFestivalClick(festival)}
                        className="p-5 rounded-xl bg-secondary/10 hover:bg-secondary/20 transition-all border-2 border-secondary/30 hover:border-secondary hover:shadow-lg cursor-pointer group"
                      >
                        <div className="flex items-start justify-between">
                          <h3 className="font-bold text-xl mb-2 text-secondary">{festival.name}</h3>
                          <Info className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm mb-3 text-foreground/80 line-clamp-2">{festival.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="font-medium">📍 {festival.region}</span>
                          <span className="font-medium">🏙️ {festival.city}</span>
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
                <Calendar className="w-6 h-6 text-primary" />
                {selectedFestival?.name}
              </DialogTitle>
              <DialogDescription className="text-base space-y-4 pt-4">
                {selectedFestival && (
                  <>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">About the Festival</h4>
                      <p className="text-muted-foreground">{selectedFestival.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Region</h4>
                      <p className="text-muted-foreground">📍 {selectedFestival.region}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Best Places to Celebrate</h4>
                      <p className="text-muted-foreground">🏙️ {selectedFestival.city}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Month</h4>
                      <p className="text-muted-foreground capitalize">{activeMonth}</p>
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

export default Festivals;
