<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';

  import { darkMode } from '$lib/utils/colorscheme';

  onMount(() => {
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
  });
  
  let isDarkMode = false;
  darkMode.subscribe((value) => {
    console.log(value);
    isDarkMode = value;
  });
</script>

<main class:dark={isDarkMode}>
  <div
    id="app"
    class="dark:bg-stone-900 dark:text-slate-400 transition bg-slate-400 text-stone-900 hidden h-screen w-screen"
  >
    <slot />
  </div>
</main>
