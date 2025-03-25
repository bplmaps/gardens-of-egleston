<script>
    import MapCard from "./MapCard.svelte";
    import CarouselButton from "../UI/CarouselButton.svelte";

    import trails from "../../assets/trails.json";

    import { currentMapState } from "../state.svelte";

    function nextMap() {
        currentMapState.currentIndex =
            currentMapState.currentIndex === 0
                ? trails.length - 1
                : currentMapState.currentIndex - 1;
    }

    function previousMap() {
        currentMapState.currentIndex =
            currentMapState.currentIndex === trails.length - 1
                ? 0
                : currentMapState.currentIndex + 1;
    }
</script>

<div class="w-[90vw] md:w-[60vw] mx-auto h-[30vh] flex items-end justify-center">
    <div class="flex items-center w-full">
        <div class="mr-2">
            <CarouselButton direction="left" onclick={previousMap} />
        </div>
    <div class="flex-grow">
        <MapCard trail={trails[currentMapState.currentIndex]} />
    </div>
    <div class="ml-2">
            <CarouselButton direction="right" onclick={nextMap} />
        </div>
    </div>
</div>
