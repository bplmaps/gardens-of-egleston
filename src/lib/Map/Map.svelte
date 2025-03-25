<script>
    import { onMount } from "svelte";

    import Map from "ol/Map";
    import View from "ol/View";
    import LayerGroup from "ol/layer/Group";
    import VectorLayer from "ol/layer/Vector";
    import VectorSource from "ol/source/Vector";
    import GeoJSON from "ol/format/GeoJSON";
    import { apply } from "ol-mapbox-style";
    import "ol/ol.css";
    import MapCardHolder from "./MapCardHolder.svelte";

    import trails from "../../assets/trails.json";
    import { currentMapState } from "../state.svelte";

    const key = "xzHYzv10Mfc1eJ8Vbizl";
    const styleJson = `https://api.maptiler.com/maps/topo-v2/style.json?key=${key}`;

    let mapElement;
    let map;

    let pathSource = new VectorSource();
    let pathLayer = new VectorLayer({
        source: pathSource,
        style: [
            {
                "stroke-color": "rgba(255,255,255,0.7)",
                "stroke-width": 14,
                "stroke-opacity": 0.2,
            },
            {
                "stroke-color": "purple",
                "stroke-width": 5,
            },
        ],
    });

    let backgroundLayer = new LayerGroup();
    let foregroundLayer = new LayerGroup({ layers: [pathLayer] });

    let view = new View({
        center: [-7910487.16649, 5215011.801042],
        zoom: 15,
    });

    $effect(() => {
        const trail = trails[currentMapState.currentIndex];
        fetch(`/public/${trail.path_geojson}`)
            .then((response) => response.json())
            .then((geojson) => {
                let p = Math.min(window.innerWidth, window.innerHeight) / 5;
                pathSource.clear();
                pathSource.addFeatures(
                    new GeoJSON().readFeatures(geojson, {
                        dataProjection: "EPSG:4326",
                        featureProjection: "EPSG:3857",
                    }),
                );
                view.fit(pathSource.getExtent(), {
                    padding: [p, p, p, p],
                    duration: 1000,
                });
            });
    });

    onMount(() => {
        map = new Map({
            target: mapElement,
            layers: [backgroundLayer, foregroundLayer],
            view: view,
        });

        apply(backgroundLayer, styleJson);
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
