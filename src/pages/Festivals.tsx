import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Info } from "lucide-react";

const festivalData = {
  january: [
    { name: "Makar Sankranti", region: "Pan India", city: "Various", description: "The harvest festival marking the sun's northward journey is celebrated nationwide with regional variations. In Gujarat, kites fill the skies during competitive flying. Tamil Nadu celebrates as Pongal with rice-boiling rituals. Maharashtra exchanges tilgul (sesame sweets) saying 'speak sweetly.' People take holy dips in rivers, especially at Prayagraj and Haridwar. Traditional dishes like khichdi and til-gud laddoos are prepared." },
    { name: "Pongal", region: "South India", city: "Tamil Nadu", description: "Tamil Nadu's four-day harvest festival thanks the Sun God, nature, and cattle. The main day involves boiling fresh rice with milk outdoors until it overflows (symbolizing abundance) while saying 'Pongalo Pongal!' Homes are decorated with kolam (rangoli), sugarcane stalks adorn doorways, and traditional dishes are prepared. Mattu Pongal honors cattle with decorations, bells, and special feed." },
    { name: "Republic Day", region: "Pan India", city: "Delhi", description: "National holiday celebrating the adoption of India's Constitution on January 26, 1950. The grand parade at Rajpath in Delhi features military displays, cultural tableaux from all states, and performances. The president unfurls the flag and takes the salute. Schools and institutions hold flag-hoisting ceremonies across the nation." },
    { name: "Rann Utsav", region: "West India", city: "Kutch, Gujarat", description: "A three-month cultural extravaganza in the white desert of Kutch showcasing Gujarat's rich heritage. Visitors stay in luxury tent cities, enjoy folk dances, music, handicraft bazaars, and camel safaris. The full moon nights over the white salt desert create magical landscapes." },
    { name: "Kite Festival", region: "Gujarat", city: "Ahmedabad", description: "International kite flying festival during Makar Sankranti where the skies fill with colorful kites. Competitive kite flying battles using manjha (glass-coated strings), night kite flying with illuminated kites, and rooftop celebrations make it spectacular. Food stalls serve traditional Gujarati delicacies." },
  ],
  february: [
    { name: "Maha Shivaratri", region: "Pan India", city: "Varanasi, Haridwar", description: "The night dedicated to Lord Shiva when devotees fast, perform night-long vigils, and offer milk, bel leaves to Shiva lingams. Temples resonate with 'Om Namah Shivaya' chants. Haridwar and Varanasi see massive gatherings with Ganga aarti and processions. Devotees believe staying awake all night brings blessings." },
    { name: "Desert Festival", region: "Rajasthan", city: "Jaisalmer", description: "Three-day cultural festival celebrating desert life with camel races, folk music and dance performances, turban tying competitions, and Mr. Desert contests. Set against Jaisalmer Fort's golden backdrop, it showcases Rajasthani culture. The evenings feature cultural programs at sand dunes under starlit skies." },
    { name: "Losar", region: "North India", city: "Ladakh, Sikkim", description: "Tibetan New Year celebrated with elaborate rituals, masked dances (Cham), and monastery festivities. Homes are cleaned, new prayer flags hoisted, and special dishes like guthuk soup prepared. Monasteries host religious ceremonies and cultural performances. The festival lasts 15 days with the first three being most significant." },
    { name: "Surajkund Mela", region: "Haryana", city: "Faridabad", description: "Annual international crafts fair near Delhi showcasing India's handicrafts, handlooms, and cultural diversity. Different states present their crafts, cuisine, and performances. Folk dances, music concerts, and artisan demonstrations create a vibrant atmosphere. One of Asia's largest craft fairs." },
  ],
  march: [
    { name: "Holi", region: "North India", city: "Mathura, Vrindavan", description: "The Festival of Colors celebrates spring's arrival and the triumph of good over evil. People smear each other with vibrant colored powders (gulal), drench with water guns, dance to music, and enjoy festive foods like gujiya and thandai. Mathura and Vrindavan host week-long festivities with Lathmar Holi. The joyous atmosphere breaks social barriers." },
    { name: "Goa Carnival", region: "West India", city: "Goa", description: "Three-day pre-Lenten festival with Portuguese influence featuring colorful parades, floats, music, dance, and King Momo's arrival. Streets come alive with costumed revelers, live bands, and food stalls. The vibrant celebrations in Panaji, Margao, and Vasco showcase Goan culture uniquely blending Indian and European traditions." },
    { name: "Rang Panchami", region: "West India", city: "Maharashtra", description: "Celebrated five days after Holi Purnima, extending the color festival. Maharashtra celebrates with water fights and colored powders. Processions and community gatherings feature folk music and dance. It marks the complete arrival of spring with joyous celebrations." },
    { name: "Konark Dance Festival", region: "East India", city: "Konark, Odisha", description: "Five-day classical dance festival at the Sun Temple backdrop showcasing Odissi, Bharatanatyam, Kathak, Manipuri, and other classical forms. Renowned dancers perform against the temple's architectural marvel. The combination of ancient heritage and classical arts creates a mesmerizing experience." },
  ],
  april: [
    { name: "Baisakhi", region: "Punjab", city: "Amritsar", description: "Punjab's harvest festival and Sikh New Year marks the Khalsa's formation by Guru Gobind Singh in 1699. Sikhs visit gurdwaras for prayers, processions carry the Guru Granth Sahib, and langars feed thousands. Bhangra and Gidda dances celebrate the harvest. The Golden Temple in Amritsar hosts grand celebrations with traditional foods." },
    { name: "Ram Navami", region: "Pan India", city: "Ayodhya, Various", description: "Celebrating Lord Rama's birth with temple processions, bhajan recitals, and readings from Ramayana. Ayodhya sees grand celebrations with elaborate decorations and aarti ceremonies. Devotees fast and visit Rama temples. Cultural programs depict episodes from Ramayana." },
    { name: "Ugadi", region: "South India", city: "Karnataka, Andhra Pradesh", description: "Telugu and Kannada New Year celebrated with special dishes like Ugadi pachadi (mixture of six tastes representing life's emotions). Homes are decorated with mango leaves, oil lamps lit, and new clothes worn. Astrological predictions for the new year are read." },
    { name: "Vishu", region: "South India", city: "Kerala", description: "Malayalam New Year beginning with Vishukkani (first sight), an arrangement of auspicious items. Elders give Vishukkaineetam (money) to children. Traditional Sadhya feast is prepared. Fireworks and visiting temples mark the celebrations. The festival represents prosperity and new beginnings." },
    { name: "Mahavir Jayanti", region: "Pan India", city: "Various", description: "Jain festival celebrating Lord Mahavira's birth with temple visits, processions, charitable acts, and prayers. Devotees perform abhisheka (ritual bathing) of Mahavira's idol. Teachings of non-violence and truth are emphasized. Simple vegetarian meals and acts of kindness mark the day." },
  ],
  may: [
    { name: "Buddha Purnima", region: "Pan India", city: "Bodh Gaya", description: "Celebrating Buddha's birth, enlightenment, and death (Parinirvana) on the same full moon day. Devotees visit Buddhist temples, offer prayers, light lamps, and practice meditation. Bodh Gaya, where Buddha attained enlightenment, sees massive gatherings. The Bodhi tree is decorated and circumambulated." },
    { name: "Thrissur Pooram", region: "South India", city: "Kerala", description: "Kerala's most spectacular temple festival features a magnificent elephant pageant with 50+ caparisoned elephants carrying colorful parasols. The percussion ensemble (Panchavadyam) with hundreds of traditional instruments creates thunderous rhythms. Fireworks displays last hours. The festival at Vadakkunnathan Temple represents Kerala's temple culture magnificently." },
    { name: "Hemis Festival", region: "North India", city: "Ladakh", description: "Ladakh's biggest festival at Hemis Monastery celebrates Guru Padmasambhava's birth. Colorful Cham dances by masked monks depict the victory of good over evil. Traditional costumes, elaborate masks, and rhythmic music create a mystical atmosphere. Every 12 years, a massive silk thangka is unveiled." },
  ],
  june: [
    { name: "Rath Yatra", region: "East India", city: "Puri, Odisha", description: "Lord Jagannath's annual chariot journey draws millions. Three massive wooden chariots (for Jagannath, Balabhadra, and Subhadra) are pulled through streets by devotees. The chariots are rebuilt annually. The deities stay at Gundicha Temple for nine days. The festival embodies unity as people of all castes participate." },
    { name: "Hemis Festival", region: "North India", city: "Ladakh", description: "The largest monastic festival showcasing Ladakhi Buddhist culture against stunning Himalayan backdrop. Monks perform sacred masked dances, traditional music fills the air, and locals dress in traditional attire. Stalls sell handicrafts and local delicacies." },
    { name: "Sindhu Darshan", region: "North India", city: "Ladakh", description: "Festival celebrating the Indus River (Sindhu) promoting national integration and communal harmony. People from different states bring water from their rivers to merge with the Indus. Cultural programs, folk dances, and exhibitions showcase India's diversity." },
  ],
  july: [
    { name: "Guru Purnima", region: "Pan India", city: "Various", description: "Honoring spiritual and academic teachers on the full moon day. Students pay respects to gurus, teachers are felicitated, and educational institutions hold special programs. Buddhist and Jain communities also celebrate with prayers and teachings." },
    { name: "Teej", region: "North India", city: "Rajasthan, Haryana", description: "Monsoon festival celebrated by women with fasting, prayers for marital bliss, swings, henna application, and traditional songs. Women dress in green and red, receive gifts from family. Processions feature decorated idols and cultural performances." },
    { name: "Rath Yatra", region: "East India", city: "Puri", description: "In some years, the festival extends into July. The chariot procession and associated festivities continue with the same fervor and devotion." },
    { name: "Bonalu", region: "South India", city: "Hyderabad", description: "Festival honoring Goddess Mahakali where women carry decorated pots (bonam) to temples. Traditional dances, processions, and folk music create a vibrant atmosphere. Fortune-telling ceremonies and cultural events mark the celebrations." },
  ],
  august: [
    { name: "Independence Day", region: "Pan India", city: "Delhi", description: "National holiday on August 15 celebrating freedom from British rule in 1947. The Prime Minister hoists the flag at Red Fort and addresses the nation. Flag-hoisting ceremonies, cultural programs, and patriotic events occur nationwide. Buildings are illuminated in tricolor." },
    { name: "Janmashtami", region: "Pan India", city: "Mathura, Vrindavan", description: "Celebrating Lord Krishna's birth at midnight with fasting, devotional singing, and reenactments of his life. Temples are decorated, cradles rocked, and prasad distributed. Dahi Handi (pot-breaking) competitions form human pyramids. Mathura-Vrindavan celebrations are legendary." },
    { name: "Raksha Bandhan", region: "Pan India", city: "Various", description: "Festival celebrating sibling bonds where sisters tie rakhi (sacred thread) on brothers' wrists, who promise protection and give gifts. The ritual transcends blood relations, celebrating all protective relationships. Families gather, sweets are exchanged." },
    { name: "Onam", region: "South India", city: "Kerala", description: "Kerala's state festival celebrates King Mahabali's annual visit with ten days of festivities. Elaborate flower carpets (pookalam), traditional kasavu sarees, grand Onasadya feast with 26+ dishes, and spectacular snake boat races. The festival celebrates equality, prosperity, and Malayalam heritage." },
    { name: "Nag Panchami", region: "Pan India", city: "Various", description: "Festival worshipping serpent deities for protection and prosperity. Snake idols are worshipped with milk, flowers, and prayers. Women fast and perform rituals. Rural areas see traditional snake charmer performances." },
  ],
  september: [
    { name: "Ganesh Chaturthi", region: "West India", city: "Mumbai, Pune", description: "Ten-day festival celebrating Lord Ganesha's birthday with grand installations and processions. Mumbai sees elaborate community pandals. Daily rituals, modak offerings, cultural programs, and devotional music create festive energy. The festival concludes with Anant Chaturdashi immersions with chanting and music." },
    { name: "Navaratri Begins", region: "Pan India", city: "Gujarat, West Bengal", description: "Nine nights honoring Goddess Durga with regional variations. Gujarat features energetic Garba and Dandiya Raas dances in colorful attire. West Bengal celebrates as Durga Puja with elaborate pandals. Fasting, prayers, and cultural programs occur daily." },
    { name: "Onam", region: "South India", city: "Kerala", description: "In some years, the ten-day Onam festival extends from August into September, continuing the celebrations of pookalam, feasts, and cultural performances." },
    { name: "Tarnetar Fair", region: "Gujarat", city: "Surendranagar", description: "Traditional tribal fair near Tarnetar Temple featuring folk dances, music, handicrafts, and a unique marriage market where tribal youth find matches. Colorful traditional attire and umbrella decorations create vibrant scenes." },
  ],
  october: [
    { name: "Durga Puja", region: "East India", city: "Kolkata", description: "Bengal's grandest festival honors Goddess Durga's victory over demon Mahishasura. Elaborate pandals house artistic clay idols depicting social themes. Five-day celebration with rituals, dhak drums, cultural programs, and pandal-hopping. Culminates with Vijayadashami immersions. UNESCO-recognized Intangible Cultural Heritage." },
    { name: "Navratri", region: "West India", city: "Gujarat, Rajasthan", description: "Nine nights of Garba and Dandiya Raas dances in traditional chaniya cholis and kediyus. Community gatherings feature live music, colorful decorations, and energetic dancing. Each night has special significance with different goddess forms worshipped." },
    { name: "Dussehra", region: "Pan India", city: "Various", description: "Celebrating good's victory over evil through Rama's victory over Ravana or Durga defeating Mahishasura. North India burns Ravana effigies after nine nights of Ramlila. Mysore celebrates with grand Dasara processions and palace illuminations." },
    { name: "Gandhi Jayanti", region: "Pan India", city: "Delhi, Rajghat", description: "Birthday of Mahatma Gandhi on October 2, celebrated as a national holiday. Prayer meetings at Rajghat, his memorial in Delhi. Schools and institutions hold programs emphasizing non-violence, truth, and cleanliness campaigns." },
    { name: "Diwali", region: "Pan India", city: "Various", description: "The Festival of Lights symbolizing victory of light over darkness. Homes decorated with diyas and rangolis, fireworks illuminate skies, Goddess Lakshmi is worshipped, gifts and sweets exchanged. The five-day celebration is India's biggest festival with regional variations." },
  ],
  november: [
    { name: "Diwali", region: "Pan India", city: "Various", description: "When falling in November, Diwali celebrations continue with the same grandeur - illuminated homes, fireworks, Lakshmi puja, new clothes, gift exchanges, and festive meals creating joyous atmosphere nationwide." },
    { name: "Pushkar Camel Fair", region: "Rajasthan", city: "Pushkar", description: "World's largest camel fair with thousands of camels, horses, cattle traded. Cultural programs feature folk dances, music, camel races, beauty contests. Holy bathing in Pushkar Lake on Kartik Purnima. Temporary camps offer Rajasthani hospitality. Spectacular desert celebration attracting global visitors." },
    { name: "Guru Nanak Jayanti", region: "Pan India", city: "Amritsar", description: "Birthday of the first Sikh Guru celebrated with Prabhat Pheris (morning processions), Akhand Path (continuous Guru Granth Sahib reading), kirtans, and langars. Golden Temple sees grand celebrations with illuminations and special prayers." },
    { name: "Chhath Puja", region: "East India", city: "Bihar, Jharkhand", description: "Ancient Sun worship festival where devotees fast for 36 hours, stand in water offering prayers to rising and setting sun. Rigorous rituals performed at riverbanks with traditional songs. Women play central roles in this eco-friendly, community festival." },
    { name: "Sonepur Mela", region: "Bihar", city: "Sonepur", description: "Asia's largest cattle fair at the Ganges-Gandak confluence featuring livestock trading, cultural programs, and Chhath Puja celebrations. Traditional handicrafts, folk performances, and circus shows create festive atmosphere." },
  ],
  december: [
    { name: "Christmas", region: "Pan India", city: "Goa, Kerala", description: "Christians celebrate Jesus Christ's birth with midnight mass featuring carols, nativity scenes, and prayers. Churches beautifully decorated, families exchange gifts, prepare plum cake and roasts. Goa and Kerala see grand festivities. Santa visits, carol singing, and charitable acts mark the season." },
    { name: "Hornbill Festival", region: "Northeast India", city: "Nagaland", description: "Nagaland's 'Festival of Festivals' celebrating all major tribes' cultures. Traditional dances, songs, games, Naga Morungs, rock concerts, indigenous games, craft bazaars, and traditional cuisine. At Kisama Heritage Village, it offers immersive cultural experience promoting Naga identity." },
    { name: "Rann Utsav Begins", region: "West India", city: "Kutch, Gujarat", description: "Beginning of the three-month cultural extravaganza in Kutch's white desert. Luxury tent accommodations, folk performances, handicraft shopping, camel safaris, and full moon landscapes create magical experiences." },
    { name: "Goa Feast of St. Francis Xavier", region: "West India", city: "Goa", description: "Catholic festival honoring Goa's patron saint whose body lies in Basilica of Bom Jesus. Special novenas, masses, processions, and festivities. Every decade, the saint's body is displayed, attracting millions." },
    { name: "International Kala Ghoda Festival", region: "West India", city: "Mumbai", description: "Nine-day arts and culture festival in Mumbai's heritage precinct featuring visual arts, theater, music, dance, literature, and cuisine. Street performances, installations, workshops, and exhibitions celebrate creativity." },
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
