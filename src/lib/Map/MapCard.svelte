<script>
    import { currentMapState } from "../state.svelte";
    import gardens from "../../assets/gardens.json";

    let { garden } = $props();

</script>


<div class="bg-gray-100 rounded-lg border-4 border-gray-200 shadow-lg p-4 h-full max-h-[30vh] overflow-x-scroll">
    <div class="flex flex-col md:flex-row"><i class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8">{currentMapState.currentIndex+1}/{gardens.length}</i><h1 class="text-2xl font-bold">{garden.garden}</h1></div>
    <!-- <h2 class="text-1xl">{garden.highlight}</h2> -->
    <div class="flex flex-col md:flex-row my-4 gap-2">
        <a href={garden.socials} target="_blank" class="hover:bg-blue-700 text-xs bg-blue-500 text-white px-2 py-1 rounded-md font-semibold flex items-center gap-1">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
        <a href={garden.map} target="_blank" class="hover:bg-green-700 text-xs bg-green-500 text-white px-2 py-1 rounded-md font-semibold flex items-center gap-1">
            Get directions
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
        <a href={garden.contact} target="_blank" class="hover:bg-orange-700 text-xs bg-orange-500 text-white px-2 py-1 rounded-md font-semibold flex items-center gap-1">
            Contact
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
    </div>
    <p>{garden.description}</p>
</div>

