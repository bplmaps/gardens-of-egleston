<script>
    let { trail } = $props();
</script>


<div class="bg-gray-100 rounded-lg border-4 border-gray-200 shadow-lg p-4 h-full">
    <h1 class="text-2xl font-bold">{trail.name}</h1>
    <p>{trail.description}</p>
    <div class="flex mt-4 gap-2">
        <a href={trail.url} target="_blank" class="bg-blue-500 text-white px-2 py-1 rounded-md font-semibold flex items-center gap-1">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
        <p class="bg-gray-200 px-2 py-1 rounded-md font-light">{trail.distance}</p>
        <p class="bg-gray-200 px-2 py-1 rounded-md font-light">{trail.accessibility}</p>
    </div>
</div>

