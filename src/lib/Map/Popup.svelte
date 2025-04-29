<!-- src/lib/Popup.svelte -->

<script>
    export let visible = false;
    export let photos = [];
    export let index = 0;
    export let onNext = () => {};
    export let onPrev = () => {};
    export let onClose = () => {};
  </script>
  
  {#if visible}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-4 w-96 relative">
      <button class="absolute top-2 right-2 text-gray-500 hover:text-black" on:click={onClose}>
        ✕
      </button>
  
      {#if photos.length > 0}
        <img src={`/assets/photos/${photos[index]}`} alt="Photo" class="w-full rounded-md mb-4" />
  
        <div class="flex justify-between">
          <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" on:click={onPrev}>
            ◀ Prev
          </button>
          <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" on:click={onNext}>
            Next ▶
          </button>
        </div>
      {:else}
        <p>No photos available.</p>
      {/if}
    </div>
  </div>
  {/if}
  