<script>
  import RegularShape from "ol/style/RegularShape.js";
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
  import "ol/ol.css";
  import MapCardHolder from "./MapCardHolder.svelte";
  import { Style, Fill, Stroke } from "ol/style";
  import gardens from "../../assets/gardens.json";
  import { currentMapState } from "../state.svelte";
  import { fromLonLat } from "ol/proj";
  import Text from "ol/style/Text.js";
  import Icon from "ol/style/Icon.js";

  //   const key = "xzHYzv10Mfc1eJ8Vbizl";
  //   const styleJson = `https://api.maptiler.com/maps/topo-v2/style.json?key=${key}`;

  let mapElement;
  let map;
  let iconPath;

  // style options

  function setBgOptions(color) {
    return new RegularShape({
      points: 4,
      radius: 30,
      angle: Math.PI / 4,
      fill: new Fill({ color: color }),
      displacement: [0, 15],
    });
  }

  function setIconOptions(path, color) {
    return new Icon({
      src: path,
      anchor: [0.5, 0.9],
      height: 40,
      width: 40,
      color: color,
    });
  }

  function setTextOptions(f, fill, stroke, bgFill, bgStroke) {
    return new Text({
      text: f.get("garden"),
      font: "bold 14px system-ui, Avenir, Helvetica, Arial, sans-serif",
      fill: new Fill({ color: fill }),
      stroke: new Stroke({ color: stroke, width: 6 }),
      offsetY: 30,
      offsetX: 0,
      placement: "point",
      backgroundFill: new Fill({ color: bgFill }),
      backgroundStroke: new Stroke({ color: bgStroke, width: 4 }),
      padding: [4, 8, 4, 8],
    });
  }

  // normal and hovered style functions

  const normalStyle = (feature) => {
    const iconName = feature.get("icon");
    iconPath = `icons/${iconName}`;

    return [
      new Style({
        image: setBgOptions("#DEFCE2")
      }),
      new Style({
        image: setIconOptions(iconPath, "#DEFCE2"),
        text: setTextOptions(feature, "#000", "#F3F4F6", "#F3F4F6", "#E5E7EB"),
      }),
    ];
  };

  const hoverStyle = (feature) => {
    const iconName = feature.get("icon");
    iconPath = `icons/${iconName}`;

    return [
      new Style({
        image: setBgOptions("#FBDEF8"),
      }),
      new Style({
        image: setIconOptions(iconPath, "#FBDEF8"),
        text: setTextOptions(feature, "#000", "#F3F4F6", "#F3F4F6", "#E5E7EB"),
      }),
    ];
  };

  // define layers

  let pathSource = new VectorSource();
  let pathLayer = new VectorLayer({
    source: pathSource,
    style: normalStyle,
  });

  let foregroundLayer = new LayerGroup({ layers: [pathLayer] });
  const baseLayer = new TileLayer({
    source: new OSM(),
  });

  let view = new View({
    center: fromLonLat([-71.1, 42.315]),
    zoom: 15,
  });

  // handle view based on index

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
          maxZoom: 19,
        });
      });
  });

  // onMount

  onMount(() => {
    map = new Map({
      target: mapElement,
      layers: [baseLayer, foregroundLayer],
      view: view,
    });

    map.on("singleclick", function (evt) {
      map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        const geometry = feature.getGeometry();

        if (geometry) {
          const size = map.getSize();
          map.getView().fit(geometry, {
            duration: 500,
            padding: [50, 50, 50, 50],
            maxZoom: 19,
            size: size,
          });
        }

        const clicked = feature.get("garden");
        const index = gardens.findIndex((garden) => garden.garden === clicked);

        if (index !== -1) {
          currentMapState.currentIndex = index;
        }

      });
    });

    let hoveredFeature = null;

    map.on("pointermove", function (evt) {
      const pixel = map.getEventPixel(evt.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      map.getTargetElement().style.cursor = hit ? "pointer" : "";

      if (hoveredFeature) {
        hoveredFeature.setStyle(normalStyle(hoveredFeature));
        hoveredFeature = null;
      }

      map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        hoveredFeature = feature;
        feature.setStyle(hoverStyle(feature));
        return true;
      });
    });
  });

</script>

<div class="fixed inset-0 flex flex-col overflow-hidden">
  <header class="bg-white shadow z-10 px-4 py-3 text-sm md:text-base">
    <div class="max-w-screen-xl mx-auto">
      <a
        href="https://leventhalmap.org"
        class="font-semibold text-blue-500 hover:underline">LMEC</a
      >
      <span class="mx-2 text-gray-500">❯</span>
      <a
        href="https://www.leventhalmap.org/projects/grants-in-aid/"
        class="text-gray-800 hover:underline">Grants in Aid</a
      >
      <span class="mx-2 text-gray-500">❯</span>
      <i class="text-yellow-900 font-bold">Gardens of Egleston</i>
    </div>
  </header>

  <div class="flex-1 relative">
    <div bind:this={mapElement} class="absolute inset-0 z-0">
      <div
        id="popup"
        class="absolute bg-white rounded-lg shadow-lg p-2 text-sm hidden"
      ></div>
    </div>
    <div
      class="absolute bottom-6 w-full flex justify-center z-10 pointer-events-none"
    >
      <div class="pointer-events-auto">
        <MapCardHolder />
      </div>
    </div>
  </div>
</div>

<style>
</style>
