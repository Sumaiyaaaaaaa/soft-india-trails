import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const stateData: Record<string, string[]> = {
  "Jammu and Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg", "Dal Lake", "Leh"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kasauli", "Kullu", "Spiti Valley"],
  "Punjab": ["Amritsar", "Chandigarh", "Ludhiana", "Patiala", "Jalandhar"],
  "Uttarakhand": ["Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Dehradun", "Jim Corbett"],
  "Haryana": ["Kurukshetra", "Panchkula", "Faridabad", "Gurgaon"],
  "Uttar Pradesh": ["Agra", "Varanasi", "Lucknow", "Allahabad", "Mathura", "Vrindavan"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu"],
  "Gujarat": ["Ahmedabad", "Dwarka", "Somnath", "Gir Forest", "Rann of Kutch", "Vadodara"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Ujjain", "Khajuraho", "Gwalior", "Sanchi"],
  "Maharashtra": ["Mumbai", "Pune", "Aurangabad", "Nashik", "Lonavala", "Mahabaleshwar"],
  "Chhattisgarh": ["Raipur", "Jagdalpur", "Bilaspur", "Chitrakoot Falls"],
  "Odisha": ["Puri", "Bhubaneswar", "Konark", "Chilika Lake"],
  "West Bengal": ["Kolkata", "Darjeeling", "Kalimpong", "Sundarbans", "Siliguri"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Deoghar", "Hazaribagh"],
  "Bihar": ["Patna", "Bodh Gaya", "Nalanda", "Rajgir", "Vaishali"],
  "Sikkim": ["Gangtok", "Pelling", "Lachung", "Yumthang Valley"],
  "Assam": ["Guwahati", "Kaziranga", "Majuli", "Tezpur"],
  "Arunachal Pradesh": ["Tawang", "Itanagar", "Ziro", "Bomdila"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
  "Manipur": ["Imphal", "Loktak Lake", "Keibul Lamjao"],
  "Mizoram": ["Aizawl", "Champhai", "Lunglei"],
  "Tripura": ["Agartala", "Udaipur", "Unakoti"],
  "Meghalaya": ["Shillong", "Cherrapunji", "Mawlynnong", "Dawki"],
  "Andhra Pradesh": ["Visakhapatnam", "Tirupati", "Vijayawada", "Amaravati"],
  "Telangana": ["Hyderabad", "Warangal", "Ramoji Film City"],
  "Karnataka": ["Bangalore", "Mysore", "Coorg", "Hampi", "Gokarna", "Chikmagalur"],
  "Kerala": ["Kochi", "Munnar", "Alleppey", "Thekkady", "Wayanad", "Kovalam"],
  "Tamil Nadu": ["Chennai", "Madurai", "Rameswaram", "Kanyakumari", "Ooty", "Mahabalipuram"],
  "Goa": ["Panaji", "Calangute", "Baga", "Anjuna", "Palolem", "Old Goa"],
};

const MapPage = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };

  const handleBack = () => {
    setSelectedState(null);
  };

  if (selectedState) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto max-w-4xl">
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
              <p className="text-muted-foreground">Popular destinations to explore</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {stateData[selectedState]?.map((place, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-all border border-accent"
                  >
                    <h3 className="font-semibold text-lg">{place}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Explore India by State</h1>
          <p className="text-lg text-muted-foreground">
            Click on any state to discover its top destinations
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Object.keys(stateData).sort().map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateClick(state)}
                  className="p-4 rounded-lg text-left transition-all border-2 hover:scale-105 bg-primary hover:bg-primary/80 border-primary/30"
                >
                  <h3 className="font-semibold text-sm">{state}</h3>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Interactive map visualization coming soon with geographical accuracy</p>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
