<script>
  import TrailsOutline from "./TrailsOutline.svelte";
  let active = $state(false);

  function toggleActive() {
    active = !active;
  }

  let archives = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 2 24 24" stroke="currentColor"><path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  let images = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 -2 18 24" stroke="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H15V15H1V1ZM6 9L8 11L13 6V13H3V12L6 9ZM6.5 7C7.32843 7 8 6.32843 8 5.5C8 4.67157 7.32843 4 6.5 4C5.67157 4 5 4.67157 5 5.5C5 6.32843 5.67157 7 6.5 7Z" fill="#000"/></svg>`;
  let videos = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 -2 18 24" stroke="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V14H16V2ZM6.5 5V11H7.5L11 8L7.5 5H6.5Z" fill="#000"/></svg>`;
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
          <div
            class="text-center text-4xl text-yellow-900 uppercase font-black tracking-widest"
          >
            Gardens of Egleston
          </div>
        </div>
        <div class="m-3 text-center text-sm sm:mt-5">
          <p class="mb-4">
            Use this map to view neighborhood gardens in Boston's Egleston Square.
            You can:
          </p>
          <ul class="space-y-2 text-sm italic">
            <li class="flex items-center">
              <span class="bg-gray-200 rounded-lg text-xs mr-2 p-2">
                {@html videos}
              </span>
              <span>Watch interviews with gardeners</span>
            </li>
            <li class="flex items-center">
              <span class="bg-gray-200 rounded-lg text-xs mr-2 p-2">
                {@html images}
              </span>
              <span>See more garden photographs</span>
            </li>
            <li class="flex items-center">
              <span class="bg-gray-200 rounded-lg text-xs mr-2 p-2">
                {@html archives}
              </span>
              <span>Read more about the garden</span>
            </li>
          </ul>
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
          A project of the <a
            class="text-blue-900 hover:text-blue-600 transition-colors"
            href="https://leventhalmap.org"
            target="_blank"
            >Leventhal Map & Education Center at the Boston Public Library</a
          >, for
          <a
            class="text-blue-900 hover:text-blue-600 transition-colors"
            href="https://gardensofegleston.org/"
            target="blank">Gardens of Egleston</a
          >
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
