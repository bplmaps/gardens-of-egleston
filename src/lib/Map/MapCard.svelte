<script>
    import { currentMapState } from "../state.svelte";
    import gardens from "../../assets/gardens.json";
    import { fade, slide } from 'svelte/transition';
    import CarouselButton from "../UI/CarouselButton.svelte";

    let { garden } = $props();

    let scrolled = $state(false);

    function handleScroll(event) {
        scrolled = event.target.scrollTop > 0;
    }
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
  
    let socials = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`
    let contact = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>`
    let archives = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 2 24 24" stroke="currentColor"><path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    let images = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 -2 24 24" stroke="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H15V15H1V1ZM6 9L8 11L13 6V13H3V12L6 9ZM6.5 7C7.32843 7 8 6.32843 8 5.5C8 4.67157 7.32843 4 6.5 4C5.67157 4 5 4.67157 5 5.5C5 6.32843 5.67157 7 6.5 7Z" fill="#000"/></svg>`
    let videos = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 -2 24 24" stroke="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V14H16V2ZM6.5 5V11H7.5L11 8L7.5 5H6.5Z" fill="#000"/></svg>`

</script>

<div
  class="bg-gray-100 rounded-lg border-4 border-gray-200 shadow-lg max-h-[30vh] overflow-y-scroll"
  onscroll={handleScroll}
>
    {#if scrolled}
    <div 
        class="sticky top-0 z-20 bg-gray-100 drop-shadow-md px-4 py-2 flex justify-between items-center"
        in:slide={{ y: -10 }}
    >
        <div class="flex flex-row items-center justify-center gap-2">
            <div class="hidden lg:contents bg-gray-200 rounded-lg text-xs p-2 max-h-8 w-10 m-4">
                <i class="mr-4">{currentMapState.currentIndex+1}/{gardens.length}</i>
            </div>
            <div class="hidden md:contents text-sm font-semibold w-sm">
                <h2>{garden.garden}</h2>
            </div>
        </div>
        
        <div class="justify-center items-center flex flex-row gap-2">
            <div class="mx-auto flex">
                <div class="mr-2 pointer-events-auto">
                  <CarouselButton direction="left" onclick={next} />
                </div>
                <div class="ml-2 mr-4 pointer-events-auto">
                  <CarouselButton direction="right" onclick={previous} />
                </div>
            </div>
            <a href={garden.socials} target="_blank" class="hidden w-8 hover:bg-blue-700 text-xs bg-blue-500 text-white px-2 py-1 rounded-md font-semibold flex gap-1">
                {@html socials}
            </a>
            <a href={garden.contact} target="_blank" class="hidden w-8 hover:bg-pink-700 text-xs bg-pink-500 text-white px-2 py-1 rounded-md font-semibold flex gap-1">
                {@html contact}
            </a>
            <a href={garden.archives} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8  flex hover:invert-100">
                {@html archives}
            </a>
            <a href={garden.images} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8 flex hover:invert-100">
                {@html images}
            </a>
            <a href={garden.videos} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8 flex hover:invert-100">
                {@html videos}
            </a>
        </div>
    </div>
    {:else}
    <div class="text-center" out:slide={{ y: -10 }}>
        <h1 class="justify-center text-lg md:text-2xl lg:text-2xl font-bold my-2">{garden.garden}</h1>
        
        <div class="justify-center flex flex-row md:flex-row sm:flex-row gap-2 items-center">
            <div class="mr-2 pointer-events-auto">
                <CarouselButton direction="left" onclick={next} />
              </div>
            <a href={garden.socials} target="_blank" class="w-8 max-h-6 lg:w-28 hover:bg-blue-700 text-xs bg-blue-500 text-white px-2 py-1 rounded-md font-semibold flex gap-1">
                <p class="hidden lg:block">Learn More</p>
                {@html socials}
            </a>
            <a href={garden.contact} target="_blank" class="w-8 max-h-6 lg:w-24 hover:bg-pink-700 text-xs bg-pink-500 text-white px-2 py-1 rounded-md font-semibold flex gap-1">
                <p class="hidden lg:block">Contact</p>
                {@html contact}
            </a>
            <div class="ml-2 pointer-events-auto">
                <CarouselButton direction="right" onclick={previous} />
              </div>
        </div>
        <div class="justify-center flex flex-row md:flex-row sm:flex-row my-4 gap-2">
            <i class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-10 md:w-10 lg:w-10">{currentMapState.currentIndex+1}/{gardens.length}</i>
            <a href={garden.archives} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8 lg:w-24 flex hover:invert-100">
                {@html archives}
                <p class="mx-1 hidden lg:block">Archives</p>
            </a>
            <a href={garden.images} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8 lg:w-24 flex hover:invert-100">
                {@html images}
                <p class="mx-1 hidden lg:block">Images</p>
            </a>
            <a href={garden.videos} target="_blank" class="bg-gray-200 rounded-lg text-xs mr-2 p-2 max-h-8 w-8 lg:w-24 flex hover:invert-100">
                {@html videos}
                <p class="mx-1 hidden lg:block">Videos</p>
            </a>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
    </div>
    {/if}
    <div class={`items-start flex flex-col-reverse sm:flex-row justify-center gap-4 px-4 ${scrolled ? 'my-16' : 'mt-2'}`}>
        <div class="lg:w-3/4 align-text-top">
            <img
                class="float-right ml-4 mb-2 w-[200px] rounded-md"
                alt={garden.alt}
                src="https://gardensofegleston.org/wp-content/uploads/2025/02/2024-08-07-19.56.14.jpg?w=1024"
            />
            <p>{garden.description}</p>
            <p class="italic items-center justify-left gap-2 text-sm text-gray-500 mt-4">
                Photo caption with a <a href="..." class="text-blue-900 underline hover:text-blue-600 transition-colors">link to a source</a>
            </p>
        </div>
      </div>      
</div>