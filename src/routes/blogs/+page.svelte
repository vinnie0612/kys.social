<script lang="ts">
  import Navbar from '$lib/components/navbar/Navbar.svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';
</script>

<div id="app" class=" items-center justify-center h-full flex-col">
  <Navbar />
  <h2>hello world</h2>
</div>

<ColorThemeToggle display={false} />
