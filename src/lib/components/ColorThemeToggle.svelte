<script lang="ts">
  import Icon from '@iconify/svelte';
  import { darkMode, toggleDarkMode } from '$lib/utils/colorscheme';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let display = true;


</script>

{#if display}
  <button on:click={toggleDarkMode}>
    {#if $darkMode}
      <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
        <Icon icon="pixelarticons:moon" />
      </div>
    {:else}
      <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
        <Icon icon="pixelarticons:sun" />
      </div>
    {/if}
  </button>
{/if}
