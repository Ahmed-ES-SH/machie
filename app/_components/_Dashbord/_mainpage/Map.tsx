"use client";
import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

const MapComponent = () => {
  const mapElement = useRef<any>();

  useEffect(() => {
    new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);

  return <div ref={mapElement} style={{ width: "100%", height: "100%" }} />;
};

export default MapComponent;
