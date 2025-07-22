<script>
  import MapCard from "./MapCard.svelte";

  import gardens from "../../assets/gardens_20250722.json";

  import { currentMapState } from "../state.svelte";

</script>

<div
  class="w-[90vw] md:w-[60vw] mx-auto h-[30vh] flex items-end justify-center"
>
  <div class="flex items-center w-full">
    <div class="flex-grow">
      <MapCard garden={gardens[currentMapState.currentIndex]} />
    </div>
  </div>
</div>
