// Comprehensive places database for search functionality
export interface PlaceDetail {
  name: string;
  state?: string;
  category: string;
  description: string;
  bestTime?: string;
  season?: string;
}

export const allPlacesData: PlaceDetail[] = [
  // Jammu and Kashmir
  { name: "Srinagar", state: "Jammu and Kashmir", category: "mountains", description: "The summer capital known for Dal Lake, houseboats, and Mughal gardens. A paradise on earth with stunning natural beauty.", bestTime: "April to October" },
  { name: "Gulmarg", state: "Jammu and Kashmir", category: "mountains", description: "Famous ski resort and Asia's highest golf course. Known for its gondola ride and snow-capped peaks.", bestTime: "December to March (skiing), June to August (meadows)" },
  { name: "Pahalgam", state: "Jammu and Kashmir", category: "mountains", description: "Base camp for Amarnath Yatra, surrounded by pine forests and the Lidder River. Popular for trekking and nature walks.", bestTime: "April to November" },
  { name: "Sonmarg", state: "Jammu and Kashmir", category: "mountains", description: "Gateway to Ladakh, known as 'Meadow of Gold'. Features glaciers, lakes, and stunning mountain views.", bestTime: "May to October" },
  { name: "Dal Lake", state: "Jammu and Kashmir", category: "heritage", description: "Iconic lake with shikaras and houseboats. The jewel of Srinagar with floating gardens and markets.", bestTime: "April to October" },
  { name: "Leh", state: "Jammu and Kashmir", category: "mountains", description: "Capital of Ladakh, high-altitude desert with Buddhist monasteries. Adventure hub for biking and trekking.", bestTime: "May to September" },
  { name: "Vaishno Devi Temple", state: "Jammu and Kashmir", category: "temples", description: "Sacred Hindu pilgrimage site dedicated to Goddess Vaishno Devi. Located in Trikuta Mountains.", bestTime: "March to October" },
  { name: "Patnitop", state: "Jammu and Kashmir", category: "mountains", description: "Hill station with panoramic views, meadows, and pine forests. Ideal for nature lovers and adventure activities.", bestTime: "March to November" },
  { name: "Yusmarg", state: "Jammu and Kashmir", category: "mountains", description: "Pristine meadow surrounded by dense forests and snow-capped peaks. Perfect for picnics and horse riding.", bestTime: "April to November" },
  { name: "Doodhpathri", state: "Jammu and Kashmir", category: "mountains", description: "'Valley of Milk' with lush green meadows and crystal-clear streams. Offbeat destination for nature enthusiasts.", bestTime: "May to September" },
  { name: "Kishtwar", state: "Jammu and Kashmir", category: "mountains", description: "Known for saffron fields, scenic beauty, and trekking routes. Home to Kishtwar National Park.", bestTime: "April to October" },
  { name: "Aru Valley", state: "Jammu and Kashmir", category: "mountains", description: "Quaint village with meadows and mountain views. Starting point for treks to Kolahoi Glacier.", bestTime: "April to November" },
  { name: "Betaab Valley", state: "Jammu and Kashmir", category: "mountains", description: "Named after Bollywood film, features lush greenery and snow-covered mountains. Popular filming location.", bestTime: "April to November" },
  { name: "Nubra Valley", state: "Jammu and Kashmir", category: "mountains", description: "Cold desert with sand dunes, Bactrian camels, and Buddhist monasteries. Accessible via Khardung La pass.", bestTime: "May to September" },
  { name: "Pangong Lake", state: "Jammu and Kashmir", category: "mountains", description: "Stunning high-altitude lake with changing colors. Extends from India to Tibet.", bestTime: "May to September" },
  { name: "Kargil", state: "Jammu and Kashmir", category: "historical", description: "Historical town known for the Kargil War memorial. Gateway to Zanskar Valley.", bestTime: "May to September" },
  
  // Himachal Pradesh
  { name: "Shimla", state: "Himachal Pradesh", category: "mountains", description: "Former summer capital of British India. Colonial architecture, Mall Road, and scenic views.", bestTime: "March to June, December to February" },
  { name: "Manali", state: "Himachal Pradesh", category: "mountains", description: "Adventure paradise with skiing, paragliding, and trekking. Gateway to Rohtang Pass and Solang Valley.", bestTime: "October to June" },
  { name: "Dharamshala", state: "Himachal Pradesh", category: "mountains", description: "Home to Dalai Lama and Tibetan government-in-exile. Known for McLeod Ganj and Buddhist culture.", bestTime: "March to June, September to November" },
  { name: "Kasauli", state: "Himachal Pradesh", category: "mountains", description: "Peaceful hill station with colonial charm. Perfect for quiet getaways and nature walks.", bestTime: "April to June, September to November" },
  { name: "Kullu", state: "Himachal Pradesh", category: "mountains", description: "Valley of gods with apple orchards and adventure sports. Famous for Dussehra festival.", bestTime: "March to June, October to November" },
  { name: "Spiti Valley", state: "Himachal Pradesh", category: "mountains", description: "High-altitude cold desert with ancient monasteries. Known for stark beauty and Buddhist culture.", bestTime: "May to October" },
  { name: "Dalhousie", state: "Himachal Pradesh", category: "mountains", description: "Colonial-era hill station with Victorian architecture. Offers views of Dhauladhar range.", bestTime: "March to June, September to November" },
  { name: "Khajjiar", state: "Himachal Pradesh", category: "mountains", description: "'Mini Switzerland of India' with lush meadows and dense forests. Famous for its scenic beauty.", bestTime: "March to June, September to November" },
  { name: "McLeod Ganj", state: "Himachal Pradesh", category: "mountains", description: "Tibetan culture hub with monasteries and cafes. Popular among backpackers and spiritual seekers.", bestTime: "March to June, September to November" },
  { name: "Kinnaur", state: "Himachal Pradesh", category: "mountains", description: "Tribal district with apple orchards and ancient temples. Offers spectacular Himalayan views.", bestTime: "April to October" },
  { name: "Chamba", state: "Himachal Pradesh", category: "heritage", description: "Ancient town with temples and palaces. Known for Chamba Rumal embroidery and Minjar festival.", bestTime: "March to June, September to November" },
  { name: "Bir Billing", state: "Himachal Pradesh", category: "mountains", description: "Paragliding capital of India. Tibetan colony with monasteries and cafes.", bestTime: "March to June, September to November" },
  { name: "Palampur", state: "Himachal Pradesh", category: "mountains", description: "Tea capital of North India with lush tea gardens. Offers views of Dhauladhar range.", bestTime: "March to June, September to November" },
  { name: "Rohtang Pass", state: "Himachal Pradesh", category: "mountains", description: "High mountain pass with snow activities. Gateway to Lahaul and Spiti valleys.", bestTime: "May to October" },
  { name: "Solang Valley", state: "Himachal Pradesh", category: "mountains", description: "Adventure sports hub near Manali. Popular for skiing, zorbing, and paragliding.", bestTime: "October to June" },
  
  // Add more states with 15+ places each...
  // Punjab
  { name: "Golden Temple, Amritsar", state: "Punjab", category: "temples", description: "Holiest shrine of Sikhism with golden architecture. Known for langar (community kitchen) serving thousands daily.", bestTime: "October to March" },
  { name: "Jallianwala Bagh, Amritsar", state: "Punjab", category: "historical", description: "Memorial of tragic 1919 massacre. Important national monument with historical significance.", bestTime: "October to March" },
  { name: "Wagah Border, Amritsar", state: "Punjab", category: "historical", description: "India-Pakistan border known for daily flag-lowering ceremony. Patriotic atmosphere and cultural experience.", bestTime: "October to March" },
  { name: "Rock Garden, Chandigarh", state: "Punjab", category: "heritage", description: "Sculpture garden made from industrial and urban waste. Created by Nek Chand, showcasing creative art.", bestTime: "September to March" },
  { name: "Sukhna Lake, Chandigarh", state: "Punjab", category: "heritage", description: "Man-made lake with boating and walking tracks. Popular spot for morning walks and evening relaxation.", bestTime: "September to March" },
  { name: "Qila Mubarak, Patiala", state: "Punjab", category: "historical", description: "Historic fort complex with palaces and museums. Showcases royal heritage of Patiala.", bestTime: "October to March" },
  { name: "Anandpur Sahib", state: "Punjab", category: "temples", description: "Sacred Sikh city where Khalsa was founded. Important pilgrimage site with historical gurdwaras.", bestTime: "October to March" },
  { name: "Harike Wetland", state: "Punjab", category: "wildlife", description: "Largest wetland in northern India, bird sanctuary. Home to migratory birds and rich biodiversity.", bestTime: "November to March" },
  { name: "Virasat-e-Khalsa, Anandpur Sahib", state: "Punjab", category: "heritage", description: "Museum showcasing Sikh culture and history. Modern architecture with interactive exhibits.", bestTime: "October to March" },
  { name: "Gobindgarh Fort, Amritsar", state: "Punjab", category: "historical", description: "Historic fort now open to public. Offers cultural shows and museums depicting Punjab's history.", bestTime: "October to March" },
  { name: "Bharatpur Bird Sanctuary, Ludhiana", state: "Punjab", category: "wildlife", description: "Urban bird sanctuary with diverse species. Peaceful spot for birdwatching and nature walks.", bestTime: "November to March" },
  { name: "Ranjit Sagar Dam, Pathankot", state: "Punjab", category: "heritage", description: "Large reservoir with scenic surroundings. Popular for picnics and water sports.", bestTime: "October to March" },
  { name: "Durgiana Temple, Amritsar", state: "Punjab", category: "temples", description: "Hindu temple with architecture similar to Golden Temple. Dedicated to Goddess Durga.", bestTime: "October to March" },
  { name: "Bathinda Fort", state: "Punjab", category: "historical", description: "Ancient fort with historical significance. Believed to be one of the oldest forts in India.", bestTime: "October to March" },
  { name: "Kapurthala", state: "Punjab", category: "heritage", description: "City known as 'Paris of Punjab'. Features French architecture and Jagatjit Palace.", bestTime: "October to March" },

  // Continue with more states...
  // Rajasthan highlights
  { name: "Hawa Mahal, Jaipur", state: "Rajasthan", category: "heritage", description: "Palace of Winds with 953 windows. Iconic pink sandstone structure with intricate latticework.", bestTime: "October to March" },
  { name: "Amer Fort, Jaipur", state: "Rajasthan", category: "heritage", description: "Majestic fort with Sheesh Mahal and elephant rides. UNESCO World Heritage Site.", bestTime: "October to March" },
  { name: "City Palace, Udaipur", state: "Rajasthan", category: "heritage", description: "Royal palace complex on Lake Pichola. Features museums, courtyards, and stunning architecture.", bestTime: "October to March" },
  { name: "Lake Pichola, Udaipur", state: "Rajasthan", category: "heritage", description: "Artificial lake with island palaces. Boat rides offer views of City Palace and Lake Palace.", bestTime: "October to March" },
  { name: "Mehrangarh Fort, Jodhpur", state: "Rajasthan", category: "heritage", description: "One of India's largest forts with museums. Offers panoramic views of Blue City.", bestTime: "October to March" },
  { name: "Jaisalmer Fort", state: "Rajasthan", category: "heritage", description: "Living fort with shops and hotels. Golden sandstone structure in Thar Desert.", bestTime: "November to February" },
  { name: "Sam Sand Dunes, Jaisalmer", state: "Rajasthan", category: "heritage", description: "Desert experience with camel safaris and cultural programs. Stunning sunset views.", bestTime: "November to February" },
  { name: "Mount Abu", state: "Rajasthan", category: "mountains", description: "Only hill station in Rajasthan with Dilwara Temples. Offers cool climate and scenic beauty.", bestTime: "October to March" },
  { name: "Pushkar", state: "Rajasthan", category: "temples", description: "Sacred town with Brahma Temple and holy lake. Famous for camel fair in November.", bestTime: "October to March" },
  { name: "Ranthambore National Park", state: "Rajasthan", category: "wildlife", description: "Tiger reserve with historical fort ruins. Best place for tiger sightings in India.", bestTime: "October to April" },
  { name: "Chittorgarh Fort", state: "Rajasthan", category: "historical", description: "Largest fort in India with tales of Rajput valor. UNESCO World Heritage Site.", bestTime: "October to March" },
  { name: "Jantar Mantar, Jaipur", state: "Rajasthan", category: "heritage", description: "Astronomical observatory with 19 instruments. UNESCO World Heritage Site showcasing ancient astronomy.", bestTime: "October to March" },
  { name: "Nahargarh Fort, Jaipur", state: "Rajasthan", category: "heritage", description: "Fort offering panoramic views of Jaipur. Popular for sunset views and trekking.", bestTime: "October to March" },
  { name: "Kumbhalgarh Fort", state: "Rajasthan", category: "heritage", description: "Fort with second longest wall after Great Wall of China. Birthplace of Maharana Pratap.", bestTime: "October to March" },
  { name: "Bikaner", state: "Rajasthan", category: "heritage", description: "Desert city with Junagarh Fort and camel breeding farm. Famous for sweets and snacks.", bestTime: "October to March" },
];
