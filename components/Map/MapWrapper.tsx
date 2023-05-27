
import { useEffect, useRef, useState } from "react";

import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import GPX from 'ol/format/GPX';
import XYZ from "ol/source/XYZ";

import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import { Fill, Stroke } from "ol/style";
import { MapBox } from "./style";

type MapProps = { features: any[] };

export const MapWrapper = ({features}: MapProps) => {

    // set intial state
    const [map, setMap] = useState<Map>();
    const [featuresLayer, setFeaturesLayer] = useState<VectorLayer<any>>();

    // pull refs
    const mapElement = useRef<HTMLDivElement>(null);

    // create state ref that can be accessed in OpenLayers onclick callback function
    //  https://stackoverflow.com/a/60643670
    const mapRef = useRef<Map>();
    // mapRef.current = map;

    const style = {
        'Point': new Style({
          image: new CircleStyle({
            fill: new Fill({
              color: 'rgba(255,255,0,0.4)',
            }),
            radius: 5,
            stroke: new Stroke({
              color: '#ff0',
              width: 1,
            }),
          }),
        }),
        'LineString': new Style({
          stroke: new Stroke({
            color: '#f00',
            width: 3,
          }),
        }),
        'MultiLineString': new Style({
          stroke: new Stroke({
            color: '#0f0',
            width: 3,
          }),
        }),
      };

    // initialize map on first render
    useEffect(() => {
        // create and add vector source layer
        const initalFeaturesLayer = new VectorLayer({
            // source: new VectorSource()
            source: new VectorSource({
                url: "/14_08_21_Morning_Ride.gpx",
                format: new GPX(),
            }),
            style: style['LineString'] 
            // function(feature) {
            //   if (feature) feature.getGeometry()!.getType() 
            // }
        });

        const seoul = [126.97794, 37.56629]; 
        const leesburg = [-77.61983504470808, 39.0904583770794]
        const webMercator = fromLonLat(leesburg);

        // create map
        if (mapElement.current && !mapRef.current) {
          mapRef.current = new Map({
            target: mapElement.current!,
            layers: [
            // Google Maps Terrain
            new TileLayer({
                source: new XYZ({
                url: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
                })
            }),
    
            initalFeaturesLayer
            ],
            view: new View({
            projection: "EPSG:3857",
            center: webMercator,
            zoom: 17
            }),
            controls: []
          });

          // save map and vector layer references to state
          // setMap(initialMap);
          // setFeaturesLayer(initalFeaturesLayer);
        }
    }, []);

    // update map if features prop changes - logic formerly put into componentDidUpdate
    useEffect(() => {
        // may be null on first render
        if (features.length && featuresLayer) {

        // set features to map
        featuresLayer.setSource(
            new VectorSource({
            features: features // make sure features is an array
            })
        );

        // fit map to feature extent (with 100px of padding)
        map?.getView().fit(featuresLayer.getSource().getExtent(), {
            padding: [100, 100, 100, 100]
        });
        }
    }, [features]); //featuresLayer, map

    return (
        <MapBox ref={mapElement}></MapBox>
    )
}