<script>
  import Gun from './Gun.svelte';
  import Icon from '@iconify/svelte';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let isMenuOpen = false;
</script>

<nav class="bg-stone-700 dark:bg-slate-600 flex justify-between items-center w-screen px-2 text-lg">
  <a href="/"> <Gun width={40} classes="py-1.5" /></a>

  <div class="flex flex-row">
    {#if isMenuOpen}
      <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
        <div class="items-center flex-row flex">
          <!-- <div class="flex items-center">
            <span>
              <input
                type="text"
                placeholder="Search"
                class="bg-stone-700 dark:bg-slate-600 focus:border-0 focus:outline-none"
              />
              <hr class="dark:bg-slate-400 bg-stone-900 w-full h-px border-0" />
            </span>
            <button class="ml-2">
              <Icon class="text-2xl" icon="pixelarticons:search" />
            </button>
          </div> -->
          <a href="/" class="ml-2">
            <Icon class="text-3xl" icon="pixelarticons:briefcase-account" />
          </a>
          <a href="/" class="ml-2">
            <Icon class="text-3xl" icon="pixelarticons:briefcase-account" />
          </a>
        </div>
      </div>
    {/if}
    <button
      class="pl-2"
      on:click={() => {
        isMenuOpen = !isMenuOpen;
      }}
    >
      {#if isMenuOpen}
        <Icon class="text-3xl" icon="pixelarticons:checkbox-on" />
      {:else}
        <Icon class="text-3xl" icon="pixelarticons:remove-box" />
      {/if}
    </button>
  </div>
</nav>
