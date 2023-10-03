<script lang="ts">
  import { browser } from '$app/environment';
  import Icon from '@iconify/svelte';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let display = true;

  let darkMode = false;

  onMount(() => {
    if (browser) {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (darkMode) {
        document.body.classList.add('dark');
        darkMode = true;
      }
    }
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
    app?.classList.add('flex');
  });

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark');
  };
</script>

{#if display}
<button on:click={toggleDarkMode}>
  {#if darkMode}
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
