import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface D3IndiaMapProps {
  onStateClick: (stateId: string) => void;
}

const D3IndiaMap = ({ onStateClick }: D3IndiaMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // State name mapping to our state IDs
  const stateNameToId: { [key: string]: string } = {
    'Jammu and Kashmir': 'jammu-kashmir',
    'Jammu & Kashmir': 'jammu-kashmir',
    'Ladakh': 'ladakh',
    'Himachal Pradesh': 'himachal-pradesh',
    'Punjab': 'punjab',
    'Uttarakhand': 'uttarakhand',
    'Haryana': 'haryana',
    'Delhi': 'delhi',
    'NCT of Delhi': 'delhi',
    'Rajasthan': 'rajasthan',
    'Uttar Pradesh': 'uttar-pradesh',
    'Bihar': 'bihar',
    'West Bengal': 'west-bengal',
    'Sikkim': 'sikkim',
    'Arunachal Pradesh': 'arunachal-pradesh',
    'Assam': 'assam',
    'Nagaland': 'nagaland',
    'Manipur': 'manipur',
    'Mizoram': 'mizoram',
    'Tripura': 'tripura',
    'Meghalaya': 'meghalaya',
    'Jharkhand': 'jharkhand',
    'Odisha': 'odisha',
    'Orissa': 'odisha',
    'Chhattisgarh': 'chhattisgarh',
    'Madhya Pradesh': 'madhya-pradesh',
    'Gujarat': 'gujarat',
    'Maharashtra': 'maharashtra',
    'Goa': 'goa',
    'Karnataka': 'karnataka',
    'Telangana': 'telangana',
    'Andhra Pradesh': 'andhra-pradesh',
    'Tamil Nadu': 'tamil-nadu',
    'Kerala': 'kerala',
    'Puducherry': 'puducherry',
    'Pondicherry': 'puducherry',
    'Andaman and Nicobar': 'andaman-nicobar',
    'Andaman & Nicobar Islands': 'andaman-nicobar',
    'Andaman & Nicobar': 'andaman-nicobar',
    'Lakshadweep': 'lakshadweep',
    'Chandigarh': 'chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu': 'dadra-nagar-haveli-daman-diu',
    'Daman and Diu': 'dadra-nagar-haveli-daman-diu',
    'Dadra and Nagar Haveli': 'dadra-nagar-haveli-daman-diu'
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 1400;
    const height = 800;

    // Clear any existing content
    svg.selectAll("*").remove();

    // Set up projection centered on India
    const projection = d3.geoMercator()
      .center([82.8, 22])
      .scale(1000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Create a group for the map
    const g = svg.append("g");

    // Load Indian states GeoJSON - using a reliable CDN source
    const indiaStatesGeoJSON = 'https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/e388c4cae20aa53cb5090210a42ebb9b765c0a36/india_states.geojson';

    d3.json(indiaStatesGeoJSON).then((data: any) => {
      // Draw states
      g.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path as any)
        .attr("fill", "hsl(var(--card))")
        .attr("stroke", "hsl(var(--primary))")
        .attr("stroke-width", 1.5)
        .style("cursor", "pointer")
        .on("mouseover", function() {
          d3.select(this)
            .attr("fill", "hsl(var(--accent))")
            .attr("opacity", 0.8);
        })
        .on("mouseout", function() {
          d3.select(this)
            .attr("fill", "hsl(var(--card))")
            .attr("opacity", 1);
        })
        .on("click", function(event, d: any) {
          // Debug: log all properties
          console.log('All properties:', d.properties);
          
          // Try various property name formats
          const stateName = d.properties.st_nm || 
                          d.properties.ST_NM || 
                          d.properties.NAME_1 || 
                          d.properties.name || 
                          d.properties.Name ||
                          d.properties.STATE ||
                          d.properties.state;
          
          console.log('Clicked state:', stateName);
          
          if (stateName) {
            const stateId = stateNameToId[stateName] || stateName.toLowerCase().replace(/\s+/g, '-');
            console.log('State ID:', stateId);
            
            // Highlight clicked state
            g.selectAll("path").attr("fill", "hsl(var(--card))");
            d3.select(this)
              .attr("fill", "hsl(var(--accent))")
              .attr("opacity", 0.9);
            
            onStateClick(stateId);
          } else {
            console.error('Could not find state name in properties');
          }
        })
        .append("title")
        .text((d: any) => d.properties.st_nm || 
                         d.properties.ST_NM || 
                         d.properties.NAME_1 || 
                         d.properties.name || 
                         d.properties.Name ||
                         d.properties.STATE ||
                         d.properties.state || 'Unknown State');

      // Add state labels
      g.selectAll("text")
        .data(data.features)
        .enter()
        .append("text")
        .attr("transform", (d: any) => {
          const centroid = path.centroid(d);
          return `translate(${centroid})`;
        })
        .attr("text-anchor", "middle")
        .attr("font-size", "11px")
        .attr("fill", "hsl(var(--primary))")
        .attr("opacity", 0.9)
        .attr("pointer-events", "none")
        .style("font-weight", "600")
        .style("text-shadow", "0 0 3px hsl(var(--background)), 0 0 3px hsl(var(--background))")
        .text((d: any) => {
          const fullName = d.properties.st_nm || 
                          d.properties.ST_NM || 
                          d.properties.NAME_1 || 
                          d.properties.name || 
                          d.properties.Name ||
                          d.properties.STATE ||
                          d.properties.state;
          
          if (!fullName) return '';
          
          // Abbreviate long names
          if (fullName.length > 12) {
            return fullName.split(' ').map((word: string) => word[0]).join('');
          }
          return fullName;
        });
    }).catch(error => {
      console.error('Error loading GeoJSON:', error);
    });

  }, [onStateClick]);

  return (
    <div className="w-full animate-fade-in">
      <div className="w-full mx-auto rounded-lg shadow-medium overflow-hidden bg-background" style={{ maxWidth: '1400px' }}>
        <svg
          ref={svgRef}
          viewBox="0 0 1400 800"
          className="w-full h-auto"
          style={{ minHeight: '700px' }}
        />
      </div>
    </div>
  );
};

export default D3IndiaMap;
