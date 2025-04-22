<script>
  import OSM from "ol/source/OSM";
  import TileLayer from "ol/layer/Tile";
  import { onMount } from "svelte";
  import Point from "ol/geom/Point.js";
  import Map from "ol/Map";
  import View from "ol/View";
  import LayerGroup from "ol/layer/Group";
  import VectorLayer from "ol/layer/Vector";
  import VectorSource from "ol/source/Vector";
  import GeoJSON from "ol/format/GeoJSON";
  import { apply } from "ol-mapbox-style";
  import "ol/ol.css";
  import MapCardHolder from "./MapCardHolder.svelte";
  import { Style, Circle as CircleStyle, Fill, Stroke } from "ol/style";
  import gardens from "../../assets/gardens.json";
  import { currentMapState } from "../state.svelte";
  import { fromLonLat } from "ol/proj";

//   const key = "xzHYzv10Mfc1eJ8Vbizl";
//   const styleJson = `https://api.maptiler.com/maps/topo-v2/style.json?key=${key}`;

  let mapElement;
  let map;

  const gardenStyles = {
    "NUBIA's Dixwell Garden": "#21A19D",
    "Friends of Egleston Square Library Food Forest and Gardens": "#37441D",
    "Peace Garden": "#92B96E",
    "Egleston Community Orchard": "#3A3847",
    "NUBIA's Dimock Garden": "#B8882E",
    "Robert G. Lawson Park": "#71B788",
    "Mendell School Garden": "#C6DCC8",
  };

  const getIcon = (feature) => {
    const name = feature.get("garden"); 
    const color = '#006400';

    return new Style({
      image: new CircleStyle({
        radius: 16,
        fill: new Fill({ color }),
        stroke: new Stroke({ color: "#fff", width: 4 }),
      }),
    });
  };

  let pathSource = new VectorSource();
  let pathLayer = new VectorLayer({
    source: pathSource,
    style: getIcon,
  });

//   let backgroundLayer = new LayerGroup();
  let foregroundLayer = new LayerGroup({ layers: [pathLayer] });
  const baseLayer = new TileLayer({
    source: new OSM(),
  });

  let view = new View({
    center: fromLonLat([-71.1, 42.315]),
    zoom: 15,
  });

  $effect(() => {
    const garden = gardens[currentMapState.currentIndex];
    fetch(`/gardens.geojson`)
      .then((response) => response.json())
      .then((geojson) => {
        let p = Math.min(window.innerWidth, window.innerHeight);
        pathSource.addFeatures(
          new GeoJSON().readFeatures(geojson, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857",
          })
        );
        view.fit(new Point(fromLonLat([garden["long"], garden["lat"]])), {
          padding: [p, p, p, p],
          duration: 500,
          maxZoom: 18,
        });
      });
  });

  onMount(() => {
    map = new Map({
      target: mapElement,
      layers: [baseLayer, foregroundLayer],
      view: view,
    });

    // apply(backgroundLayer, styleJson);
  });
</script>

<div class="w-screen h-screen absolute">
  <div bind:this={mapElement} class="w-full h-full"></div>
  <div class="absolute bottom-2 w-full">
    <MapCardHolder />
  </div>
</div>

<style>
</style>
