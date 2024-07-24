import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function LocationPicker() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      });

      await loader.load();

      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: 33.7046811, lng: -7.3630282 },
        zoom: 15,
        mapTypeId: 'roadmap',
      });

      setMap(mapInstance);

      // Add click event listener to the map
      mapInstance.addListener('click', (event) => {
        const location = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        placeMarker(location); // Call placeMarker function when the map is clicked
      });
    };

    initMap();
  }, []);

  // Function to create a marker at the clicked location
  const placeMarker = (location) => {
    // Remove existing marker if it exists
    if (marker) {
      marker.setMap(null);
    }

    // Create new marker at the clicked location
    const newMarker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Marked Place',
    });

    // Set the marker to state
    setMarker(newMarker);

    // Log the latitude and longitude
    console.log('Latitude:', location.lat);
    console.log('Longitude:', location.lng);
  };

  return <div ref={mapRef} style={{ width: '100%', height: '200px' }} />;
}
