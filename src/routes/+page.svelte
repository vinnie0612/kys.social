<script lang="ts">
  import { onMount } from 'svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';
  import TitleAnimation from '$lib/components/TitleAnimation.svelte';

  import Icon from '@iconify/svelte';
  import Gun from '$lib/components/Gun.svelte';

  onMount(() => {
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
  });
</script>

<main class="dark:bg-stone-900 dark:text-slate-400 transition bg-slate-400 text-stone-900 h-full">
  <div id="app" class="hidden items-center justify-center h-full flex-col">
    <Gun />
    <TitleAnimation />
    <div class="mt-1 flex flex-row lg:text-5xl text-4xl items-center">
      <a href="/blogs">
        <Icon icon="pixelarticons:archive" />
      </a>
      <a href="https://mail.kys.social">
        <Icon icon="pixelarticons:at" />
      </a>
      <ColorThemeToggle />
    </div>
  </div>
</main>
