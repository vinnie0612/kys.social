<script lang="ts">
  import { onMount } from 'svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';
  import TitleAnimation from '$lib/components/TitleAnimation.svelte';

  import gun from '$lib/images/gun_lg.png';

  onMount(() => {
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
  });
</script>

<main class="dark:bg-stone-900 dark:text-slate-400 bg-slate-400 text-stone-900 h-full">
  <div id="app" class="hidden items-center justify-center h-full flex-col">
    <img src={gun} width="130" alt="" />
    <TitleAnimation />
    <h2 class="text-2xl">soon...</h2>
    <a href="/" class="text-xl underline">back to home</a>
  </div>
  <ColorThemeToggle display={false} />
</main>
