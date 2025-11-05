import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";

interface PlaceDetail {
  name: string;
  description: string;
  bestTime: string;
}

const stateData: Record<string, PlaceDetail[]> = {
  "Andhra Pradesh": [
    { "name": "Visakhapatnam", "description": "Beach city known for RK Beach, Kailasagiri Hill Park, and submarine museum. Scenic Bay of Bengal views and heritage landmarks.", "bestTime": "October to March" },
    { "name": "Tirupati", "description": "Renowned pilgrimage center, home to Sri Venkateswara Temple. Famous for laddus and religious fervor.", "bestTime": "September to February" },
    { "name": "Araku Valley", "description": "Hill station with coffee plantations, lush forests, waterfalls, and tribal culture. Popular for Borra Caves.", "bestTime": "October to March" },
    { "name": "Lepakshi", "description": "Historical village famous for Veerabhadra Temple, mural paintings, and the hanging pillar.", "bestTime": "November to February" },
    { "name": "Amaravati", "description": "Ancient Buddhist center, known for Amaravati Stupa, river ghat, and temples.", "bestTime": "October to March" },
    { "name": "Vijayawada", "description": "Kanaka Durga Temple, Prakasam Barrage, Undavalli Caves, and Bhavani Island.", "bestTime": "October to March" },
    { "name": "Horsley Hills", "description": "Picturesque hill station with dense forests, cool climate, and panoramic views.", "bestTime": "March to June" },
    { "name": "Srisailam", "description": "Famous for Mallikarjuna Jyotirlinga Temple, scenic dam, and tiger reserve.", "bestTime": "October to March" },
    { "name": "Nagarjuna Sagar", "description": "Major dam, Buddhist relics, impressive waterfalls, and museum.", "bestTime": "October to March" },
    { "name": "Kondapalli Fort", "description": "Historic fort, famous for Kondapalli dolls and panoramic views.", "bestTime": "October to March" },
    { "name": "Draksharamam", "description": "Panchayatana Shiva Temple of ancient architecture and spirituality.", "bestTime": "October to March" },
    { "name": "Ahobilam", "description": "Sacred site devoted to Lord Narasimha, surrounded by forests.", "bestTime": "October to March" },
    { "name": "Mahanandi", "description": "Famous for natural springs and Shiva temple set in green forests.", "bestTime": "October to February" },
    { "name": "Belum Caves", "description": "Largest cave system in South India, known for unique formations.", "bestTime": "December to March" },
    { "name": "Mantralayam", "description": "Holy town on Tungabhadra River, home of Saint Raghavendra Swamy Mutt.", "bestTime": "October to March" }
  ],
  "Arunachal Pradesh": [
    { "name": "Tawang", "description": "Lively Buddhist town with legendary monastery, snow-capped vistas.", "bestTime": "March to October" },
    { "name": "Ziro", "description": "UNESCO-listed valley with rice fields and Apatani tribal culture.", "bestTime": "March to October" },
    { "name": "Itanagar", "description": "State capital, Ita Fort, Ganga Lake, museums.", "bestTime": "October to April" },
    { "name": "Bomdila", "description": "Hill station and scenic gateway, apple orchards, monasteries.", "bestTime": "April to October" },
    { "name": "Namdapha National Park", "description": "Dense forests, rare wildlife, bird watching.", "bestTime": "October to March" },
    { "name": "Dirang", "description": "Village known for hot springs, Dirang Dzong, and birding.", "bestTime": "March to October" },
    { "name": "Pasighat", "description": "Siang River vistas, rafting, and gateway to eastern Arunachal.", "bestTime": "October to February" },
    { "name": "Mechuka", "description": "Remote valley, Alpine scenery, Buddhist monasteries.", "bestTime": "October to March" },
    { "name": "Roing", "description": "Scenic town, Mayudia Pass, and ancient forts.", "bestTime": "October to February" },
    { "name": "Tezu", "description": "Mishmi tribe culture, Parshuram Kund, and wildlife.", "bestTime": "October to February" },
    { "name": "Bhalukpong", "description": "Border town, orchid sanctuary, rafting, and elephant reserve.", "bestTime": "November to April" },
    { "name": "Daporijo", "description": "Hill town with Subansiri River and tribal experiences.", "bestTime": "September to March" },
    { "name": "Anini", "description": "Pristine landscapes, Mishmi Hills, and closest to Indo-China border.", "bestTime": "October to March" },
    { "name": "Yingkiong", "description": "Adventure gateway, Siang River, hidden tribal villages.", "bestTime": "November to March" },
    { "name": "Changlang", "description": "Lush forests, Miao reserve, and tribal culture.", "bestTime": "November to April" }
  ],
  "Assam": [
    { "name": "Kaziranga National Park", "description": "UNESCO World Heritage Site, famed for one-horned rhinos.", "bestTime": "November to April" },
    { "name": "Guwahati", "description": "Brahmaputra riverfront, Kamakhya Temple, Assam State Museum.", "bestTime": "October to April" },
    { "name": "Majuli", "description": "World’s largest river island, unique monasteries.", "bestTime": "October to March" },
    { "name": "Sivasagar", "description": "Historic capital, Ahom temples, royal palaces.", "bestTime": "October to March" },
    { "name": "Manas National Park", "description": "Tiger reserve, elephant rides, UNESCO biosphere.", "bestTime": "November to April" },
    { "name": "Jorhat", "description": "Tea estates, cultural hub, Tocklai Research Center.", "bestTime": "November to March" },
    { "name": "Tezpur", "description": "Myth-laden gardens, ancient temples on Brahmaputra.", "bestTime": "October to April" },
    { "name": "Haflong", "description": "Hill station, lakes, and bamboo forests.", "bestTime": "October to April" },
    { "name": "Silchar", "description": "Cultural center of Barak Valley, tea gardens.", "bestTime": "October to March" },
    { "name": "Dibrugarh", "description": "Tea capital of India, river cruise base.", "bestTime": "November to March" },
    { "name": "Barpeta", "description": "Satras (Vaishnavite monasteries) and river scenes.", "bestTime": "October to April" },
    { "name": "Goalpara", "description": "Sri Surya Pahar archaeological site, river views.", "bestTime": "October to March" },
    { "name": "Digboi", "description": "Asia’s oldest oil refinery, golf course, WWII cemetery.", "bestTime": "October to March" },
    { "name": "Tinsukia", "description": "Dibru-Saikhowa National Park, railway heritage.", "bestTime": "November to March" },
    { "name": "Umananda Island", "description": "Smallest river island with ancient Shiva temple.", "bestTime": "November to April" }
  ],
  "Bihar": [
    { "name": "Bodh Gaya", "description": "UNESCO Buddha enlightenment site. Mahabodhi Temple.", "bestTime": "October to March" },
    { "name": "Patna", "description": "State capital on Ganga, historical museums, Golghar.", "bestTime": "October to March" },
    { "name": "Nalanda", "description": "Ancient university ruins, UNESCO site.", "bestTime": "October to March" },
    { "name": "Rajgir", "description": "Buddhist and Jain center, Venuvana, hot springs.", "bestTime": "October to March" },
    { "name": "Vaishali", "description": "Ashokan Pillar, ancient relics, birthplace of Mahavira.", "bestTime": "October to March" },
    { "name": "Gaya", "description": "Vishnupad Temple, pilgrimage hub, Falgu River.", "bestTime": "October to March" },
    { "name": "Pawapuri", "description": "Jal Mandir, Jain spiritual center, tranquil pond.", "bestTime": "October to March" },
    { "name": "Kesaria", "description": "Tallest Buddhist stupa, archaeological significance.", "bestTime": "October to March" },
    { "name": "Barabar Caves", "description": "Oldest rock-cut caves of India, Mauryan heritage.", "bestTime": "October to March" },
    { "name": "Sasaram", "description": "Tomb of Sher Shah Suri, historic fort.", "bestTime": "October to March" },
    { "name": "Buxar", "description": "War memorials and ancient forts.", "bestTime": "October to March" },
    { "name": "Sitamarhi", "description": "Birthplace of Sita, religious significance.", "bestTime": "October to March" },
    { "name": "Munger", "description": "Ancient fort city, Yoga and gun factory.", "bestTime": "October to March" },
    { "name": "Bettiah", "description": "Rich colonial heritage and churches.", "bestTime": "October to March" },
    { "name": "Lakhisarai", "description": "Historic sites, old temples, forts.", "bestTime": "October to March" }
  ],
  "Chhattisgarh": [
    { "name": "Chitrakote Falls", "description": "'Niagara of India', stunning waterfall on Indravati.", "bestTime": "July to October" },
    { "name": "Jagdalpur", "description": "Gateway to natural wonders, tribal culture.", "bestTime": "October to March" },
    { "name": "Barnawapara Wildlife Sanctuary", "description": "Forests, leopards, bison, bird species.", "bestTime": "November to June" },
    { "name": "Sirpur", "description": "Buddhist and archaeological heritage site.", "bestTime": "November to March" },
    { "name": "Kanger Valley National Park", "description": "Limestone caves, waterfalls, lush forests.", "bestTime": "November to June" },
    { "name": "Bhoramdeo", "description": "‘Khajuraho of Chhattisgarh’ temple complex.", "bestTime": "October to March" },
    { "name": "Tiratgarh Falls", "description": "Multi-tiered waterfall and picnic spot.", "bestTime": "July to October" },
    { "name": "Ambikapur", "description": "Ancient temples, tribal art, serene climate.", "bestTime": "October to March" },
    { "name": "Dongargarh", "description": "Maa Bamleshwari hilltop temple.", "bestTime": "October to March" },
    { "name": "Mainpat", "description": "Mini-Tibet, Tibetan monasteries, and landscapes.", "bestTime": "October to March" },
    { "name": "Rajim", "description": "Pilgrimage town on Mahanadi, hosts Kumbh Mela.", "bestTime": "October to March" },
    { "name": "Danteshwari Temple, Dantewada", "description": "Sacred Shakti Peetha, forested surroundings.", "bestTime": "October to March" },
    { "name": "Ratanpur", "description": "Ancient forts and Mahamaya Temple.", "bestTime": "October to March" },
    { "name": "Kudargarh", "description": "Temple on hilltop with panoramic views.", "bestTime": "October to March" },
    { "name": "Malhar", "description": "Archaeological site of ancient temples.", "bestTime": "October to March" }
  ],
  "Goa": [
    { "name": "Panaji", "description": "Capital city known for colonial architecture, churches, and Mandovi River promenade.", "bestTime": "November to February" },
    { "name": "Baga Beach", "description": "Popular beach with vibrant nightlife, water sports, and shacks.", "bestTime": "November to March" },
    { "name": "Anjuna Beach", "description": "Famous for flea market, trance parties, and scenic coastline.", "bestTime": "November to March" },
    { "name": "Vasco da Gama", "description": "Port town with naval base, museums, and cultural sites.", "bestTime": "November to March" },
    { "name": "Chapora Fort", "description": "Historic fort overlooking Vagator Beach, known for sunset views.", "bestTime": "November to February" },
    { "name": "Calangute Beach", "description": "Bustling beach famous for water sports and shopping.", "bestTime": "November to March" },
    { "name": "Dudhsagar Waterfalls", "description": "Spectacular four-tiered waterfall on Mandovi River.", "bestTime": "October to March" },
    { "name": "Old Goa", "description": "UNESCO site with grand churches like Basilica of Bom Jesus.", "bestTime": "November to February" },
    { "name": "Arambol Beach", "description": "Peaceful beach known for yoga retreats and natural springs.", "bestTime": "November to March" },
    { "name": "Palolem Beach", "description": "Scenic crescent-shaped beach with calm waters.", "bestTime": "November to March" },
    { "name": "Mangeshi Temple", "description": "Ancient Hindu temple dedicated to Lord Shiva.", "bestTime": "November to February" },
    { "name": "Tambdi Surla Temple", "description": "12th-century temple nestled in Bhagwan Mahavir Wildlife Sanctuary.", "bestTime": "October to March" },
    { "name": "Mandrem Beach", "description": "Tranquil beach with palm groves and less touristy atmosphere.", "bestTime": "November to March" },
    { "name": "Cotigao Wildlife Sanctuary", "description": "Dense forests rich in biodiversity and trekking trails.", "bestTime": "October to March" },
    { "name": "Betalbatim Beach", "description": "Quiet beach ideal for relaxation and swimming.", "bestTime": "November to March" }
  ],
  "Haryana": [
    { "name": "Kurukshetra", "description": "Sacred land of Mahabharata with Jyotisar and Brahma Sarovar.", "bestTime": "October to March" },
    { "name": "Panipat", "description": "Historic site of three battles, with museum and monuments.", "bestTime": "October to March" },
    { "name": "Sultanpur Bird Sanctuary", "description": "Popular birdwatching reserve with migratory species.", "bestTime": "October to March" },
    { "name": "Badkhal Lake", "description": "Man-made lake popular for picnics and boating.", "bestTime": "October to March" },
    { "name": "Pinjore Gardens", "description": "Mughal-style terraced garden with fountains and palaces.", "bestTime": "October to March" },
    { "name": "Morni Hills", "description": "Hill station with trekking trails and natural beauty.", "bestTime": "September to February" },
    { "name": "Ferozepur Jhirka", "description": "Historical town with forts and old architecture.", "bestTime": "October to March" },
    { "name": "Heritage Transport Museum", "description": "Showcase of vintage vehicles and transport history.", "bestTime": "October to March" },
    { "name": "Tilyar Lake and Zoo", "description": "Recreational spot with lake, zoo, and picnic areas.", "bestTime": "October to March" },
    { "name": "Shrimati Saraswati Temple", "description": "Ancient Hindu temple dedicated to Goddess Saraswati.", "bestTime": "October to March" },
    { "name": "Rakhigarhi", "description": "One of the largest Indus Valley Civilization sites.", "bestTime": "October to March" },
    { "name": "Fazilka Wildlife Sanctuary", "description": "Protected area with diverse flora and fauna.", "bestTime": "October to March" },
    { "name": "Damdama Lake", "description": "Natural lake with adventure sports and boating.", "bestTime": "October to March" },
    { "name": "Surajkund", "description": "Historic reservoir with annual crafts fair.", "bestTime": "February to March" },
    { "name": "Mata Mansa Devi Temple", "description": "Popular Hindu pilgrimage temple.", "bestTime": "October to March" }
  ],
  "Himachal Pradesh": [
    { "name": "Shimla", "description": "Capital city with colonial architecture, Mall Road, and ridge.", "bestTime": "March to June, September to December" },
    { "name": "Manali", "description": "Hill station with Rohtang Pass, Solang Valley, and adventure sports.", "bestTime": "March to June, September to December" },
    { "name": "Dharamshala", "description": "Home of Dalai Lama, Tibetan culture, and serene environment.", "bestTime": "March to June, September to December" },
    { "name": "Kullu", "description": "Famous for temples, river rafting, and Dussehra festival.", "bestTime": "March to June, September to November" },
    { "name": "Spiti Valley", "description": "Remote desert mountain valley with monasteries and trekking.", "bestTime": "June to September" },
    { "name": "Kasauli", "description": "Quiet hill town with colonial charm and scenic walks.", "bestTime": "March to June, September to December" },
    { "name": "Chamba", "description": "Historic town with temples, palaces, and traditional fairs.", "bestTime": "March to June, September to November" },
    { "name": "Bir Billing", "description": "Paragliding capital of India and trekking destination.", "bestTime": "March to June, September to November" },
    { "name": "Palampur", "description": "Tea gardens and scenic views, known as ‘Tea Capital of Northwest India’.", "bestTime": "March to June, September to November" },
    { "name": "Bilaspur", "description": "Known for Gobind Sagar Lake and historical temples.", "bestTime": "March to June, September to November" },
    { "name": "Kangra", "description": "Known for Kangra Fort and art museum.", "bestTime": "March to June, September to November" },
    { "name": "Mandi", "description": "City with a confluence of rivers and temples.", "bestTime": "March to June, September to November" },
    { "name": "Nalagarh", "description": "Fort town with palace and museum.", "bestTime": "March to June, September to November" },
    { "name": "Dalhousie", "description": "Hill station with Victorian architecture and trekking trails.", "bestTime": "March to June, September to November" },
    { "name": "Kullu Valley", "description": "Picturesque valley with rivers, orchards, and temples.", "bestTime": "March to June, September to November" }
  ],
  "Jharkhand": [
    { "name": "Ranchi", "description": "Capital city known for waterfalls, parks, and temples.", "bestTime": "October to March" },
    { "name": "Jamshedpur", "description": "Industrial city with parks and Tata Steel Museum.", "bestTime": "October to March" },
    { "name": "Netarhat", "description": "Hill station with panoramic sunrises and sunsets.", "bestTime": "October to March" },
    { "name": "Deoghar", "description": "Famous for Baidyanath Temple, a major Hindu pilgrimage site.", "bestTime": "October to March" },
    { "name": "Betla National Park", "description": "Wildlife sanctuary with tigers, elephants, and archaeological sites.", "bestTime": "October to March" },
    { "name": "Hazaribagh", "description": "Town with wildlife sanctuary and waterfalls.", "bestTime": "October to March" },
    { "name": "Simdega", "description": "Natural beauty with hills and waterfalls.", "bestTime": "October to March" },
    { "name": "McCluskieganj", "description": "British-era hill station known for scenic beauty.", "bestTime": "October to March" },
    { "name": "Parasnath Hill", "description": "Important Jain pilgrimage site and trekking destination.", "bestTime": "October to March" },
    { "name": "Tagore Hill", "description": "Hill famous for Tagore’s residence and views of Ranchi.", "bestTime": "October to March" },
    { "name": "Rajrappa", "description": "Temple complex with confluence of rivers.", "bestTime": "October to March" },
    { "name": "Dimna Lake", "description": "Artificial lake popular for picnics and water sports.", "bestTime": "October to March" },
    { "name": "Lodh Falls", "description": "Highest waterfall in Jharkhand, surrounded by forests.", "bestTime": "October to March" },
    { "name": "Jonha Falls", "description": "Scenic waterfall and picnic spot.", "bestTime": "October to March" },
    { "name": "Dalma Wildlife Sanctuary", "description": "Rich in flora and fauna with trekking options.", "bestTime": "October to March" }
  ],
  "Karnataka": [
    { "name": "Bengaluru", "description": "Capital city known for gardens, palaces, and vibrant culture.", "bestTime": "October to February" },
    { "name": "Mysuru", "description": "Famous for Mysore Palace, Dasara festival, and Chamundi Hills.", "bestTime": "October to March" },
    { "name": "Coorg", "description": "Hill station known for coffee plantations, waterfalls, and wildlife.", "bestTime": "October to March" },
    { "name": "Hampi", "description": "UNESCO World Heritage site with ancient Vijayanagara ruins.", "bestTime": "October to February" },
    { "name": "Chikmagalur", "description": "Coffee hill station with trekking and scenic nature.", "bestTime": "October to March" },
    { "name": "Gokarna", "description": "Coastal town famous for beaches and temples.", "bestTime": "October to March" },
    { "name": "Badami", "description": "Historic town with rock-cut cave temples.", "bestTime": "October to March" },
    { "name": "Kabini", "description": "Wildlife sanctuary known for tiger safaris and birdwatching.", "bestTime": "October to May" },
    { "name": "Bandipur National Park", "description": "Notable tiger reserve with diverse wildlife.", "bestTime": "October to May" },
    { "name": "Sakleshpur", "description": "Scenic hill station with trekking and spice plantations.", "bestTime": "October to March" },
    { "name": "Shravanabelagola", "description": "Famous Jain pilgrimage site with giant gomateshwara statue.", "bestTime": "October to March" },
    { "name": "Nandi Hills", "description": "Hill station known for sunrise views and temples.", "bestTime": "October to March" },
    { "name": "Kabini River Lodge", "description": "Popular for river safaris and wildlife experiences.", "bestTime": "October to May" },
    { "name": "Murudeshwar", "description": "Known for the massive Shiva statue and beach.", "bestTime": "October to March" },
    { "name": "Kemmanagundi", "description": "Hill station known for gardens, waterfalls, and trekking.", "bestTime": "October to March" }
  ],
  "Kerala": [
    { "name": "Kochi", "description": "Historic port city with colonial architecture, Jewish Synagogue, and Fort Kochi.", "bestTime": "September to March" },
    { "name": "Munnar", "description": "Hill station known for tea plantations, Eravikulam National Park, and scenic valleys.", "bestTime": "September to March" },
    { "name": "Alleppey", "description": "Famous for backwaters, houseboat cruises, and palm-lined canals.", "bestTime": "September to March" },
    { "name": "Thiruvananthapuram", "description": "Capital city with Padmanabhaswamy Temple and nearby Kovalam Beach.", "bestTime": "October to March" },
    { "name": "Wayanad", "description": "Hill district with wildlife sanctuaries, waterfalls, and ancient caves.", "bestTime": "October to May" },
    { "name": "Kumarakom", "description": "Backwater village known for bird sanctuary and luxury resorts.", "bestTime": "September to February" },
    { "name": "Bekal", "description": "Famous for Bekal Fort and sandy beaches.", "bestTime": "October to March" },
    { "name": "Varkala", "description": "Coastal town with cliffs, Papanasam beach, and temples.", "bestTime": "October to March" },
    { "name": "Thekkady", "description": "Periyar Tiger Reserve, spice plantations, and boat cruises.", "bestTime": "September to March" },
    { "name": "Kollam", "description": "Gateway to the backwaters with Ashtamudi Lake and beaches.", "bestTime": "September to March" },
    { "name": "Thrissur", "description": "Cultural capital known for festivals and temples.", "bestTime": "October to March" },
    { "name": "Kannur", "description": "Beaches, Theyyam dance, and historic forts.", "bestTime": "October to March" },
    { "name": "Kozhikode", "description": "Historical city with beaches, cuisine, and cultural heritage.", "bestTime": "October to March" },
    { "name": "Athirappilly", "description": "Famous waterfall and lush surrounding forests.", "bestTime": "September to February" },
    { "name": "Guruvayur", "description": "Prominent pilgrimage town with famous Guruvayur Temple.", "bestTime": "October to March" }
  ],
  "Madhya Pradesh": [
    { "name": "Khajuraho", "description": "UNESCO World Heritage site with erotic temples.", "bestTime": "October to March" },
    { "name": "Kanha National Park", "description": "Tiger reserve with rich wildlife and scenic landscapes.", "bestTime": "October to June" },
    { "name": "Bandhavgarh National Park", "description": "Tiger reserve and archaeological ruins.", "bestTime": "October to June" },
    { "name": "Pachmarhi", "description": "Hill station known as 'Satpura ki Rani', waterfalls, and caves.", "bestTime": "October to March" },
    { "name": "Sanchi", "description": "Ancient Buddhist stupas and archaeological site.", "bestTime": "October to March" },
    { "name": "Gwalior", "description": "Historic city with majestic fort and palaces.", "bestTime": "October to March" },
    { "name": "Ujjain", "description": "One of the holiest cities for Hindus with Mahakaleshwar Temple.", "bestTime": "October to March" },
    { "name": "Bhopal", "description": "Capital known for lakes, museums, and heritage sites.", "bestTime": "October to March" },
    { "name": "Orchha", "description": "Town with historic palaces, temples, and cenotaphs.", "bestTime": "October to March" },
    { "name": "Panna National Park", "description": "Tiger reserve with riverine forests and waterfalls.", "bestTime": "October to June" },
    { "name": "Rajgarh", "description": "Historic sites and traditional crafts.", "bestTime": "October to March" },
    { "name": "Chanderi", "description": "Famous for textiles, forts, and temples.", "bestTime": "October to March" },
    { "name": "Mandu", "description": "Ruined city known for Afghan architecture and palaces.", "bestTime": "October to March" },
    { "name": "Bhimbetka", "description": "Prehistoric rock shelters and cave paintings.", "bestTime": "October to March" },
    { "name": "Maheshwar", "description": "Historic town on Narmada River, handloom weaving center.", "bestTime": "October to March" }
  ],
  "Maharashtra": [
    { "name": "Mumbai", "description": "Financial capital with Gateway of India, Marine Drive, and vibrant culture.", "bestTime": "November to February" },
    { "name": "Pune", "description": "Cultural and historical city with forts and museums.", "bestTime": "October to March" },
    { "name": "Aurangabad", "description": "Gateway to Ajanta and Ellora Caves.", "bestTime": "October to March" },
    { "name": "Lonavala", "description": "Hill station with waterfalls, caves, and scenic views.", "bestTime": "July to February" },
    { "name": "Mahabaleshwar", "description": "Hill station famous for strawberries and viewpoints.", "bestTime": "October to June" },
    { "name": "Nashik", "description": "Pilgrimage city famous for Kumbh Mela, vineyards, and temples.", "bestTime": "October to March" },
    { "name": "Tadoba Andhari Tiger Reserve", "description": "Tiger reserve and wildlife sanctuary.", "bestTime": "October to June" },
    { "name": "Kolhapur", "description": "Historic city with Mahalaxmi Temple and rich cuisine.", "bestTime": "October to March" },
    { "name": "Shirdi", "description": "Famous pilgrimage site of Sai Baba.", "bestTime": "October to March" },
    { "name": "Ratnagiri", "description": "Coastal city with beaches and historic forts.", "bestTime": "November to March" },
    { "name": "Chhatrapati Shivaji Maharaj Terminus", "description": "UNESCO heritage railway station in Mumbai.", "bestTime": "November to February" },
    { "name": "Elephanta Caves", "description": "Historic rock-cut cave temples on Elephanta Island.", "bestTime": "November to March" },
    { "name": "Matheran", "description": "Hill station without vehicles, known for walking trails and viewpoints.", "bestTime": "October to May" },
    { "name": "Sindhudurg Fort", "description": "Maratha sea fort located on an island.", "bestTime": "October to March" },
    { "name": "Bhandardara", "description": "Hill station with lakes, waterfalls, and forts.", "bestTime": "October to March" }
  ],
  "Manipur": [
    { "name": "Imphal", "description": "Capital city with Kangla Fort and historic sites.", "bestTime": "October to March" },
    { "name": "Loktak Lake", "description": "Largest freshwater lake with floating phumdis.", "bestTime": "October to March" },
    { "name": "Khongjom", "description": "Historic site of Anglo-Manipur War memorial.", "bestTime": "October to March" },
    { "name": "Ukhrul", "description": "Hill town known for natural beauty and Shirui Lily.", "bestTime": "October to March" },
    { "name": "Moreh", "description": "Border town on India-Myanmar trade route.", "bestTime": "October to March" },
    { "name": "Andro", "description": "Ethnological museum showcasing Manipur’s culture.", "bestTime": "October to March" },
    { "name": "Shirui Hill", "description": "Home to rare Shirui Lily and trekking trails.", "bestTime": "October to March" },
    { "name": "Maram", "description": "Tribal village with vibrant culture and festivals.", "bestTime": "October to March" },
    { "name": "Khurai", "description": "Cultural town with temples and traditional art.", "bestTime": "October to March" },
    { "name": "Sekmai", "description": "Known for Sekmai Bamboo dance and cultural shows.", "bestTime": "October to March" },
    { "name": "Kangpokpi", "description": "Scenic hill district with tribal heritage.", "bestTime": "October to March" },
    { "name": "Noney", "description": "Remote area with tribal traditions and nature.", "bestTime": "October to March" },
    { "name": "Singda", "description": "Known for traditional handloom and crafts.", "bestTime": "October to March" },
    { "name": "Tamenglong", "description": "Hill district with lush forests and waterfalls.", "bestTime": "October to March" },
    { "name": "Thongju", "description": "Suburb of Imphal with ancient sites and markets.", "bestTime": "October to March" }
  ],
  "Meghalaya": [
    { "name": "Shillong", "description": "Capital city known as 'Scotland of the East' with waterfalls and lakes.", "bestTime": "October to June" },
    { "name": "Cherrapunji", "description": "One of the wettest places on Earth, famous for living root bridges.", "bestTime": "October to June" },
    { "name": "Mawlynnong", "description": "Asia’s cleanest village with scenic beauty and root bridges.", "bestTime": "October to June" },
    { "name": "Nongriat", "description": "Village known for double-decker root bridge trek.", "bestTime": "October to May" },
    { "name": "Dawki", "description": "Border town and crystal-clear Umngot River boating.", "bestTime": "October to May" },
    { "name": "Mawphlang", "description": "Sacred grove with ancient trees and rituals.", "bestTime": "October to June" },
    { "name": "Laitlum Canyons", "description": "Scenic viewpoints with deep valleys and hills.", "bestTime": "October to May" },
    { "name": "Kongthong", "description": "Village known for whistling tunes instead of names.", "bestTime": "October to May" },
    { "name": "Krang Suri Falls", "description": "Crystal clear waterfalls surrounded by greenery.", "bestTime": "October to May" },
    { "name": "Bishop Falls", "description": "One of the highest waterfalls near Shillong.", "bestTime": "October to June" },
    { "name": "Elephant Falls", "description": "Popular multi-tiered waterfall near Shillong.", "bestTime": "October to June" },
    { "name": "Sohra", "description": "Village near Cherrapunji with picturesque landscapes.", "bestTime": "October to May" },
    { "name": "Balpakram National Park", "description": "Biodiversity hotspot with rare wildlife.", "bestTime": "October to April" },
    { "name": "Nongkhnum Island", "description": "Largest river island with waterfalls and beaches.", "bestTime": "October to May" },
    { "name": "Williamnagar", "description": "District town with rich tribal culture.", "bestTime": "October to May" }
  ],
  "Odisha": [
    { "name": "Bhubaneswar", "description": "Temple City of India with Dhauli Hills, Udayagiri & Khandagiri caves, Lingaraj Temple and Nandan Kanan Zoological Park.", "bestTime": "October to March" },
    { "name": "Puri", "description": "Famous for Jagannath Temple, golden sandy beaches, and the annual Rath Yatra festival.", "bestTime": "July to March" },
    { "name": "Konark", "description": "Home to the UNESCO World Heritage Sun Temple, famous for exquisite architecture and annual dance festival.", "bestTime": "October to March" },
    { "name": "Chilika Lake", "description": "Largest brackish water lagoon in Asia, rich in migratory birds and dolphin sightings.", "bestTime": "November to February" },
    { "name": "Cuttack", "description": "Historic city known for Barabati Fort, handicrafts, and Ansupa Lake.", "bestTime": "October to March" },
    { "name": "Rourkela", "description": "Industrial city near scenic places like Hanuman Vatika and Vedvyas.", "bestTime": "October to March" },
    { "name": "Dhauli", "description": "Famous for the peace pagoda and Ashokan rock edicts, significant Buddhist site.", "bestTime": "October to March" },
    { "name": "Satkosia Tiger Reserve", "description": "Biodiverse reserve with Bengal tigers, river gorge and forest trails.", "bestTime": "November to May" },
    { "name": "Simlipal National Park", "description": "Tiger reserve with waterfalls, dense forest, and tribal culture.", "bestTime": "October to March" },
    { "name": "Baripada", "description": "Known for cultural festivals like Rath Yatra and scenic hills nearby.", "bestTime": "October to March" },
    { "name": "Taptapani", "description": "Hot water spring and lush green surroundings.", "bestTime": "October to February" },
    { "name": "Gopalpur Beach", "description": "Quiet beach town with serene shorelines and fishing villages.", "bestTime": "October to March" },
    { "name": "Bhitarkanika National Park", "description": "Mangrove ecosystem with saltwater crocodiles and diverse birdlife.", "bestTime": "October to June" },
    { "name": "Daringbadi", "description": "Also called 'Kashmir of Odisha' for its cool climate and coffee plantations.", "bestTime": "October to March" },
    { "name": "Khandagiri Caves", "description": "Ancient Jain rock-cut caves with intricate carvings and Buddhist relics.", "bestTime": "November to March" }
  ],
  "Punjab": [
    { "name": "Amritsar", "description": "Home of the Golden Temple, the spiritual center of Sikhism, and Wagah Border.", "bestTime": "October to March" },
    { "name": "Chandigarh", "description": "Modern city known for Rock Garden, Sukhna Lake, and Rose Garden.", "bestTime": "October to March" },
    { "name": "Ludhiana", "description": "Industrial city with Phillaur Fort and numerous shopping bazaars.", "bestTime": "October to March" },
    { "name": "Jalandhar", "description": "Known for Devi Talab Mandir, Pushpa Gujral Science City and sports goods industry.", "bestTime": "October to March" },
    { "name": "Patiala", "description": "Historic city with Qila Mubarak palace and Sheesh Mahal.", "bestTime": "October to March" },
    { "name": "Wagah Border", "description": "Famous for daily border ceremony between India and Pakistan.", "bestTime": "October to March" },
    { "name": "Anandpur Sahib", "description": "One of the holiest cities for Sikhs with historic gurudwaras.", "bestTime": "October to March" },
    { "name": "Kapurthala", "description": "Known for its palaces and French-style architecture.", "bestTime": "October to March" },
    { "name": "Faridkot", "description": "Featuring historic forts and archaeological sites.", "bestTime": "October to March" },
    { "name": "Hoshiarpur", "description": "Famous for ancient temples and natural beauty.", "bestTime": "October to March" },
    { "name": "Bathinda", "description": "Known for Qila Mubarak fort and thermal power station.", "bestTime": "October to March" },
    { "name": "Rupnagar", "description": "Historic city with archaeological museum and Nangal Dam.", "bestTime": "October to March" },
    { "name": "Muktsar Sahib", "description": "Religious city with several gurudwaras.", "bestTime": "October to March" },
    { "name": "Mandi Gobindgarh", "description": "Steel town with industrial visits and local markets.", "bestTime": "October to March" },
    { "name": "Jagraon", "description": "Small town known for cultural heritage and festivals.", "bestTime": "October to March" }
  ],
  "Rajasthan": [
    { "name": "Jaipur", "description": "Pink City with forts, palaces, bazaars, and vibrant culture.", "bestTime": "October to March" },
    { "name": "Udaipur", "description": "City of Lakes, known for palaces, boat rides, and heritage hotels.", "bestTime": "October to March" },
    { "name": "Jodhpur", "description": "Blue City with Mehrangarh Fort and traditional markets.", "bestTime": "October to March" },
    { "name": "Pushkar", "description": "Famous for Pushkar Lake, Brahma Temple, and annual camel fair.", "bestTime": "October to March" },
    { "name": "Mount Abu", "description": "Hill station with Nakki Lake, Dilwara Temples, and sunset viewpoints.", "bestTime": "October to March" },
    { "name": "Bikaner", "description": "Known for Junagarh Fort, camel festival, and desert landscapes.", "bestTime": "October to March" },
    { "name": "Chittorgarh", "description": "Historic city with massive Chittorgarh Fort and palaces.", "bestTime": "October to March" },
    { "name": "Ranthambore", "description": "Wildlife reserve famous for Bengal tigers and Ranthambore Fort.", "bestTime": "October to June" },
    { "name": "Neemrana", "description": "Historic fort turned heritage hotel with cultural events.", "bestTime": "October to March" },
    { "name": "Alwar", "description": "City with Bala Quila Fort, Sariska Tiger Reserve, and lakes.", "bestTime": "October to March" },
    { "name": "Ajmer", "description": "Religious city famous for Ajmer Sharif Dargah and Ana Sagar Lake.", "bestTime": "October to March" },
    { "name": "Sikar", "description": "Town with havelis, temples, and cultural crafts.", "bestTime": "October to March" },
    { "name": "Barmer", "description": "Desert town with forts and folk culture.", "bestTime": "October to March" },
    { "name": "Bundi", "description": "Known for stepwells, forts, and artistic murals.", "bestTime": "October to March" },
    { "name": "Sambhar", "description": "Largest salt lake in India and birdwatching site.", "bestTime": "October to March" }
  ],
  "Sikkim": [
    { "name": "Gangtok", "description": "Capital city with monasteries, views of Mt. Kanchenjunga, and MG Road.", "bestTime": "March to June, September to December" },
    { "name": "Pelling", "description": "Hill town with views of Kanchenjunga and Pemayangtse Monastery.", "bestTime": "March to June, September to December" },
    { "name": "Lachung", "description": "Gateway to Yumthang Valley, known as Valley of Flowers.", "bestTime": "March to June, September to December" },
    { "name": "Yumthang Valley", "description": "Scenic valley with hot springs and rhododendron blooms.", "bestTime": "March to June" },
    { "name": "Rumtek Monastery", "description": "Largest monastery in Sikkim and center of Tibetan Buddhism.", "bestTime": "March to June, September to December" },
    { "name": "Nathula Pass", "description": "Mountain pass on Indo-China border, historical trade route.", "bestTime": "May to October" },
    { "name": "Tsongmo Lake", "description": "Glacial lake with stunning surroundings.", "bestTime": "March to June, September to December" },
    { "name": "Zuluk", "description": "Village on old Silk Route with zigzag roads and views.", "bestTime": "March to June, September to December" },
    { "name": "Phodong Monastery", "description": "Ancient Buddhist monastery with peaceful ambiance.", "bestTime": "March to June, September to December" },
    { "name": "Namgyal Institute of Tibetology", "description": "Museum dedicated to Tibetan culture and heritage.", "bestTime": "March to June, September to December" },
    { "name": "Rabdentse Ruins", "description": "Historic ruins of former capital with panoramic views.", "bestTime": "March to June, September to December" },
    { "name": "Tsomgo Lake", "description": "High-altitude glacial lake with yak rides.", "bestTime": "March to June, September to December" },
    { "name": "Hanuman Tok", "description": "Hilltop temple dedicated to Lord Hanuman with views.", "bestTime": "March to June, September to December" },
    { "name": "Baktang Monastery", "description": "Remote monastery on cliff with breathtaking surroundings.", "bestTime": "March to June, September to December" },
    { "name": "Pakyong", "description": "Emerging town with scenic countryside.", "bestTime": "March to June, September to December" }
  ],
  "Tamil Nadu": [
    { "name": "Chennai", "description": "Capital city with Marina Beach, Kapaleeshwarar Temple, and cultural sites.", "bestTime": "November to February" },
    { "name": "Mahabalipuram", "description": "UNESCO site famous for rock-cut temples and shore temple.", "bestTime": "November to February" },
    { "name": "Madurai", "description": "Home to Meenakshi Amman Temple and rich Tamil culture.", "bestTime": "October to March" },
    { "name": "Ooty", "description": "Hill station known for botanical gardens, lakes, and Nilgiri Railway.", "bestTime": "April to June, September to October" },
    { "name": "Kodaikanal", "description": "Hill station with lakes, waterfalls, and pleasant climate.", "bestTime": "April to June, September to October" },
    { "name": "Rameswaram", "description": "Sacred pilgrimage town with Ramanathaswamy Temple and Pamban Bridge.", "bestTime": "October to March" },
    { "name": "Coimbatore", "description": "Industrial city with temples and hill stations nearby.", "bestTime": "November to February" },
    { "name": "Thanjavur", "description": "Famous for Brihadeeswarar Temple and Chola architecture.", "bestTime": "October to March" },
    { "name": "Kanchipuram", "description": "Temple city known for silk sarees and ancient temples.", "bestTime": "November to February" },
    { "name": "Tiruchirappalli", "description": "Known for Rockfort Temple and ancient heritage.", "bestTime": "October to March" },
    { "name": "Yelagiri", "description": "Hill station with trekking, gardens, and serene ambiance.", "bestTime": "November to February" },
    { "name": "Chidambaram", "description": "Home to the famous Nataraja Temple.", "bestTime": "October to March" },
    { "name": "Vellore", "description": "Known for historic Vellore Fort and Jalakandeswarar Temple.", "bestTime": "October to March" },
    { "name": "Pondicherry", "description": "Coastal town with French colonial architecture and beaches.", "bestTime": "November to March" },
    { "name": "Hogenakkal Falls", "description": "Waterfalls known as the Niagara of India.", "bestTime": "November to February" }
  ],
  "Jammu and Kashmir": [
    { name: "Srinagar", description: "The summer capital known for Dal Lake, houseboats, and Mughal gardens. A paradise on earth with stunning natural beauty and shikara rides.", bestTime: "April to October" },
    { name: "Gulmarg", description: "Famous ski resort and Asia's highest golf course. Known for its gondola ride, snow-capped peaks, and winter sports activities.", bestTime: "December to March (skiing), June to August (meadows)" },
    { name: "Pahalgam", description: "Base camp for Amarnath Yatra, surrounded by pine forests and the Lidder River. Popular destination for trekking, fishing, and nature walks.", bestTime: "April to November" },
    { name: "Sonmarg", description: "Gateway to Ladakh, known as 'Meadow of Gold'. Features glaciers, lakes, and stunning mountain views. Perfect for adventure enthusiasts.", bestTime: "May to October" },
    { name: "Dal Lake", description: "Iconic lake with shikaras and houseboats. The jewel of Srinagar featuring floating gardens, markets, and serene waters.", bestTime: "April to October" },
    { name: "Leh", description: "Capital of Ladakh, high-altitude desert with Buddhist monasteries. Adventure hub for biking, trekking, and experiencing unique Ladakhi culture.", bestTime: "May to September" },
    { name: "Vaishno Devi Temple", description: "Sacred Hindu pilgrimage site dedicated to Goddess Vaishno Devi. Located in Trikuta Mountains, attracts millions of devotees annually.", bestTime: "March to October" },
    { name: "Patnitop", description: "Hill station with panoramic views, meadows, and pine forests. Ideal for nature lovers, trekking, and adventure activities like paragliding.", bestTime: "March to November" },
    { name: "Yusmarg", description: "Pristine meadow surrounded by dense forests and snow-capped peaks. Perfect for picnics, horse riding, and experiencing untouched natural beauty.", bestTime: "April to November" },
    { name: "Doodhpathri", description: "'Valley of Milk' with lush green meadows and crystal-clear streams. Offbeat destination for nature enthusiasts seeking tranquility.", bestTime: "May to September" },
    { name: "Kishtwar", description: "Known for saffron fields, scenic beauty, and challenging trekking routes. Home to Kishtwar National Park with diverse wildlife.", bestTime: "April to October" },
    { name: "Aru Valley", description: "Quaint village with meadows and mountain views. Starting point for treks to Kolahoi Glacier and popular for camping.", bestTime: "April to November" },
    { name: "Betaab Valley", description: "Named after Bollywood film, features lush greenery, snow-covered mountains, and crystal-clear streams. Popular filming location.", bestTime: "April to November" },
    { name: "Nubra Valley", description: "Cold desert with sand dunes, double-humped Bactrian camels, and ancient Buddhist monasteries. Accessible via world's highest motorable pass Khardung La.", bestTime: "May to September" },
    { name: "Pangong Lake", description: "Stunning high-altitude lake with water that changes colors. Extends from India to Tibet, offering breathtaking views and camping opportunities.", bestTime: "May to September" },
  ],
  "Gujarat": [
    { "name": "Statue of Unity", "description": "World's tallest statue dedicated to Sardar Vallabhbhai Patel with panoramic views.", "bestTime": "October to March" },
    { "name": "Gir National Park", "description": "Only natural habitat of Asiatic lions with wildlife safaris.", "bestTime": "November to April" },
    { "name": "Rann of Kutch", "description": "Great salt desert with cultural festival Rann Utsav and white salt plains.", "bestTime": "November to February" },
    { "name": "Somnath Temple", "description": "Historic Jyotirlinga temple facing the Arabian Sea.", "bestTime": "October to March" },
    { "name": "Dwarkadhish Temple", "description": "Spiritual temple dedicated to Lord Krishna in Dwarka.", "bestTime": "October to March" },
    { "name": "Laxmi Vilas Palace, Vadodara", "description": "Grand palace with Indo-Saracenic architecture.", "bestTime": "October to March" },
    { "name": "Sabarmati Ashram, Ahmedabad", "description": "Residence of Mahatma Gandhi and museum.", "bestTime": "October to March" },
    { "name": "Modhera Sun Temple", "description": "11th-century temple dedicated to the sun god.", "bestTime": "October to March" },
    { "name": "Mandvi Beach", "description": "Golden beach with camel rides and peaceful environment.", "bestTime": "October to March" },
    { "name": "Rani ki Vav, Patan", "description": "UNESCO World Heritage stepwell with intricate carvings.", "bestTime": "October to March" },
    { "name": "Bhuj", "description": "City famous for crafts, museums, and gateway to Kutch.", "bestTime": "October to March" },
    { "name": "Nalsarovar Bird Sanctuary", "description": "Wetland reserve famous for migratory birds.", "bestTime": "November to February" },
    { "name": "Saputara", "description": "Hill station with lake, gardens, and tribal culture.", "bestTime": "October to March" },
    { "name": "Akshardham Temple, Gandhinagar", "description": "Massive modern temple complex showcasing Indian culture.", "bestTime": "October to March" },
    { "name": "Velavadar Blackbuck National Park", "description": "Grassland habitat for blackbucks and other wild fauna.", "bestTime": "November to March" }
  ],
  "Mizoram": [
    { "name": "Aizawl", "description": "Capital city surrounded by scenic hills and vibrant culture.", "bestTime": "October to April" },
    { "name": "Tangkawn", "description": "Beautiful hillock famous for pine groves and nature walks.", "bestTime": "October to April" },
    { "name": "Hmuifang", "description": "Hill station with lush greenery and tribal festivals.", "bestTime": "October to April" },
    { "name": "Durtlang", "description": "Popular picnic spot with panoramic views of Aizawl.", "bestTime": "October to April" },
    { "name": "Phawngpui Peak", "description": "Highest peak in Mizoram, also called the Blue Mountain.", "bestTime": "November to March" },
    { "name": "Vantawng Falls", "description": "Tallest waterfall in Mizoram, nestled in serene forest.", "bestTime": "October to April" },
    { "name": "Serchhip", "description": "Town known for scenic beauty and cultural heritage.", "bestTime": "October to April" },
    { "name": "Bungtlang", "description": "Hill area known for birds and trekking.", "bestTime": "October to April" },
    { "name": "Reiek", "description": "Hill station offering spectacular views of Aizawl and beyond.", "bestTime": "October to April" },
    { "name": "Pukzing", "description": "Lush valley with tribal villages and natural beauty.", "bestTime": "October to April" },
    { "name": "Lunglei", "description": "District town with natural landscapes and waterfalls.", "bestTime": "October to April" },
    { "name": "Tui Rieu Lake", "description": "Sacred lake surrounded by hills.", "bestTime": "October to April" },
    { "name": "Khawbung", "description": "Small town nestled among hills with cultural significance.", "bestTime": "October to April" },
    { "name": "Champhai", "description": "Border town known for paddy fields and traditional festivals.", "bestTime": "October to April" },
    { "name": "Sibuta", "description": "Natural spring and tourist spot.", "bestTime": "October to April" }
  ],
  "Nagaland": [
    { "name": "Kohima", "description": "Capital city with Nagaland State Museum and WWII cemetery.", "bestTime": "October to April" },
    { "name": "Dimapur", "description": "Largest city with ancient ruins and modern markets.", "bestTime": "October to April" },
    { "name": "Mokokchung", "description": "Cultural hub of Ao Nagas with traditional festivals.", "bestTime": "October to April" },
    { "name": "Tuensang", "description": "Town with traditional Naga cultural sites.", "bestTime": "October to April" },
    { "name": "Mon", "description": "Headquarters of Konyak tribe famous for headhunting history.", "bestTime": "October to April" },
    { "name": "Wokha", "description": "Agricultural town surrounded by scenic hills.", "bestTime": "October to April" },
    { "name": "Phek", "description": "Town known for Chakhesang tribe and cultural festivals.", "bestTime": "October to April" },
    { "name": "Kiphire", "description": "Remote district with picturesque hills and tribal heritage.", "bestTime": "October to April" },
    { "name": "Zunheboto", "description": "Town of Sümi Naga tribe with festivals and scenic beauty.", "bestTime": "October to April" },
    { "name": "Longleng", "description": "Small town with tribal culture and nature.", "bestTime": "October to April" },
    { "name": "Tseminyu", "description": "Town with traditional Naga villages and crafts.", "bestTime": "October to April" },
    { "name": "Peren", "description": "District with rich flora and fauna and tribal life.", "bestTime": "October to April" },
    { "name": "Chumukedima", "description": "Adjacent to Dimapur with historical sites.", "bestTime": "October to April" },
    { "name": "Sukapha Samannay Kshetra", "description": "Heritage site dedicated to founder of Ahom kingdom.", "bestTime": "October to April" },
    { "name": "Dzükou Valley", "description": "Scenic valley known for unique flora, trekking, and flowers.", "bestTime": "October to April" }
  ],
  "Telangana": [
    { "name": "Hyderabad", "description": "Capital city boasting Charminar, Golconda Fort, and rich cuisine.", "bestTime": "October to March" },
    { "name": "Warangal", "description": "Historical city with Warangal Fort and Thousand Pillar Temple.", "bestTime": "October to March" },
    { "name": "Nagarjuna Sagar", "description": "One of the world’s largest dams with archaeological sites.", "bestTime": "October to March" },
    { "name": "Ramappa Temple", "description": "UNESCO World Heritage Site known for exquisite Kakatiya architecture.", "bestTime": "October to March" },
    { "name": "Medak", "description": "Home to massive Medak Cathedral and historical sites.", "bestTime": "October to March" },
    { "name": "Basara", "description": "Saraswathi Temple pilgrimage town on Godavari River.", "bestTime": "October to March" },
    { "name": "Kaleshwaram", "description": "Religious site known for the Kaleshwara Mukteswara Swamy Temple.", "bestTime": "October to March" },
    { "name": "Vemulawada", "description": "Town with famous Rajarajeshwara Temple.", "bestTime": "October to March" },
    { "name": "Bhongir Fort", "description": "Historical fort perched on a hillock.", "bestTime": "October to March" },
    { "name": "Pocharam Wildlife Sanctuary", "description": "Protected area with diverse flora and fauna.", "bestTime": "October to March" },
    { "name": "Yadagirigutta", "description": "Pilgrimage center known for Sri Lakshmi Narasimha Swamy Temple.", "bestTime": "October to March" },
    { "name": "Manjeera Dam", "description": "Popular picnic spot near Hyderabad.", "bestTime": "October to March" },
    { "name": "Nirmal", "description": "Known for painting and handicrafts.", "bestTime": "October to March" },
    { "name": "Bhadradri", "description": "Site of famous temple dedicated to Lord Shiva.", "bestTime": "October to March" },
    { "name": "Alampur", "description": "Ancient temples on the banks of River Tungabhadra.", "bestTime": "October to March" }
  ],
  "Tripura": [
    { "name": "Agartala", "description": "Capital with Ujjayanta Palace and heritage sites.", "bestTime": "October to March" },
    { "name": "Neermahal", "description": "Palace located in the middle of Rudrasagar Lake.", "bestTime": "October to March" },
    { "name": "Unakoti", "description": "Archaeological site with ancient rock carvings and sculptures.", "bestTime": "October to March" },
    { "name": "Jampui Hills", "description": "Hill station known for excellent views and orange orchards.", "bestTime": "October to March" },
    { "name": "Sepahijala Wildlife Sanctuary", "description": "Sanctuary with diverse wildlife including primates.", "bestTime": "October to March" },
    { "name": "Trishna Wildlife Sanctuary", "description": "Located near the Bangladesh border, famous for wildlife diversity.", "bestTime": "October to March" },
    { "name": "Malaccherns", "description": "Valley with waterfalls and tribal villages.", "bestTime": "October to March" },
    { "name": "Dhulian Para", "description": "Picnic spot with unique rock formations.", "bestTime": "October to March" },
    { "name": "Gumti Wildlife Sanctuary", "description": "Sanctuary with rich biodiversity.", "bestTime": "October to March" },
    { "name": "Lalchari Hills", "description": "Trekking spot with scenic beauty.", "bestTime": "October to March" },
    { "name": "Ambassa", "description": "Town with tribal culture and markets.", "bestTime": "October to March" },
    { "name": "Bishalgarh", "description": "Known for bamboo and cane crafts.", "bestTime": "October to March" },
    { "name": "Amarpur", "description": "Hill area with temples and natural beauty.", "bestTime": "October to March" },
    { "name": "Khowai", "description": "River town with tribal culture.", "bestTime": "October to March" },
    { "name": "Kamalpur", "description": "Known for historical sites.", "bestTime": "October to March" }
  ],
  "Uttar Pradesh": [
    { "name": "Agra", "description": "Home to Taj Mahal, Agra Fort, and Fatehpur Sikri.", "bestTime": "October to March" },
    { "name": "Varanasi", "description": "One of the world's oldest cities on the Ganges, known for ghats and spiritual significance.", "bestTime": "October to March" },
    { "name": "Lucknow", "description": "Capital city with Bara Imambara, Rumi Darwaza, and rich Nawabi culture.", "bestTime": "October to March" },
    { "name": "Mathura", "description": "Birthplace of Lord Krishna with temples and festivals.", "bestTime": "October to March" },
    { "name": "Vrindavan", "description": "Famous for Krishna temples and vibrant celebrations.", "bestTime": "October to March" },
    { "name": "Sarnath", "description": "Buddhist pilgrimage site where Buddha gave his first sermon.", "bestTime": "October to March" },
    { "name": "Kanpur", "description": "Industrial city with temples and wildlife parks.", "bestTime": "October to March" },
    { "name": "Allahabad (Prayagraj)", "description": "Known for Triveni Sangam and Kumbh Mela.", "bestTime": "January to March" },
    { "name": "Jhansi", "description": "Historic city with Jhansi Fort and heritage sites.", "bestTime": "October to March" },
    { "name": "Gorakhpur", "description": "Pilgrimage city with Gorakhnath Temple.", "bestTime": "October to March" },
    { "name": "Ayodhya", "description": "Ancient city, birthplace of Lord Rama.", "bestTime": "October to March" },
    { "name": "Aligarh", "description": "Known for Aligarh Muslim University and fort.", "bestTime": "October to March" },
    { "name": "Meerut", "description": "Historic city known for freedom struggle and sports goods.", "bestTime": "October to March" },
    { "name": "Saharanpur", "description": "Famous for wood carving and wildlife sanctuary.", "bestTime": "October to March" },
    { "name": "Bhadohi", "description": "Known as the carpet city of India.", "bestTime": "October to March" }
  ],
  "Uttarakhand": [
    { "name": "Dehradun", "description": "Capital city known for Robber's Cave and Mindrolling Monastery.", "bestTime": "March to June, September to November" },
    { "name": "Mussoorie", "description": "Hill station with scenic views and colonial charm.", "bestTime": "March to June, September to November" },
    { "name": "Rishikesh", "description": "Yoga capital of the world and gateway to the Himalayas.", "bestTime": "September to November, February to April" },
    { "name": "Haridwar", "description": "Holy city with Ganga Aarti and pilgrimage spots.", "bestTime": "September to November, February to April" },
    { "name": "Nainital", "description": "Hill station built around Naini Lake with boating and trekking.", "bestTime": "March to June, September to November" },
    { "name": "Almora", "description": "Cultural town with temples and mountain views.", "bestTime": "March to June, September to November" },
    { "name": "Jim Corbett National Park", "description": "Famous tiger reserve and wildlife sanctuary.", "bestTime": "November to June" },
    { "name": "Kedarnath", "description": "One of the holiest Hindu pilgrimage sites in the Himalayas.", "bestTime": "April to November" },
    { "name": "Badrinath", "description": "Important pilgrimage town with ancient temples.", "bestTime": "April to November" },
    { "name": "Auli", "description": "Popular ski destination and hill station.", "bestTime": "December to February" },
    { "name": "Ranikhet", "description": "Scenic hill station with temples and colonial relics.", "bestTime": "March to June, September to November" },
    { "name": "Binsar", "description": "Wildlife sanctuary with panoramic Himalayan views.", "bestTime": "March to June, September to November" },
    { "name": "Pithoragarh", "description": "Town with rugged mountain landscapes and forts.", "bestTime": "March to June, September to November" },
    { "name": "Chopta", "description": "Trekking base and natural beauty spot.", "bestTime": "March to June, September to November" },
    { "name": "Mukteshwar", "description": "Hill station known for orchards and adventure sports.", "bestTime": "March to June, September to November" }
  ],
  "West Bengal": [
    { "name": "Kolkata", "description": "Cultural capital with Victoria Memorial, Howrah Bridge, and museums.", "bestTime": "October to March" },
    { "name": "Darjeeling", "description": "Hill station famous for tea gardens, Tiger Hill, and toy train.", "bestTime": "March to June, September to November" },
    { "name": "Sundarbans", "description": "Largest mangrove forest and home to Bengal tiger.", "bestTime": "November to February" },
    { "name": "Shantiniketan", "description": "World heritage campus founded by Rabindranath Tagore.", "bestTime": "October to March" },
    { "name": "Digha", "description": "Popular beach town on the Bay of Bengal.", "bestTime": "November to February" },
    { "name": "Mirik", "description": "Hill town with lake and orange orchards.", "bestTime": "March to June, September to November" },
    { "name": "Kalimpong", "description": "Hill station known for monasteries and botanical gardens.", "bestTime": "March to June, September to November" },
    { "name": "Cooch Behar", "description": "Town known for its royal palace and architecture.", "bestTime": "October to March" },
    { "name": "Santiniketan", "description": "Cultural town with educational institutions and arts.", "bestTime": "October to March" },
    { "name": "Bishnupur", "description": "Medieval town famous for terracotta temples and crafts.", "bestTime": "October to March" },
    { "name": "Raiganj Wildlife Sanctuary", "description": "Known for migratory birds and biodiversity.", "bestTime": "October to March" },
    { "name": "Basanti", "description": "Gateway to Sundarbans with traditional culture.", "bestTime": "November to February" },
    { "name": "Kalighat", "description": "Famous Kali temple in Kolkata.", "bestTime": "October to March" },
    { "name": "Gorumara National Park", "description": "Popular wildlife sanctuary in northern Bengal.", "bestTime": "November to April" },
    { "name": "Jaldapara Wildlife Sanctuary", "description": "Protected area with Indian one-horned rhinoceroses.", "bestTime": "November to April" }
  ]
};


const MapPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetail | null>(null);

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };

  const handleBack = () => {
    setSelectedState(null);
  };

  const handlePlaceClick = (place: PlaceDetail) => {
    setSelectedPlace(place);
  };

  if (selectedState) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Button>

          <Card className="border-2">
            <CardHeader className="bg-gradient-warm">
              <CardTitle className="text-3xl">{selectedState}</CardTitle>
              <p className="text-muted-foreground">Explore {stateData[selectedState]?.length} popular destinations</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stateData[selectedState]?.map((place, index) => (
                  <div
                    key={index}
                    onClick={() => handlePlaceClick(place)}
                    className="p-5 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all border-2 border-accent cursor-pointer hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{place.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{place.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Place Detail Dialog */}
        <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                {selectedPlace?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">About</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedPlace?.description}</p>
              </div>
              <div className="flex items-center gap-2 p-4 bg-accent/20 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Best Time to Visit</p>
                  <p className="text-sm text-muted-foreground">{selectedPlace?.bestTime}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore India by State</h1>
          <p className="text-lg text-muted-foreground">
            Click on any state to discover its top destinations with detailed information
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.keys(stateData).sort().map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateClick(state)}
                  className="p-4 rounded-lg text-left transition-all border-2 hover:scale-105 bg-primary hover:bg-primary/80 border-primary/30 text-primary-foreground"
                >
                  <h3 className="font-semibold text-sm">{state}</h3>
                  <p className="text-xs opacity-80 mt-1">{stateData[state]?.length} places</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Click on any state to explore popular destinations with descriptions and travel information</p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
