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
  { name: "Nubra Valley", state: "Jammu and Kashmir", category: "mountains", description: "Cold desert with sand dunes, Bactrian camels, and Buddhist monasteries. Accessible via Khardung La pass.", bestTime: "May to September" },
  { name: "Pangong Lake", state: "Jammu and Kashmir", category: "mountains", description: "Stunning high-altitude lake with changing colors. Extends from India to Tibet.", bestTime: "May to September" },

  // Himachal Pradesh
  { name: "Shimla", state: "Himachal Pradesh", category: "mountains", description: "Former summer capital of British India. Colonial architecture, Mall Road, and scenic views.", bestTime: "March to June, December to February" },
  { name: "Manali", state: "Himachal Pradesh", category: "mountains", description: "Adventure paradise with skiing, paragliding, and trekking. Gateway to Rohtang Pass and Solang Valley.", bestTime: "October to June" },
  { name: "Dharamshala", state: "Himachal Pradesh", category: "mountains", description: "Home to Dalai Lama and Tibetan government-in-exile. Known for McLeod Ganj and Buddhist culture.", bestTime: "March to June, September to November" },
  { name: "Spiti Valley", state: "Himachal Pradesh", category: "mountains", description: "High-altitude cold desert with ancient monasteries. Known for stark beauty and Buddhist culture.", bestTime: "May to October" },
  { name: "Dalhousie", state: "Himachal Pradesh", category: "mountains", description: "Colonial-era hill station with Victorian architecture. Offers views of Dhauladhar range.", bestTime: "March to June, September to November" },
  { name: "Khajjiar", state: "Himachal Pradesh", category: "mountains", description: "'Mini Switzerland of India' with lush meadows and dense forests. Famous for its scenic beauty.", bestTime: "March to June, September to November" },
  { name: "Bir Billing", state: "Himachal Pradesh", category: "mountains", description: "Paragliding capital of India. Tibetan colony with monasteries and cafes.", bestTime: "March to June, September to November" },
  { name: "Rohtang Pass", state: "Himachal Pradesh", category: "mountains", description: "High mountain pass with snow activities. Gateway to Lahaul and Spiti valleys.", bestTime: "May to October" },

  // Punjab
  { name: "Golden Temple, Amritsar", state: "Punjab", category: "temples", description: "Holiest shrine of Sikhism with golden architecture. Known for langar (community kitchen) serving thousands daily.", bestTime: "October to March" },
  { name: "Jallianwala Bagh, Amritsar", state: "Punjab", category: "historical", description: "Memorial of tragic 1919 massacre. Important national monument with historical significance.", bestTime: "October to March" },
  { name: "Wagah Border, Amritsar", state: "Punjab", category: "historical", description: "India-Pakistan border known for daily flag-lowering ceremony. Patriotic atmosphere and cultural experience.", bestTime: "October to March" },
  { name: "Rock Garden, Chandigarh", state: "Punjab", category: "heritage", description: "Sculpture garden made from industrial and urban waste. Created by Nek Chand, showcasing creative art.", bestTime: "September to March" },
  { name: "Sukhna Lake, Chandigarh", state: "Punjab", category: "heritage", description: "Man-made lake with boating and walking tracks. Popular spot for morning walks and evening relaxation.", bestTime: "September to March" },
  { name: "Anandpur Sahib", state: "Punjab", category: "temples", description: "Sacred Sikh city where Khalsa was founded. Important pilgrimage site with historical gurdwaras.", bestTime: "October to March" },

  // Rajasthan
  { name: "Hawa Mahal, Jaipur", state: "Rajasthan", category: "heritage", description: "Palace of Winds with 953 windows. Iconic pink sandstone structure with intricate latticework.", bestTime: "October to March" },
  { name: "Amer Fort, Jaipur", state: "Rajasthan", category: "heritage", description: "Majestic fort with Sheesh Mahal and elephant rides. UNESCO World Heritage Site.", bestTime: "October to March" },
  { name: "City Palace, Udaipur", state: "Rajasthan", category: "heritage", description: "Royal palace complex on Lake Pichola. Features museums, courtyards, and stunning architecture.", bestTime: "October to March" },
  { name: "Lake Pichola, Udaipur", state: "Rajasthan", category: "heritage", description: "Artificial lake with island palaces. Boat rides offer views of City Palace and Lake Palace.", bestTime: "October to March" },
  { name: "Mehrangarh Fort, Jodhpur", state: "Rajasthan", category: "heritage", description: "One of India's largest forts with museums. Offers panoramic views of Blue City.", bestTime: "October to March" },
  { name: "Jaisalmer Fort", state: "Rajasthan", category: "heritage", description: "Living fort with shops and hotels. Golden sandstone structure in Thar Desert.", bestTime: "November to February" },
  { name: "Mount Abu", state: "Rajasthan", category: "mountains", description: "Only hill station in Rajasthan with Dilwara Temples. Offers cool climate and scenic beauty.", bestTime: "October to March" },
  { name: "Pushkar", state: "Rajasthan", category: "temples", description: "Sacred town with Brahma Temple and holy lake. Famous for camel fair in November.", bestTime: "October to March" },
  { name: "Ranthambore National Park", state: "Rajasthan", category: "wildlife", description: "Tiger reserve with historical fort ruins. Best place for tiger sightings in India.", bestTime: "October to April" },

  // Uttarakhand
  { name: "Rishikesh", state: "Uttarakhand", category: "temples", description: "Yoga capital with Laxman Jhula and Ganga Aarti. Adventure sports hub for white water rafting.", bestTime: "September to November, March to May" },
  { name: "Haridwar", state: "Uttarakhand", category: "temples", description: "Holy city where Ganga enters plains. Famous for Har Ki Pauri and Kumbh Mela.", bestTime: "October to February" },
  { name: "Nainital", state: "Uttarakhand", category: "mountains", description: "Lake town with Naini Lake and Snow View Point. Popular hill station in Kumaon.", bestTime: "March to June, September to November" },
  { name: "Mussoorie", state: "Uttarakhand", category: "mountains", description: "Queen of hills with Kempty Falls and Mall Road. Colonial charm with mountain views.", bestTime: "April to June, September to November" },
  { name: "Auli", state: "Uttarakhand", category: "mountains", description: "Premier skiing destination with cable car. Stunning views of Nanda Devi.", bestTime: "December to February (skiing), April to November (sightseeing)" },
  { name: "Valley of Flowers", state: "Uttarakhand", category: "mountains", description: "UNESCO site with alpine flowers. Trekking paradise in monsoon.", bestTime: "July to September" },
  { name: "Kedarnath", state: "Uttarakhand", category: "temples", description: "One of Char Dham temples dedicated to Lord Shiva. High-altitude pilgrimage site.", bestTime: "May to June, September to October" },

  // Uttar Pradesh
  { name: "Taj Mahal, Agra", state: "Uttar Pradesh", category: "heritage", description: "One of Seven Wonders, white marble mausoleum. Symbol of eternal love built by Shah Jahan.", bestTime: "October to March" },
  { name: "Agra Fort", state: "Uttar Pradesh", category: "heritage", description: "UNESCO World Heritage Mughal fort. Red sandstone fortress with palaces and mosques.", bestTime: "October to March" },
  { name: "Varanasi Ghats", state: "Uttar Pradesh", category: "temples", description: "Oldest living city with Dashashwamedh Ghat. Sacred city on banks of Ganges with evening aarti.", bestTime: "October to March" },
  { name: "Fatehpur Sikri", state: "Uttar Pradesh", category: "heritage", description: "Abandoned Mughal city near Agra. Red sandstone architecture, UNESCO World Heritage Site.", bestTime: "October to March" },
  { name: "Mathura and Vrindavan", state: "Uttar Pradesh", category: "temples", description: "Birthplace of Lord Krishna. Holy cities with temples and spiritual significance.", bestTime: "October to March" },
  { name: "Ayodhya", state: "Uttar Pradesh", category: "temples", description: "Birthplace of Lord Rama. Sacred city with temples and religious significance.", bestTime: "October to March" },

  // Madhya Pradesh
  { name: "Khajuraho Temples", state: "Madhya Pradesh", category: "heritage", description: "UNESCO site with intricate erotic sculptures. Chandela dynasty temples showcasing ancient art.", bestTime: "October to February" },
  { name: "Orchha", state: "Madhya Pradesh", category: "heritage", description: "Medieval fort complex with Jahangir Mahal. Historic town with palaces and temples.", bestTime: "October to March" },
  { name: "Sanchi Stupa", state: "Madhya Pradesh", category: "heritage", description: "UNESCO Buddhist monument built by Ashoka. Ancient stupas and monasteries.", bestTime: "October to March" },
  { name: "Bandhavgarh National Park", state: "Madhya Pradesh", category: "wildlife", description: "Tiger reserve with highest density of tigers. Ancient fort ruins within park.", bestTime: "October to June" },
  { name: "Kanha National Park", state: "Madhya Pradesh", category: "wildlife", description: "Inspiration for Jungle Book. Rich biodiversity with tigers and barasingha.", bestTime: "October to June" },

  // Gujarat
  { name: "Rann of Kutch", state: "Gujarat", category: "heritage", description: "White salt desert with Rann Utsav festival. Unique landscape with cultural experiences.", bestTime: "November to February" },
  { name: "Gir National Park", state: "Gujarat", category: "wildlife", description: "Only home of Asiatic lions. Wildlife sanctuary with diverse fauna.", bestTime: "December to March" },
  { name: "Somnath Temple", state: "Gujarat", category: "temples", description: "One of 12 Jyotirlinga temples. Sacred Hindu pilgrimage site by the sea.", bestTime: "October to March" },
  { name: "Dwarka", state: "Gujarat", category: "temples", description: "Ancient city, one of Char Dham. Krishna's kingdom with sacred temples.", bestTime: "October to March" },
  { name: "Sabarmati Ashram, Ahmedabad", state: "Gujarat", category: "historical", description: "Gandhi's residence and base. Historical site promoting peace and non-violence.", bestTime: "October to March" },

  // Maharashtra
  { name: "Gateway of India, Mumbai", state: "Maharashtra", category: "heritage", description: "Iconic arch monument overlooking Arabian Sea. Symbol of Mumbai built during British Raj.", bestTime: "November to February" },
  { name: "Ajanta Caves", state: "Maharashtra", category: "heritage", description: "UNESCO Buddhist rock-cut caves with paintings. Ancient monastery caves from 2nd century BCE.", bestTime: "November to March" },
  { name: "Ellora Caves", state: "Maharashtra", category: "heritage", description: "UNESCO rock-cut temples of three religions. Kailasa temple is architectural marvel.", bestTime: "November to March" },
  { name: "Lonavala", state: "Maharashtra", category: "mountains", description: "Hill station with Bhushi Dam and Tiger's Leap. Monsoon destination with waterfalls.", bestTime: "June to September (monsoon), October to May (pleasant weather)" },
  { name: "Mahabaleshwar", state: "Maharashtra", category: "mountains", description: "Hill station with strawberry farms and viewpoints. Colonial-era summer retreat.", bestTime: "October to June" },

  // Goa
  { name: "Calangute Beach", state: "Goa", category: "beaches", description: "Queen of beaches with water sports. Largest and most popular beach in North Goa.", bestTime: "November to February" },
  { name: "Baga Beach", state: "Goa", category: "beaches", description: "Vibrant beach with nightlife and water activities. Famous for beach shacks and parties.", bestTime: "November to February" },
  { name: "Basilica of Bom Jesus", state: "Goa", category: "heritage", description: "UNESCO World Heritage church with St. Francis Xavier's relics. Portuguese baroque architecture.", bestTime: "November to February" },
  { name: "Dudhsagar Falls", state: "Goa", category: "heritage", description: "Four-tiered waterfall in monsoon. One of India's tallest waterfalls.", bestTime: "June to September" },
  { name: "Old Goa Churches", state: "Goa", category: "heritage", description: "UNESCO churches showcasing Portuguese heritage. Se Cathedral and other historic monuments.", bestTime: "November to February" },

  // Karnataka
  { name: "Mysore Palace", state: "Karnataka", category: "heritage", description: "Royal palace with grand architecture. Illuminated on Sundays with 100,000 bulbs.", bestTime: "October to March" },
  { name: "Hampi", state: "Karnataka", category: "heritage", description: "UNESCO site with Vijayanagara ruins. Ancient temples and boulder-strewn landscape.", bestTime: "October to March" },
  { name: "Coorg", state: "Karnataka", category: "mountains", description: "Coffee plantations with Abbey Falls. Scotland of India with mist-covered hills.", bestTime: "October to March" },
  { name: "Gokarna", state: "Karnataka", category: "beaches", description: "Peaceful beaches with temples. Less crowded alternative to Goa.", bestTime: "October to March" },
  { name: "Bangalore Palace", state: "Karnataka", category: "heritage", description: "Tudor-style palace with royal artifacts. Inspired by Windsor Castle.", bestTime: "October to March" },

  // Kerala
  { name: "Alleppey Backwaters", state: "Kerala", category: "beaches", description: "Houseboat cruises through canals and lagoons. Venice of the East.", bestTime: "September to March" },
  { name: "Munnar", state: "Kerala", category: "mountains", description: "Tea gardens with Eravikulam National Park. Hill station with rolling hills.", bestTime: "September to March" },
  { name: "Wayanad", state: "Kerala", category: "mountains", description: "Spice plantations with waterfalls and caves. Green paradise with wildlife.", bestTime: "October to May" },
  { name: "Kovalam Beach", state: "Kerala", category: "beaches", description: "Crescent-shaped beach with lighthouse. Popular beach destination.", bestTime: "September to March" },
  { name: "Thekkady", state: "Kerala", category: "wildlife", description: "Periyar Wildlife Sanctuary with boat safaris. Spice plantations and elephant rides.", bestTime: "September to March" },

  // Tamil Nadu
  { name: "Mahabalipuram", state: "Tamil Nadu", category: "heritage", description: "UNESCO site with Shore Temple and rock sculptures. Ancient port city with Pallava architecture.", bestTime: "November to February" },
  { name: "Meenakshi Temple, Madurai", state: "Tamil Nadu", category: "temples", description: "Magnificent temple with colorful gopurams. Ancient Dravidian architecture.", bestTime: "October to March" },
  { name: "Ooty", state: "Tamil Nadu", category: "mountains", description: "Queen of hill stations with botanical gardens. Nilgiri Mountain Railway, UNESCO heritage.", bestTime: "April to June, September to November" },
  { name: "Kodaikanal", state: "Tamil Nadu", category: "mountains", description: "Princess of hill stations with Coaker's Walk. Star-shaped lake and scenic viewpoints.", bestTime: "April to June, September to October" },
  { name: "Rameswaram", state: "Tamil Nadu", category: "temples", description: "Sacred island with Ramanathaswamy Temple. One of Char Dham pilgrimage sites.", bestTime: "October to March" },

  // Andhra Pradesh
  { name: "Tirupati Temple", state: "Andhra Pradesh", category: "temples", description: "Richest temple, dedicated to Lord Venkateswara. Most visited pilgrimage site in world.", bestTime: "September to February" },
  { name: "Araku Valley", state: "Andhra Pradesh", category: "mountains", description: "Hill station with coffee plantations and tribal culture. Scenic train journey.", bestTime: "October to March" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", category: "beaches", description: "Port city with beaches and submarine museum. Industrial city with natural beauty.", bestTime: "October to March" },

  // Telangana
  { name: "Charminar, Hyderabad", state: "Telangana", category: "heritage", description: "Iconic monument with four minarets. Symbol of Hyderabad with bustling markets.", bestTime: "October to February" },
  { name: "Golconda Fort, Hyderabad", state: "Telangana", category: "heritage", description: "Historic fort with diamond mines history. Sound and light show depicts history.", bestTime: "October to February" },
  { name: "Ramoji Film City, Hyderabad", state: "Telangana", category: "heritage", description: "World's largest film studio complex. Entertainment destination with film sets.", bestTime: "October to March" },

  // West Bengal
  { name: "Victoria Memorial, Kolkata", state: "West Bengal", category: "heritage", description: "White marble monument dedicated to Queen Victoria. Museum with British Raj artifacts.", bestTime: "October to March" },
  { name: "Darjeeling", state: "West Bengal", category: "mountains", description: "Tea gardens with Tiger Hill sunrise views. Toy train, UNESCO World Heritage.", bestTime: "March to May, September to November" },
  { name: "Sundarbans", state: "West Bengal", category: "wildlife", description: "UNESCO mangrove forest, home to Royal Bengal Tigers. Largest tidal mangrove forest.", bestTime: "September to March" },
  { name: "Kalimpong", state: "West Bengal", category: "mountains", description: "Hill station with Buddhist monasteries and flower nurseries. Panoramic Himalayan views.", bestTime: "March to June, September to November" },

  // Odisha
  { name: "Konark Sun Temple", state: "Odisha", category: "heritage", description: "UNESCO chariot-shaped temple. Ancient sun temple with erotic sculptures.", bestTime: "October to March" },
  { name: "Puri Jagannath Temple", state: "Odisha", category: "temples", description: "One of Char Dham with Rath Yatra festival. Sacred Hindu pilgrimage site.", bestTime: "October to March" },
  { name: "Chilika Lake", state: "Odisha", category: "wildlife", description: "Largest coastal lagoon, bird sanctuary. Migratory birds and Irrawaddy dolphins.", bestTime: "November to February" },

  // Sikkim
  { name: "Gangtok", state: "Sikkim", category: "mountains", description: "Capital with Tsomgo Lake and MG Road. Buddhist monasteries with mountain views.", bestTime: "March to June, September to December" },
  { name: "Nathula Pass", state: "Sikkim", category: "mountains", description: "India-China border pass at 14,140 ft. Historic Silk Route location.", bestTime: "May to October" },
  { name: "Pelling", state: "Sikkim", category: "mountains", description: "Hill station with Kanchenjunga views. Monasteries and waterfalls.", bestTime: "March to June, September to December" },

  // Arunachal Pradesh
  { name: "Tawang", state: "Arunachal Pradesh", category: "mountains", description: "Tawang Monastery at 10,000 ft. Buddhist culture with Sela Pass.", bestTime: "March to October" },
  { name: "Ziro Valley", state: "Arunachal Pradesh", category: "mountains", description: "UNESCO heritage site with Apatani tribe. Rice fields and music festival.", bestTime: "March to October" },

  // Assam
  { name: "Kaziranga National Park", state: "Assam", category: "wildlife", description: "UNESCO site, home to one-horned rhinos. Tiger reserve with diverse wildlife.", bestTime: "November to April" },
  { name: "Kamakhya Temple, Guwahati", state: "Assam", category: "temples", description: "Shakti Peetha temple on Nilachal Hill. Ancient tantric temple.", bestTime: "October to March" },
  { name: "Majuli Island", state: "Assam", category: "heritage", description: "World's largest river island with Vaishnavite culture. Satras (monasteries) and tribal villages.", bestTime: "October to March" },

  // Meghalaya
  { name: "Cherrapunji", state: "Meghalaya", category: "mountains", description: "Wettest place on earth with living root bridges. Nohkalikai Falls and caves.", bestTime: "September to May" },
  { name: "Shillong", state: "Meghalaya", category: "mountains", description: "Scotland of the East with Elephant Falls. Ward's Lake and colonial charm.", bestTime: "March to June, September to November" },
  { name: "Mawsynram", state: "Meghalaya", category: "mountains", description: "Receives highest rainfall, Mawjymbuin Cave. Scenic landscapes.", bestTime: "September to May" },

  // Manipur
  { name: "Loktak Lake", state: "Manipur", category: "heritage", description: "Largest freshwater lake with phumdis (floating islands). Keibul Lamjao National Park.", bestTime: "October to March" },
  { name: "Imphal", state: "Manipur", category: "heritage", description: "Capital with Kangla Fort and war cemeteries. Historical and cultural significance.", bestTime: "October to March" },

  // Mizoram
  { name: "Aizawl", state: "Mizoram", category: "mountains", description: "Capital on ridges with scenic views. Museums and handicraft centers.", bestTime: "October to March" },

  // Nagaland
  { name: "Kohima", state: "Nagaland", category: "heritage", description: "Capital with war cemetery and Hornbill Festival. Naga tribal culture.", bestTime: "October to May" },

  // Tripura
  { name: "Ujjayanta Palace, Agartala", state: "Tripura", category: "heritage", description: "Former royal palace, now state museum. Indo-Saracenic architecture.", bestTime: "October to March" },
  { name: "Neermahal", state: "Tripura", category: "heritage", description: "Water palace in Rudrasagar Lake. Unique blend of Hindu and Mughal architecture.", bestTime: "October to March" },

  // Jharkhand
  { name: "Betla National Park", state: "Jharkhand", category: "wildlife", description: "Tiger reserve with waterfalls and fort ruins. Rich biodiversity.", bestTime: "November to March" },
  { name: "Ranchi", state: "Jharkhand", category: "heritage", description: "City of waterfalls with Hundru and Dassam Falls. Rock Garden and temples.", bestTime: "October to March" },

  // Chhattisgarh
  { name: "Chitrakote Falls", state: "Chhattisgarh", category: "heritage", description: "India's Niagara Falls. Horseshoe-shaped waterfall on Indravati River.", bestTime: "July to October" },
  { name: "Kanger Valley National Park", state: "Chhattisgarh", category: "wildlife", description: "Biosphere reserve with caves and waterfalls. Rich flora and fauna.", bestTime: "October to June" },

  // Bihar
  { name: "Mahabodhi Temple, Bodh Gaya", state: "Bihar", category: "temples", description: "UNESCO site where Buddha attained enlightenment. Sacred Buddhist pilgrimage site.", bestTime: "October to March" },
  { name: "Nalanda University Ruins", state: "Bihar", category: "heritage", description: "UNESCO ancient university ruins. Historic center of learning from 5th century.", bestTime: "October to March" },

  // Andaman and Nicobar Islands
  { name: "Havelock Island", state: "Andaman and Nicobar Islands", category: "beaches", description: "Radhanagar Beach, pristine waters and coral reefs. Scuba diving paradise.", bestTime: "November to May" },
  { name: "Port Blair", state: "Andaman and Nicobar Islands", category: "heritage", description: "Capital with Cellular Jail. Colonial history and war memorials.", bestTime: "November to May" },
  { name: "Neil Island", state: "Andaman and Nicobar Islands", category: "beaches", description: "Quiet island with natural rock formations. Laxmanpur Beach and Bharatpur Beach.", bestTime: "November to May" },

  // Puducherry
  { name: "French Quarter, Pondicherry", state: "Puducherry", category: "heritage", description: "Colonial French architecture with cafes. White Town with colorful buildings.", bestTime: "October to March" },
  { name: "Auroville", state: "Puducherry", category: "heritage", description: "Experimental township with Matrimandir. International community for peace.", bestTime: "October to March" },
];
