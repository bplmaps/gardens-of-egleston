<script>
  let { direction = 'left', onclick } = $props();
</script>

<button class="rounded-full p-2 bg-blue-200 border-2 border-blue-800 hover:bg-orange-400 transition-colors cursor-pointer" onclick={onclick}>
  {#if direction === 'left'}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  {/if}
</button>
