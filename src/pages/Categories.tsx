import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Info } from "lucide-react";

const categories = [
  {
    id: "mountains",
    name: "🏔️ Mountains",
    places: [
      "Leh-Ladakh (Pangong Lake, Nubra Valley) - Jammu & Kashmir",
      "Manali (Rohtang Pass, Solang Valley) - Himachal Pradesh",
      "Shimla (Mall Road, Jakhoo Temple) - Himachal Pradesh",
      "Nainital (Naini Lake, Snow View Point) - Uttarakhand",
      "Darjeeling (Tiger Hill, Tea Gardens) - West Bengal",
      "Auli (Skiing, Gondola) - Uttarakhand",
      "Mussoorie (Kempty Falls, Gun Hill) - Uttarakhand",
      "Ooty (Nilgiri Railway, Botanical Garden) - Tamil Nadu",
      "Spiti Valley (Key Monastery, Chandratal) - Himachal Pradesh",
      "Munnar (Tea Estates, Eravikulam Park) - Kerala",
      "Gangtok (Tsomgo Lake, Rumtek Monastery) - Sikkim",
      "Coorg (Abbey Falls, Coffee Plantations) - Karnataka",
      "Tawang (Tawang Monastery) - Arunachal Pradesh",
      "Shillong (Elephant Falls, Ward's Lake) - Meghalaya",
      "Gulmarg (Gondola, Skiing) - Jammu & Kashmir",
    ],
  },
  {
    id: "beaches",
    name: "🏖️ Beaches",
    places: [
      "Calangute & Baga Beach, Goa - Water sports and nightlife",
      "Anjuna Beach, Goa - Flea market and beach parties",
      "Palolem Beach, Goa - Quiet crescent bay",
      "Havelock Island (Radhanagar Beach) - Andaman",
      "Neil Island - Andaman & Nicobar",
      "Alleppey Backwaters - Kerala",
      "Gokarna (Om Beach, Kudle Beach) - Karnataka",
      "Pondicherry (Promenade Beach, Paradise Beach) - Tamil Nadu",
      "Varkala (Papanasam Beach, Cliff) - Kerala",
      "Kovalam (Lighthouse Beach) - Kerala",
      "Puri (Golden Beach, Jagannath Temple) - Odisha",
      "Diu (Nagoa Beach, Ghoghla Beach) - Daman & Diu",
      "Lakshadweep (Agatti, Bangaram) - Islands",
      "Tarkarli Beach - Maharashtra",
    ],
  },
  {
    id: "temples",
    name: "🛕 Temples",
    places: [
      "Kashi Vishwanath Temple, Varanasi - Uttar Pradesh",
      "Tirupati Balaji Temple - Andhra Pradesh",
      "Golden Temple (Harmandir Sahib), Amritsar - Punjab",
      "Meenakshi Amman Temple, Madurai - Tamil Nadu",
      "Konark Sun Temple (UNESCO) - Odisha",
      "Somnath Temple - Gujarat",
      "Jagannath Temple, Puri - Odisha",
      "Kedarnath Temple - Uttarakhand",
      "Badrinath Temple - Uttarakhand",
      "Ramanathaswamy Temple, Rameshwaram - Tamil Nadu",
      "Vaishno Devi Temple - Jammu & Kashmir",
      "Brihadeeswarar Temple (UNESCO), Thanjavur - Tamil Nadu",
      "Lingaraja Temple, Bhubaneswar - Odisha",
      "Kamakhya Temple, Guwahati - Assam",
      "Dwarkadhish Temple, Dwarka - Gujarat",
    ],
  },
  {
    id: "heritage",
    name: "🏛️ Heritage",
    places: [
      "Taj Mahal (UNESCO), Agra - Uttar Pradesh",
      "Hampi Monuments (UNESCO) - Karnataka",
      "Ajanta Caves (UNESCO) - Maharashtra",
      "Ellora Caves (UNESCO) - Maharashtra",
      "Khajuraho Temples (UNESCO) - Madhya Pradesh",
      "Fatehpur Sikri (UNESCO), Agra - Uttar Pradesh",
      "Mahabalipuram (UNESCO Shore Temple) - Tamil Nadu",
      "Sanchi Stupa (UNESCO) - Madhya Pradesh",
      "Qutub Minar (UNESCO), Delhi - Delhi",
      "Humayun's Tomb (UNESCO), Delhi - Delhi",
      "Elephanta Caves (UNESCO), Mumbai - Maharashtra",
      "Konark Sun Temple (UNESCO) - Odisha",
      "Rani Ki Vav (UNESCO), Patan - Gujarat",
      "Champaner-Pavagadh (UNESCO) - Gujarat",
    ],
  },
  {
    id: "historical",
    name: "🏰 Historical",
    places: [
      "Red Fort (UNESCO), Delhi - Mughal fort",
      "Qutub Minar (UNESCO), Delhi - Medieval tower",
      "Amber Fort, Jaipur - Rajasthan",
      "Nahargarh Fort, Jaipur - Rajasthan",
      "Mysore Palace - Karnataka",
      "Victoria Memorial, Kolkata - West Bengal",
      "Chittorgarh Fort (UNESCO) - Rajasthan",
      "Golconda Fort, Hyderabad - Telangana",
      "Agra Fort (UNESCO) - Uttar Pradesh",
      "Mehrangarh Fort, Jodhpur - Rajasthan",
      "Jaisalmer Fort - Rajasthan",
      "Gwalior Fort - Madhya Pradesh",
      "Jhansi Fort - Uttar Pradesh",
      "Kumbhalgarh Fort - Rajasthan",
    ],
  },
  {
    id: "mosques",
    name: "🕌 Mosques",
    places: [
      "Jama Masjid, Delhi - Largest mosque in India",
      "Charminar, Hyderabad - Iconic monument with mosque",
      "Mecca Masjid, Hyderabad - Telangana",
      "Taj-ul-Masajid, Bhopal - Madhya Pradesh",
      "Haji Ali Dargah, Mumbai - Maharashtra",
      "Ajmer Sharif Dargah - Rajasthan",
      "Moti Masjid, Agra - Uttar Pradesh",
      "Jama Masjid, Fatehpur Sikri - Uttar Pradesh",
      "Hazratbal Shrine, Srinagar - Jammu & Kashmir",
      "Bara Imambara, Lucknow - Uttar Pradesh",
      "Adhai Din Ka Jhonpra, Ajmer - Rajasthan",
    ],
  },
  {
    id: "churches",
    name: "⛪ Churches",
    places: [
      "Basilica of Bom Jesus (UNESCO), Old Goa - Goa",
      "Se Cathedral, Old Goa - Largest church in Asia",
      "St. Francis Church, Kochi - Kerala",
      "St. Thomas Cathedral, Mumbai - Maharashtra",
      "Medak Church - Telangana",
      "St. Philomena's Cathedral, Mysore - Karnataka",
      "Santa Cruz Basilica, Kochi - Kerala",
      "Sacred Heart Cathedral, Delhi - Delhi",
      "St. Paul's Cathedral, Kolkata - West Bengal",
      "Velankanni Church - Tamil Nadu",
      "CSI Christ Church, Shimla - Himachal Pradesh",
    ],
  },
  {
    id: "wildlife",
    name: "🦁 Wildlife",
    places: [
      "Jim Corbett National Park - Uttarakhand (Tigers)",
      "Ranthambore National Park - Rajasthan (Tigers, Fort)",
      "Kaziranga National Park (UNESCO) - Assam (One-horned Rhinos)",
      "Bandhavgarh National Park - Madhya Pradesh (Tigers)",
      "Sundarbans (UNESCO) - West Bengal (Royal Bengal Tigers)",
      "Gir National Park - Gujarat (Asiatic Lions)",
      "Periyar Wildlife Sanctuary - Kerala (Elephants)",
      "Keoladeo National Park (UNESCO), Bharatpur - Rajasthan (Birds)",
      "Kanha National Park - Madhya Pradesh (Tigers, Barasingha)",
      "Bandipur National Park - Karnataka (Tigers, Elephants)",
      "Nagarhole National Park - Karnataka (Wildlife)",
      "Pench National Park - Madhya Pradesh (Mowgli's Jungle)",
    ],
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("mountains");
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handlePlaceClick = (place: string) => {
    setSelectedPlace(place);
    setDialogOpen(true);
  };

  const getPlaceDetails = (place: string) => {
    const parts = place.split(" - ");
    const mainPart = parts[0];
    const location = parts[1] || "";
    
    const nameMatch = mainPart.match(/^([^(]+)/);
    const attractionsMatch = mainPart.match(/\(([^)]+)\)/);
    
    const name = nameMatch ? nameMatch[1].trim() : mainPart;
    
    // Detailed descriptions for each place
    const descriptions: { [key: string]: string } = {
      "Leh-Ladakh": "A high-altitude desert known for its breathtaking landscapes, Buddhist monasteries, and adventure activities. Pangong Lake offers stunning blue waters changing colors throughout the day, while Nubra Valley features unique sand dunes amid mountains. Best visited May-September when roads are accessible.",
      "Manali": "A popular hill station in the Himalayas offering year-round attractions. Rohtang Pass provides snow activities and panoramic views, while Solang Valley is perfect for paragliding and skiing. The town features Tibetan monasteries, local markets, and serves as a base for trekking expeditions.",
      "Shimla": "The former summer capital of British India, Shimla exudes colonial charm with Victorian architecture. Mall Road is perfect for shopping and dining, while Jakhoo Temple sits atop the highest peak offering city views. The toy train journey to Shimla is a UNESCO World Heritage experience.",
      "Nainital": "A charming lake town in the Kumaon hills, centered around the pear-shaped Naini Lake. Enjoy boating, visit Snow View Point for Himalayan vistas, and explore colonial-era churches and buildings. The pleasant climate makes it a year-round destination.",
      "Darjeeling": "Famous for its tea gardens and the stunning view of Kanchenjunga, the world's third-highest peak. Wake up early for Tiger Hill sunrise, ride the heritage Darjeeling Himalayan Railway, and visit Buddhist monasteries. The town offers a unique blend of Tibetan, Nepali, and British influences.",
      "Auli": "India's premier skiing destination with well-maintained slopes and modern facilities. The cable car offers spectacular Himalayan views. Perfect for winter sports enthusiasts and nature lovers, with nearby treks to Valley of Flowers and Hemkund Sahib.",
      "Mussoorie": "Known as the 'Queen of Hills', Mussoorie offers colonial charm and natural beauty. Kempty Falls is ideal for a refreshing dip, Gun Hill provides panoramic views via cable car, and Mall Road features shops and restaurants. Great for couples and families alike.",
      "Ooty": "The 'Queen of Hill Stations' in the Nilgiris, famous for its tea gardens and pleasant climate. The Nilgiri Mountain Railway is a UNESCO World Heritage site, and the Botanical Garden showcases exotic plant species. Ooty Lake offers boating amid scenic beauty.",
      "Spiti Valley": "A cold desert mountain valley offering otherworldly landscapes and ancient Buddhist culture. Key Monastery is over 1,000 years old, while Chandratal (Moon Lake) sits at 14,000 feet with crystal-clear waters. Perfect for adventure seekers seeking remote, untouched beauty.",
      "Munnar": "Kerala's tea country with rolling hills covered in emerald-green tea plantations. Eravikulam National Park is home to the endangered Nilgiri Tahr. The cool climate, waterfalls, and spice gardens make it a perfect romantic getaway.",
      "Gangtok": "The capital of Sikkim blending traditional and modern culture. Tsomgo Lake is a glacial lake at 12,400 feet, while Rumtek Monastery showcases Tibetan Buddhist art. The city offers adventure sports, organic cuisine, and stunning mountain views.",
      "Coorg": "The 'Scotland of India', known for coffee plantations and misty hills. Abbey Falls cascades through lush forests, and coffee estates offer plantation tours. The Kodava culture, spicy cuisine, and pleasant weather make it a perfect relaxation destination.",
      "Tawang": "Home to India's largest monastery and birthplace of the 6th Dalai Lama. Situated at 10,000 feet, Tawang offers pristine landscapes, Buddhist culture, and historical significance from the 1962 Indo-China war. Remote and spiritually enriching.",
      "Shillong": "The 'Scotland of the East' with rolling hills, waterfalls, and vibrant culture. Elephant Falls is a three-tiered waterfall surrounded by lush greenery. Ward's Lake offers peaceful walks. The city is known for its music scene and pleasant climate.",
      "Gulmarg": "Asia's premier ski resort with the world's second-highest cable car. In winter, enjoy skiing and snowboarding on pristine slopes. Summer brings lush meadows filled with flowers, perfect for golfing and trekking. The Gondola ride offers breathtaking Himalayan views.",
      
      "Calangute & Baga Beach, Goa": "Goa's most popular beaches offering water sports, beach shacks, and vibrant nightlife. Baga is known for clubs and parties, while Calangute offers family-friendly activities. Try parasailing, jet-skiing, and enjoy fresh seafood at beach restaurants.",
      "Anjuna Beach, Goa": "Famous for the Wednesday flea market selling everything from jewelry to clothes. The beach features distinctive red cliffs and is the birthplace of Goa's trance music scene. Full moon parties and beach parties are legendary here.",
      "Palolem Beach, Goa": "A quieter, crescent-shaped bay in South Goa perfect for relaxation. Lined with palm trees and beach huts, it offers kayaking to nearby islands, dolphin-watching trips, and yoga retreats. Ideal for those seeking peace away from party beaches.",
      "Havelock Island": "Part of the Andaman Islands, featuring Radhanagar Beach, rated among Asia's best. Crystal-clear waters perfect for scuba diving and snorkeling reveal vibrant coral reefs. The island offers pristine nature and limited commercialization.",
      "Neil Island": "A smaller, quieter alternative to Havelock with stunning beaches and coral reefs. Natural rock formations like the Natural Bridge are unique attractions. Perfect for budget travelers seeking tranquility and water activities.",
      "Alleppey Backwaters": "Experience Kerala's unique backwater ecosystem on traditional houseboats. Cruise through palm-fringed canals, watch village life unfold, and enjoy authentic Kerala cuisine. The annual Nehru Trophy Boat Race is a spectacular event.",
      "Gokarna": "A pilgrimage town with pristine beaches offering a more laid-back alternative to Goa. Om Beach is shaped like the Om symbol, Kudle Beach is perfect for sunset views. The town combines spiritual experiences with beach relaxation.",
      "Pondicherry": "A former French colony retaining colonial architecture and cuisine. Promenade Beach offers peaceful walks along the Bay of Bengal, while Paradise Beach requires a boat ride. The French Quarter, Auroville ashram, and cafes create a unique atmosphere.",
      "Varkala": "Unique for its dramatic cliffs adjacent to the beach, called Papanasam Beach believed to have holy waters. The cliff-top area features cafes, shops, and stunning sunset views. Less commercialized than other Kerala beaches.",
      "Kovalam": "Kerala's most developed beach destination featuring the iconic Lighthouse Beach. Crescent-shaped beaches with calm waters perfect for swimming. Ayurvedic massages, seafood restaurants, and nearby attractions make it a complete package.",
      "Puri": "A holy city combining spirituality with beach tourism. The Golden Beach stretches for miles, while Jagannath Temple is one of Hinduism's four most sacred sites. Witness the annual Rath Yatra festival attracting millions.",
      "Diu": "A peaceful island destination with Portuguese heritage. Nagoa Beach offers water sports, while Ghoghla Beach provides serene surroundings. Explore old churches, forts, and enjoy tax-free alcohol and a relaxed atmosphere.",
      "Lakshadweep": "India's smallest union territory featuring pristine coral islands. Agatti and Bangaram offer world-class diving and snorkeling. Permits required, ensuring unspoiled nature. Crystal-clear lagoons and white sand beaches create a tropical paradise.",
      "Tarkarli Beach": "Maharashtra's hidden gem with clear waters perfect for water sports. The beach is less crowded, offering authentic Konkani cuisine. Nearby Sindhudurg Fort and scuba diving make it worth visiting.",
      
      "Kashi Vishwanath Temple, Varanasi": "One of twelve Jyotirlingas and most sacred Shiva temples. Located on the Ganges banks in the world's oldest living city. Witness evening Ganga Aarti, narrow lanes filled with spirituality, and ancient rituals unchanged for millennia.",
      "Tirupati Balaji Temple": "The world's most visited temple, receiving millions of pilgrims annually. Dedicated to Lord Venkateswara, the temple's architecture and rituals are magnificent. Located on Tirumala hills, the journey itself is considered sacred.",
      "Golden Temple (Harmandir Sahib), Amritsar": "Sikhism's holiest shrine featuring stunning gold-plated architecture surrounded by a sacred pool. Open to all faiths, offering free meals (langar) to thousands daily. The evening ceremony and illumination are mesmerizing.",
      "Meenakshi Amman Temple, Madurai": "A stunning example of Dravidian architecture with intricately carved towers (gopurams) covered in thousands of colorful sculptures. The temple complex is like a city within itself, dedicated to Goddess Meenakshi.",
      "Konark Sun Temple": "A UNESCO World Heritage site shaped like a massive chariot with intricately carved wheels and horses. Built in 13th century, this architectural marvel was designed to align with the sun's rays. The erotic sculptures are famous worldwide.",
      "Somnath Temple": "The first among twelve Jyotirlingas, destroyed and rebuilt multiple times throughout history. Located where the Arabian Sea meets land, the temple's resilience symbolizes faith. The sound and light show narrates its fascinating history.",
      "Jagannath Temple, Puri": "One of Char Dham pilgrimage sites, famous for the annual Rath Yatra where massive wooden chariots carry deities. Non-Hindus cannot enter, but the festival atmosphere and nearby beach make Puri special.",
      "Kedarnath Temple": "One of Char Dham shrines located at 11,755 feet in the Himalayas. Requires a challenging trek or helicopter ride. The 2013 floods made it even more significant. Surrounded by snow peaks and pristine nature.",
      "Badrinath Temple": "Another Char Dham site dedicated to Lord Vishnu, set against the Neelkanth peak. The natural hot springs (Tapt Kund) are believed to have medicinal properties. Open only six months yearly due to extreme winter conditions.",
      "Ramanathaswamy Temple, Rameshwaram": "Features the longest temple corridor in India with ornate pillars. According to legend, Lord Rama worshipped here before building the bridge to Lanka. The 22 sacred wells each have different tastes.",
      "Vaishno Devi Temple": "Requires a 12 km trek through mountains, undertaken by millions annually. The cave shrine dedicated to Goddess Vaishno Devi is among India's most visited pilgrimage sites. The journey tests and strengthens devotion.",
      "Brihadeeswarar Temple, Thanjavur": "A UNESCO World Heritage masterpiece built entirely of granite in 11th century. The tower (vimana) casts no shadow at noon. Incredible frescoes and a massive Nandi statue showcase Chola dynasty architecture.",
      "Lingaraja Temple, Bhubaneswar": "An 11th-century architectural marvel exemplifying Kalinga style. The 55-meter tower dominates Bhubaneswar's skyline. The temple complex includes 50 smaller shrines. Non-Hindus can view from an outside platform.",
      "Kamakhya Temple, Guwahati": "One of 51 Shakti Peethas, this tantric temple celebrates divine feminine power. Famous for the annual Ambubachi Mela when the goddess is believed to menstruate. Unique rituals and practices distinguish it from other temples.",
      "Dwarkadhish Temple, Dwarka": "One of Char Dham sites, believed to be where Lord Krishna established his kingdom. The black marble idol is adorned differently each day. The temple flag remains taut despite sea breezes, considered a miracle.",
      
      "Taj Mahal, Agra": "The world's most recognized monument to love, built by Emperor Shah Jahan for his wife Mumtaz Mahal. This white marble mausoleum is a UNESCO World Heritage site featuring perfect symmetry, intricate inlay work, and gardens. Best visited at sunrise or sunset when marble changes hues.",
      "Hampi Monuments": "A UNESCO World Heritage site featuring the ruins of the Vijayanagara Empire. Spread across boulder-strewn landscape, it includes 500+ monuments—temples, palaces, markets. The Vittala Temple complex with its stone chariot and musical pillars is extraordinary.",
      "Ajanta Caves": "30 rock-cut Buddhist cave monuments from 2nd century BCE to 600 CE, featuring stunning paintings and sculptures. A UNESCO World Heritage site showcasing ancient Indian art depicting Buddha's life. The preservation of colors is remarkable.",
      "Ellora Caves": "34 monasteries and temples carved into basalt cliffs, representing Buddhism, Hinduism, and Jainism. The Kailash temple (Cave 16) is the world's largest monolithic structure. UNESCO World Heritage site spanning 600-1000 CE.",
      "Khajuraho Temples": "UNESCO World Heritage temples famous for intricate erotic sculptures alongside depictions of daily life and deities. Built by Chandela dynasty 950-1050 CE. Only 25 of original 85 temples survive, showcasing exceptional Nagara-style architecture.",
      "Fatehpur Sikri, Agra": "Emperor Akbar's short-lived capital, abandoned due to water scarcity. This UNESCO World Heritage site features stunning Mughal architecture blending Hindu and Islamic styles. The Buland Darwaza is India's highest gateway.",
      "Mahabalipuram Shore Temple": "An 8th-century structural temple on the Bay of Bengal coast, part of a UNESCO World Heritage site. The complex includes rock-cut caves, monolithic rathas, and the famous Arjuna's Penance relief. Pallava dynasty architecture at its finest.",
      "Sanchi Stupa": "India's oldest stone structure and UNESCO World Heritage site, built by Emperor Ashoka in 3rd century BCE. The Great Stupa's ornate gateways (toranas) depict Buddha's life. A pilgrimage site showcasing early Buddhist art.",
      "Qutub Minar, Delhi": "A 73-meter tall UNESCO World Heritage tower built in 12th century. Made of red sandstone with intricate carvings, it represents Indo-Islamic architecture. The complex includes the Iron Pillar, rust-free for 1,600 years.",
      "Humayun's Tomb, Delhi": "The first garden-tomb in India, inspiring the Taj Mahal's design. This UNESCO World Heritage Mughal structure features Persian-influenced architecture, complex symmetry, and beautiful gardens. Built in 1570.",
      "Elephanta Caves, Mumbai": "A UNESCO World Heritage site on Elephanta Island featuring 5th-7th century rock-cut temples dedicated to Shiva. The massive Trimurti sculpture is the highlight. Requires a ferry ride from Mumbai, adding to the experience.",
      "Rani Ki Vav, Patan": "An 11th-century stepwell and UNESCO World Heritage site showcasing finest Gujarat stepwell architecture. Seven levels deep with 500+ principal sculptures. Rediscovered in 1960s after being buried under silt.",
      "Champaner-Pavagadh": "A UNESCO World Heritage archaeological park featuring 8th-14th century Hindu temples, 16th century Muslim monuments, and fortifications. The hilltop Kalika Mata temple requires climbing 250 meters or taking a cable car.",
      
      "Red Fort, Delhi": "A UNESCO World Heritage Mughal fort built in 17th century from red sandstone. Houses museums, gardens, and the prime minister delivers Independence Day speeches from its ramparts. The sound and light show narrates history.",
      "Amber Fort, Jaipur": "A majestic hilltop fort-palace featuring stunning mirror work (Sheesh Mahal), intricate carvings, and Rajput architecture. Elephant rides to the fort entrance are popular. Overlooks Maota Lake with Jaigarh Fort nearby.",
      "Nahargarh Fort, Jaipur": "Built to defend Jaipur, this fort offers panoramic city views especially at sunset. The extended palace features European-style corridors connecting royal suites. Popular for evening visits and dining.",
      "Mysore Palace": "India's second-most visited monument after the Taj Mahal. This Indo-Saracenic palace features ornate interiors, gold throne, and intricate architecture. Illuminated by 100,000 bulbs on Sundays and festivals—a spectacular sight.",
      "Victoria Memorial, Kolkata": "A white marble memorial to Queen Victoria combining British and Mughal architecture. Now a museum housing colonial-era artifacts, paintings, and sculptures. Set in manicured gardens, it's iconic to Kolkata's landscape.",
      "Chittorgarh Fort": "India's largest fort and UNESCO World Heritage site spanning 700 acres. Features palaces, temples, and towers including Vijay Stambh. The tales of Rani Padmini's jauhar (self-immolation) add historical depth.",
      "Golconda Fort, Hyderabad": "Famous for its acoustic engineering where claps at entrance are heard at the top. Once a diamond trade center housing the Koh-i-Noor. Sound and light show narrates the fort's glorious history.",
      "Agra Fort": "A UNESCO World Heritage Mughal fort preceding the Taj Mahal. Features stunning palaces, mosques, and pavilions in red sandstone and marble. Shah Jahan was imprisoned here, able to view the Taj Mahal.",
      "Mehrangarh Fort, Jodhpur": "One of India's largest forts perched 400 feet above the blue city. Features museums with royal artifacts, intricate lattice windows, and panoramic views. The fort's imposing walls have never been conquered.",
      "Jaisalmer Fort": "A living fort with 25% of the city population residing within. Made from golden sandstone, it glows honey-gold at sunset. Features Jain temples, havelis, and shops. UNESCO World Heritage site.",
      "Gwalior Fort": "Described as 'the pearl amongst fortresses in India.' Features the stunning Man Singh Palace with turquoise tiles, ancient Jain sculptures, and the Saas-Bahu temples. Perched on sandstone cliffs.",
      "Jhansi Fort": "Made famous by Rani Lakshmibai's valor during the 1857 rebellion. Features museums, cannon displays, and offers city views. The fort's massive walls and gates showcase military architecture.",
      "Kumbhalgarh Fort": "UNESCO World Heritage site with the world's second-longest wall after the Great Wall of China (36 km). Features 360 temples and spectacular views. The light and sound show brings history alive.",
      
      "Jama Masjid, Delhi": "India's largest mosque accommodating 25,000 worshippers. Built by Shah Jahan in red sandstone and marble. The courtyard, domes, and minarets showcase Mughal architecture. Climb the minaret for Old Delhi views.",
      "Charminar, Hyderabad": "An iconic 16th-century monument and mosque with four grand arches and minarets. Surrounded by bustling bazaars selling bangles and pearls. The structure represents Hyderabad's heritage and appears on the city's emblem.",
      "Mecca Masjid, Hyderabad": "One of India's largest mosques, built with bricks from Mecca. Took 77 years to complete. Can accommodate 10,000 worshippers. Features stunning arches and a spacious courtyard.",
      "Taj-ul-Masajid, Bhopal": "One of Asia's largest mosques with pink facade, white marble domes, and tall minarets. Features an Islamic library and madrasa. The courtyard can hold thousands of devotees during prayers.",
      "Haji Ali Dargah, Mumbai": "A mosque and tomb located on an islet, accessible via a causeway during low tide. The Indo-Islamic architecture and marble courtyard create a serene atmosphere. A symbol of Mumbai's religious harmony.",
      "Ajmer Sharif Dargah": "The tomb of Sufi saint Moinuddin Chishti, attracting millions of pilgrims annually. The marble dome and court are exquisite. The annual Urs festival is a major event. Open to all faiths.",
      "Moti Masjid, Agra": "The 'Pearl Mosque' built by Shah Jahan in white marble. Known for its perfect proportions and serene beauty. Located inside Agra Fort, it was the emperor's private place of worship.",
      "Jama Masjid, Fatehpur Sikri": "One of India's largest mosques with the Buland Darwaza gateway. The massive courtyard can hold thousands. Built by Akbar, it features Indo-Islamic architecture and the tomb of Sufi saint Salim Chishti.",
      "Hazratbal Shrine, Srinagar": "Kashmir's holiest Muslim shrine housing a relic believed to be Prophet Muhammad's hair. The white marble structure sits beautifully on Dal Lake's shores. The location and architecture are stunning.",
      "Bara Imambara, Lucknow": "An architectural marvel featuring the world's largest arched hall without beams. The Bhool Bhulaiya (labyrinth) on top is fascinating. Built during a famine to provide employment, showcasing humanitarian architecture.",
      "Adhai Din Ka Jhonpra, Ajmer": "A mosque built in 2.5 days (as legend claims) using temple remnants. Features impressive Indo-Islamic architecture with ornate screens and calligraphy. One of India's oldest mosques, dating to the 12th century.",
      
      "Basilica of Bom Jesus, Old Goa": "A UNESCO World Heritage church holding St. Francis Xavier's mortal remains. The baroque architecture and gilded altars are magnificent. The saint's body is displayed once every decade, attracting millions.",
      "Se Cathedral, Old Goa": "Asia's largest church featuring Portuguese-Manueline architecture. The Golden Bell is one of the finest in the world. Took 90 years to build and showcases Goa's Portuguese heritage.",
      "St. Francis Church, Kochi": "The oldest European church in India built in 1503. Vasco da Gama was originally buried here before remains were moved to Portugal. The architecture reflects Portuguese colonial influence.",
      "St. Thomas Cathedral, Mumbai": "Built in 1718, this Anglican church features colonial architecture and stained glass windows. Located in the Fort area, it's Mumbai's oldest British building, showcasing Gothic revival style.",
      "Medak Church": "One of Asia's largest churches with seating for 5,000. Built by British Wesleyan Methodists, it features stunning stained glass from Britain. The architecture and acoustics are remarkable.",
      "St. Philomena's Cathedral, Mysore": "Built in neo-Gothic style inspired by Cologne Cathedral. Features twin spires reaching 175 feet, stained glass windows, and a crypt with St. Philomena's statue. One of Asia's tallest churches.",
      "Santa Cruz Basilica, Kochi": "Originally built by Portuguese, rebuilt in 20th century. Features stunning interiors with pastel shades, murals depicting Passion of Christ. One of eight basilicas in India with Gothic architecture.",
      "Sacred Heart Cathedral, Delhi": "A beautiful Catholic cathedral built in 1930s featuring red and white architecture. Italian-style frescoes, stained glass, and twin towers create an impressive facade. Peaceful location near India Gate.",
      "St. Paul's Cathedral, Kolkata": "The first Anglican cathedral in Asia featuring Indo-Gothic architecture. The tall spire and stained glass windows are beautiful. Founded in 1847, it remains an active place of worship and heritage site.",
      "Velankanni Church": "Known as the 'Lourdes of the East,' this basilica attracts millions. Built in 16th century, it features Gothic architecture. Famous for miraculous healings. The annual festival in September is massive.",
      "CSI Christ Church, Shimla": "North India's second-oldest church built in 1857. Neo-Gothic architecture with clock tower and stained glass windows depicting faith, hope, charity, and patience. An iconic Shimla landmark on the Ridge.",
      
      "Jim Corbett National Park": "India's oldest national park, established in 1936. Home to Bengal tigers, elephants, and 600+ bird species. Offers jeep safaris, elephant safaris, and varied landscapes from grasslands to dense forests. Best visited November-June.",
      "Ranthambore National Park": "Famous for tiger sighting opportunities in daylight. The 10th-century Ranthambore Fort within the park adds historical charm. Features lakes, ruins, and diverse wildlife. Excellent for photography. Best visited October-April.",
      "Kaziranga National Park": "UNESCO World Heritage site famous for one-horned rhinoceros—hosts two-thirds of the world's population. Also home to tigers, elephants, and water buffalo. Elephant and jeep safaris through grasslands. Visit November-April.",
      "Bandhavgarh National Park": "Highest tiger density in India, offering excellent sighting opportunities. Ancient caves with Brahmi inscriptions and the Bandhavgarh Fort add historical value. Diverse flora and fauna. Best visited October-June.",
      "Sundarbans": "UNESCO World Heritage site—world's largest mangrove forest and home to Royal Bengal Tigers adapted to swimming. Accessible only by boat, offering unique delta ecosystem exploration. Crocodiles, dolphins also present. Visit September-March.",
      "Gir National Park": "The only home of Asiatic Lions in the world. Conservation success story with population recovering from near extinction. Also features leopards, deer, and 300+ bird species. Jeep safaris only. Visit December-March.",
      "Periyar Wildlife Sanctuary": "Scenic sanctuary centered around Periyar Lake where elephants, bison, and sambar gather. Offers boat cruises, trekking, and bamboo rafting. Also features spice plantations nearby. Can visit year-round.",
      "Keoladeo National Park, Bharatpur": "UNESCO World Heritage site and paradise for bird watchers. Over 370 species including migratory birds from Afghanistan, Tibet, China. Best for Siberian cranes (rare now). Visit October-February.",
      "Kanha National Park": "Inspiration for Rudyard Kipling's Jungle Book. Home to Royal Bengal Tigers, barasingha (swamp deer), and diverse wildlife. Sal and bamboo forests create stunning landscapes. Best visited October-June.",
      "Bandipur National Park": "Part of the Nilgiri Biosphere Reserve with rich biodiversity. Tigers, elephants, and endangered species thrive here. Beautiful landscape with deciduous forests. Part of India's Project Tiger. Visit October-May.",
      "Nagarhole National Park": "Also called Rajiv Gandhi National Park, features dense forests and hills. Rich in tigers, elephants, leopards, and gaurs. Kabini River adds scenic beauty. Coracle rides and safaris available. Visit October-May.",
      "Pench National Park": "The real Mowgli's jungle from Kipling's stories. Home to tigers, leopards, and diverse wildlife. The Pench River creates spectacular landscapes. Offers both Madhya Pradesh and Maharashtra entry points. Visit November-May."
    };
    
    return {
      name,
      attractions: attractionsMatch ? attractionsMatch[1] : "",
      location,
      description: descriptions[name] || `Discover the beauty and cultural heritage of ${name} in ${location}. This destination offers unique experiences and memorable attractions for travelers.`
    };
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore by Categories</h1>
          <p className="text-lg text-muted-foreground">
            Discover destinations based on your interests
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent h-auto p-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2 text-sm font-semibold border-2 border-secondary data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground rounded-lg transition-all hover:scale-105"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-center">{category.name}</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.places.map((place, index) => (
                      <div
                        key={index}
                        onClick={() => handlePlaceClick(place)}
                        className="p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-all border border-border hover:border-secondary cursor-pointer group"
                      >
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                          <h3 className="font-semibold text-sm flex-1">{place}</h3>
                          <Info className="w-4 h-4 mt-0.5 shrink-0 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <MapPin className="w-6 h-6 text-secondary" />
                {selectedPlace && getPlaceDetails(selectedPlace).name}
              </DialogTitle>
              <DialogDescription className="text-base space-y-4 pt-4">
                {selectedPlace && (
                  <>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">About</h4>
                      <p className="text-muted-foreground leading-relaxed">{getPlaceDetails(selectedPlace).description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground">{getPlaceDetails(selectedPlace).location}</p>
                    </div>
                    {getPlaceDetails(selectedPlace).attractions && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Attractions</h4>
                        <p className="text-muted-foreground">{getPlaceDetails(selectedPlace).attractions}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Category</h4>
                      <p className="text-muted-foreground capitalize">{activeCategory}</p>
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

export default Categories;
