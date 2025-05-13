# Google Maps Integration for JK Appliances

This document provides instructions for setting up and using the Google Maps integration in the JK Appliances website.

## Setup

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Library"
4. Search for and enable the following APIs:
   - Maps JavaScript API
   - Geocoding API (if you plan to use address lookup)
   - Places API (if you plan to add place details)
5. Go to "APIs & Services" > "Credentials"
6. Click "Create Credentials" > "API Key"
7. Restrict the API key to:
   - HTTP referrers (websites): Add your domain(s)
   - API restrictions: Restrict to the APIs enabled above

### 2. Add the API Key to Environment Variables

Create or update your `.env.local` file in the project root with:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

For production deployments, add this environment variable to your hosting platform.

## Usage

The Google Maps component automatically replaces static map images throughout the site. It displays interactive maps with area highlights based on the page or section context.

### Features

- **Area Highlighting**: Each service area is highlighted with a polygon
- **Company Location Marker**: Shows the JK Appliances location
- **Responsive Design**: Maps adapt to container size
- **Interactive Elements**: Users can zoom, pan, and click for more info

### Customizing Maps

The `GoogleMapComponent` accepts these props:

```jsx
<GoogleMapComponent 
  area="Brampton"              // Name of the area to highlight
  height="400px"               // Height of the map (default: 400px)
  width="100%"                 // Width of the map (default: 100%)
  showCompanyMarker={true}     // Whether to show the company marker
  companyName="JK Appliances"  // Name displayed in the info window
  companyAddress="8 Lorraine Cres" // Address displayed in the info window
/>
```

## Adding New Service Areas

To add a new service area:

1. Add the area coordinates to the `areaCoordinates` object in `src/components/GoogleMapComponent.jsx`
2. Add the center point to the `areaCenters` object
3. Follow the pattern of existing areas for the polygon coordinates

Example:

```js
'new-area': [
  { lat: 43.5000, lng: -79.5000 }, { lat: 43.5000, lng: -79.4000 },
  { lat: 43.4000, lng: -79.4000 }, { lat: 43.4000, lng: -79.5000 }
],
```

## Troubleshooting

- **Maps Not Displaying**: Ensure your API key is correctly set in environment variables
- **"For development purposes only" Watermark**: This indicates an API key issue or billing not being enabled
- **Areas Not Highlighting**: Check that the area name passed matches the keys in the coordinates object

## Resources

- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript/overview)
- [@react-google-maps/api Documentation](https://react-google-maps-api-docs.netlify.app/) 