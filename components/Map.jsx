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
        center: [106.77362941159411, -6.273664348029148],
        zoom: 10,
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
      mapRef.current.on("load", () => {
        var marker = new maplibregl.Marker().setLngLat([106.77362941159411, -6.273664348029148]).addTo(mapRef.current);
      });
    }

    return () => {};
  }, [mapContainer, mapRef]);

  return <div ref={mapContainer} className='w-full h-full rounded-3xl'></div>;
}

export default Map;
