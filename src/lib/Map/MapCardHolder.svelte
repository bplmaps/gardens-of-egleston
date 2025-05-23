<script>
  import MapCard from "./MapCard.svelte";
  import CarouselButton from "../UI/CarouselButton.svelte";

  import gardens from "../../assets/gardens.json";

  import { currentMapState } from "../state.svelte";

  function next() {
    currentMapState.currentIndex =
      currentMapState.currentIndex === 0
        ? gardens.length - 1
        : currentMapState.currentIndex - 1;
  }

  function previous() {
    currentMapState.currentIndex =
      currentMapState.currentIndex === gardens.length - 1
        ? 0
        : currentMapState.currentIndex + 1;
  }
</script>

<div
  class="w-[90vw] md:w-[60vw] mx-auto h-[30vh] flex items-end justify-center"
>
  <div class="mr-2 mb-2">
    <CarouselButton direction="left" onclick={next} />
  </div>
  <div class="ml-2 mb-2">
    <CarouselButton direction="right" onclick={previous} />
  </div>
</div>
<div
  class="w-[90vw] md:w-[60vw] mx-auto h-[30vh] flex items-end justify-center"
>
  <div class="flex items-center w-full">
    <div class="flex-grow">
      <MapCard garden={gardens[currentMapState.currentIndex]} />
    </div>
  </div>
</div>
