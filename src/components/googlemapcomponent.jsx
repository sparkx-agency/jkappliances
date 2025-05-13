import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Polygon, Marker, InfoWindow } from '@react-google-maps/api';

// Service area coordinates for highlighting
// These are approximate polygons for each service area - these should be replaced with more precise coordinates
const areaCoordinates = {
  'ajax': [
    { lat: 43.8688, lng: -79.0736 }, { lat: 43.8688, lng: -78.9936 },
    { lat: 43.7988, lng: -78.9936 }, { lat: 43.7988, lng: -79.0736 }
  ],
  'aurora': [
    { lat: 44.0133, lng: -79.4975 }, { lat: 44.0133, lng: -79.4175 },
    { lat: 43.9433, lng: -79.4175 }, { lat: 43.9433, lng: -79.4975 }
  ],
  'bowmanville': [
    { lat: 43.9259, lng: -78.7209 }, { lat: 43.9259, lng: -78.6409 },
    { lat: 43.8559, lng: -78.6409 }, { lat: 43.8559, lng: -78.7209 }
  ],
  'brampton': [
    { lat: 43.7315, lng: -79.7624 }, { lat: 43.7315, lng: -79.6824 },
    { lat: 43.6615, lng: -79.6824 }, { lat: 43.6615, lng: -79.7624 }
  ],
  'burlington': [
    { lat: 43.3867, lng: -79.8400 }, { lat: 43.3867, lng: -79.7600 },
    { lat: 43.3167, lng: -79.7600 }, { lat: 43.3167, lng: -79.8400 }
  ],
  'caledon': [
    { lat: 43.8712, lng: -79.9965 }, { lat: 43.8712, lng: -79.9165 },
    { lat: 43.8012, lng: -79.9165 }, { lat: 43.8012, lng: -79.9965 }
  ],
  'claremont': [
    { lat: 43.9722, lng: -79.1388 }, { lat: 43.9722, lng: -79.0588 },
    { lat: 43.9022, lng: -79.0588 }, { lat: 43.9022, lng: -79.1388 }
  ],
  'clarington': [
    { lat: 44.0183, lng: -78.6731 }, { lat: 44.0183, lng: -78.5931 },
    { lat: 43.9483, lng: -78.5931 }, { lat: 43.9483, lng: -78.6731 }
  ],
  'downtown-toronto': [
    { lat: 43.6548, lng: -79.3883 }, { lat: 43.6548, lng: -79.3083 },
    { lat: 43.5848, lng: -79.3083 }, { lat: 43.5848, lng: -79.3883 }
  ],
  'east-york': [
    { lat: 43.7000, lng: -79.3400 }, { lat: 43.7000, lng: -79.2600 },
    { lat: 43.6300, lng: -79.2600 }, { lat: 43.6300, lng: -79.3400 }
  ],
  'etobicoke': [
    { lat: 43.6617, lng: -79.5435 }, { lat: 43.6617, lng: -79.4635 },
    { lat: 43.5917, lng: -79.4635 }, { lat: 43.5917, lng: -79.5435 }
  ],
  'georgetown': [
    { lat: 43.6482, lng: -79.9297 }, { lat: 43.6482, lng: -79.8497 },
    { lat: 43.5782, lng: -79.8497 }, { lat: 43.5782, lng: -79.9297 }
  ],
  'georgina': [
    { lat: 44.2933, lng: -79.3538 }, { lat: 44.2933, lng: -79.2738 },
    { lat: 44.2233, lng: -79.2738 }, { lat: 44.2233, lng: -79.3538 }
  ],
  'halton-hills': [
    { lat: 43.7000, lng: -79.9800 }, { lat: 43.7000, lng: -79.9000 },
    { lat: 43.6300, lng: -79.9000 }, { lat: 43.6300, lng: -79.9800 }
  ],
  'king-city': [
    { lat: 43.9294, lng: -79.5286 }, { lat: 43.9294, lng: -79.4486 },
    { lat: 43.8594, lng: -79.4486 }, { lat: 43.8594, lng: -79.5286 }
  ],
  'kleinburg': [
    { lat: 43.8450, lng: -79.6267 }, { lat: 43.8450, lng: -79.5467 },
    { lat: 43.7750, lng: -79.5467 }, { lat: 43.7750, lng: -79.6267 }
  ],
  'markham': [
    { lat: 43.8717, lng: -79.3333 }, { lat: 43.8717, lng: -79.2533 },
    { lat: 43.8017, lng: -79.2533 }, { lat: 43.8017, lng: -79.3333 }
  ],
  'milton': [
    { lat: 43.5183, lng: -79.8850 }, { lat: 43.5183, lng: -79.8050 },
    { lat: 43.4483, lng: -79.8050 }, { lat: 43.4483, lng: -79.8850 }
  ],
  'mississauga': [
    { lat: 43.6100, lng: -79.6567 }, { lat: 43.6100, lng: -79.5767 },
    { lat: 43.5400, lng: -79.5767 }, { lat: 43.5400, lng: -79.6567 }
  ],
  'newmarket': [
    { lat: 44.0500, lng: -79.4667 }, { lat: 44.0500, lng: -79.3867 },
    { lat: 43.9800, lng: -79.3867 }, { lat: 43.9800, lng: -79.4667 }
  ],
  'north-york': [
    { lat: 43.7817, lng: -79.4167 }, { lat: 43.7817, lng: -79.3367 },
    { lat: 43.7117, lng: -79.3367 }, { lat: 43.7117, lng: -79.4167 }
  ],
  'oakville': [
    { lat: 43.4450, lng: -79.6683 }, { lat: 43.4450, lng: -79.5883 },
    { lat: 43.3750, lng: -79.5883 }, { lat: 43.3750, lng: -79.6683 }
  ],
  'oshawa': [
    { lat: 43.9000, lng: -78.8700 }, { lat: 43.9000, lng: -78.7900 },
    { lat: 43.8300, lng: -78.7900 }, { lat: 43.8300, lng: -78.8700 }
  ],
  'pickering': [
    { lat: 43.8967, lng: -79.0886 }, { lat: 43.8967, lng: -79.0086 },
    { lat: 43.8267, lng: -79.0086 }, { lat: 43.8267, lng: -79.0886 }
  ],
  'richmond-hill': [
    { lat: 43.8817, lng: -79.4433 }, { lat: 43.8817, lng: -79.3633 },
    { lat: 43.8117, lng: -79.3633 }, { lat: 43.8117, lng: -79.4433 }
  ],
  'scarborough': [
    { lat: 43.7700, lng: -79.2533 }, { lat: 43.7700, lng: -79.1733 },
    { lat: 43.7000, lng: -79.1733 }, { lat: 43.7000, lng: -79.2533 }
  ],
  'stouffville': [
    { lat: 43.9767, lng: -79.2500 }, { lat: 43.9767, lng: -79.1700 },
    { lat: 43.9067, lng: -79.1700 }, { lat: 43.9067, lng: -79.2500 }
  ],
  'thornhill': [
    { lat: 43.8200, lng: -79.4200 }, { lat: 43.8200, lng: -79.3400 },
    { lat: 43.7500, lng: -79.3400 }, { lat: 43.7500, lng: -79.4200 }
  ],
  'toronto': [
    { lat: 43.7417, lng: -79.3733 }, { lat: 43.7417, lng: -79.2933 },
    { lat: 43.6717, lng: -79.2933 }, { lat: 43.6717, lng: -79.3733 }
  ],
  'vaughan': [
    { lat: 43.8367, lng: -79.5083 }, { lat: 43.8367, lng: -79.4283 },
    { lat: 43.7667, lng: -79.4283 }, { lat: 43.7667, lng: -79.5083 }
  ],
  'whitby': [
    { lat: 43.8975, lng: -78.9428 }, { lat: 43.8975, lng: -78.8628 },
    { lat: 43.8275, lng: -78.8628 }, { lat: 43.8275, lng: -78.9428 }
  ],
  'woodbridge': [
    { lat: 43.7767, lng: -79.6000 }, { lat: 43.7767, lng: -79.5200 },
    { lat: 43.7067, lng: -79.5200 }, { lat: 43.7067, lng: -79.6000 }
  ],
  'york': [
    { lat: 43.6817, lng: -79.4467 }, { lat: 43.6817, lng: -79.3667 },
    { lat: 43.6117, lng: -79.3667 }, { lat: 43.6117, lng: -79.4467 }
  ]
};

// Center coordinates for each area
const areaCenters = {
  'ajax': { lat: 43.8345, lng: -79.0336 },
  'aurora': { lat: 43.9775, lng: -79.4667 },
  'bowmanville': { lat: 43.9115, lng: -78.6884 },
  'brampton': { lat: 43.7315, lng: -79.7624 },
  'burlington': { lat: 43.3255, lng: -79.7990 },
  'caledon': { lat: 43.8363, lng: -79.8717 },
  'claremont': { lat: 43.9705, lng: -79.1171 },
  'clarington': { lat: 43.9347, lng: -78.6083 },
  'downtown-toronto': { lat: 43.6548, lng: -79.3883 },
  'east-york': { lat: 43.6906, lng: -79.3280 },
  'etobicoke': { lat: 43.6641, lng: -79.5200 },
  'georgetown': { lat: 43.6502, lng: -79.9038 },
  'georgina': { lat: 44.2992, lng: -79.4345 },
  'halton-hills': { lat: 43.6303, lng: -79.9493 },
  'king-city': { lat: 43.9273, lng: -79.5265 },
  'kleinburg': { lat: 43.8401, lng: -79.6248 },
  'markham': { lat: 43.8509, lng: -79.3368 },
  'milton': { lat: 43.5183, lng: -79.8774 },
  'mississauga': { lat: 43.5890, lng: -79.6441 },
  'newmarket': { lat: 44.0581, lng: -79.4620 },
  'north-york': { lat: 43.7615, lng: -79.4111 },
  'oakville': { lat: 43.4668, lng: -79.6877 },
  'oshawa': { lat: 43.8986, lng: -78.8676 },
  'pickering': { lat: 43.8356, lng: -79.0863 },
  'richmond-hill': { lat: 43.8730, lng: -79.4408 },
  'scarborough': { lat: 43.7783, lng: -79.2550 },
  'stouffville': { lat: 43.9705, lng: -79.2506 },
  'thornhill': { lat: 43.8139, lng: -79.4267 },
  'toronto': { lat: 43.7417, lng: -79.3733 },
  'vaughan': { lat: 43.8563, lng: -79.5085 },
  'whitby': { lat: 43.8980, lng: -78.9430 },
  'woodbridge': { lat: 43.7756, lng: -79.5990 },
  'york': { lat: 43.6879, lng: -79.4327 }
};

// Default center and zoom if no area is specified
const defaultCenter = { lat: 43.7417, lng: -79.3733 }; // Toronto
const defaultZoom = 10;

// Singleton pattern for API loading
const GoogleMapComponent = ({ 
  area,
  height = "400px",
  width = "100%",
  showCompanyMarker = true,
  companyName = "JK Appliances",
  companyAddress = "8 Lorraine Crescent"
}) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  // Use the useJsApiLoader hook instead of LoadScript component
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });
  
  // Normalize area name to match our keys
  const normalizedArea = area ? area.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') : '';
  
  // Get center coordinates for the specified area or use default
  const center = normalizedArea && areaCenters[normalizedArea] 
    ? areaCenters[normalizedArea] 
    : defaultCenter;
  
  // Company location (could be configurable)
  const companyLocation = { lat: 43.6444, lng: -79.3807 }; // 8 Lorraine Crescent, Brampton
  
  // Map styling options
  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: true,
    styles: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#333333" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#e9e9e9" }]
      }
    ]
  };
  
  // Container style
  const containerStyle = {
    width,
    height,
    borderRadius: "16px",
    overflow: "hidden"
  };
  
  // Polygon options for highlighting the area
  const polygonOptions = {
    fillColor: "#0071e3",
    fillOpacity: 0.2,
    strokeColor: "#0071e3",
    strokeOpacity: 0.8,
    strokeWeight: 2
  };
  
  if (!isLoaded) {
    return <div style={containerStyle} className="bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }
  
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={normalizedArea ? 11 : defaultZoom}
      options={mapOptions}
    >
      {/* Highlight selected service area */}
      {normalizedArea && areaCoordinates[normalizedArea] && (
        <Polygon
          paths={areaCoordinates[normalizedArea]}
          options={polygonOptions}
        />
      )}
      
      {/* Company location marker */}
      {showCompanyMarker && (
        <Marker
          position={companyLocation}
          icon={{
            path: "M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z",
            fillColor: "#0071e3",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
            scale: 2,
            anchor: { x: 12, y: 24 }
          }}
          onClick={() => setSelectedMarker("company")}
        />
      )}
      
      {/* Info window for company marker */}
      {selectedMarker === "company" && (
        <InfoWindow
          position={companyLocation}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={{ padding: "5px", maxWidth: "200px" }}>
            <h3 style={{ margin: "0 0 5px", fontSize: "16px", fontWeight: "bold" }}>{companyName}</h3>
            <p style={{ margin: "0", fontSize: "14px" }}>{companyAddress}</p>
            <p style={{ margin: "5px 0 0", fontSize: "14px" }}>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0071e3", textDecoration: "none" }}
              >
                Get Directions
              </a>
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent; 