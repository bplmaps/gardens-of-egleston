<script>
    import TrailsOutline from "./TrailsOutline.svelte";
    let active = $state(false);

    function toggleActive() {
        active = !active;
    }
</script>

<div class:hidden={active}>
    <div class="fixed inset-0 bg-gray-500/90 transition-opacity"></div>
    <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
        <div
            class="relative transform overflow-hidden rounded-lg bg-gradient-to-tr from-purple-100 to-gray-50 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
        >
            <div>
                <div>
                    <!-- <TrailsOutline /> -->
                    <div
                        class="text-center text-4xl text-yellow-900 uppercase font-black tracking-widest"
                    >
                        Gardens of Egleston
                    </div>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                    <p>Use this map to view the gardens in Boston's Egelston Square</p>
                </div>
            </div>
            <div class="mt-5 sm:mt-6">
                <button
                    type="button"
                    onclick={toggleActive}
                    class="inline-flex w-full justify-center rounded-md bg-orange-200 ring-2 text-lg px-3 py-2 font-semibold text-slate-900 shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >Discover gardens</button
                >
            </div>
            <div class="mt-4">
                <p class="text-xs text-center font-semibold">
                    A project of the <a class="text-blue-900 hover:text-blue-600 transition-colors"
                        href="https://leventhalmap.org"
                        target="_blank"
                        >Leventhal Map & Education Center at the Boston Public
                        Library</a
                    > for
                    <a class="text-blue-900 hover:text-blue-600 transition-colors" href="https://gardensofegleston.org/" target="blank">Gardens of Egleston</a>
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #f1dede;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
