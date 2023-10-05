<script lang="ts">
  import { onMount } from 'svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';
  import TitleAnimation from '$lib/components/Title.svelte';
  import UserButton from '$lib/components/UserButton.svelte';

  import Icon from '@iconify/svelte';
  import Gun from '$lib/components/Gun.svelte';

  onMount(() => {
    const app = document.getElementById('app');
    app?.classList.remove('hidden');
  });
</script>

<div class="flex items-center justify-center h-full w-full">
  <div class="flex flex-col items-center">
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
      <UserButton />
    </div>
  </div>
</div>
