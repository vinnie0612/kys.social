<script lang="ts">
  import { page } from '$app/stores';

  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';

  import Gun from '$lib/components/Gun.svelte';
</script>

<div class="flex justify-center w-full items-center">
  <div class="items-center justify-center">
    <Gun classes="flex justify-center" />
    <div class="flex flex-col">
      <div class="flex flex-row justify-between">
        <p class="text-3xl ml-1">
          {$page.status}
        </p>
        <p class="text-3xl mr-1 italic">
          {$page.error ? $page.error.message.toLowerCase() : null}
        </p>
      </div>
      <h1 class="text-3xl lg:text-5xl text-center">something went wrong</h1>
      <h1 class="text-4xl lg:text-6xl text-center">thanks to you</h1>
      <a class="text-center text-2xl underline" href="/">take me home</a>
    </div>
  </div>

  <ColorThemeToggle display={false} />
</div>
