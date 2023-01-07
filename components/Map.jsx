import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function Map() {
  const mapContainer = useRef();
  const mapRef = useRef();

  useEffect(() => {
    if (mapContainer.current && !mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=HJUbFGdyhTnKTnEt7XiJ`,
        center: [107.613144, -6.905977],
        zoom: 8,
        attributionControl: false,
      });

      // Geo Control
      mapRef.current.addControl(
        new maplibregl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        }),
        "top-right"
      );
      mapRef.current.addControl(new maplibregl.NavigationControl({ showCompass: false, showZoom: true }), "bottom-right");
    }

    return () => {};
  }, [mapContainer.current, mapRef.current]);

  return <div ref={mapContainer} className='w-full h-full rounded-3xl'></div>;
}

export default Map;
