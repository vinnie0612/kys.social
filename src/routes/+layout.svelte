<script>
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => {
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
  });
</script>

<main class="dark:bg-stone-900 dark:text-slate-400 transition bg-slate-400 text-stone-900">
  <div id="app" class="hidden h-screen w-screen">
    <slot />
  </div>
</main>
