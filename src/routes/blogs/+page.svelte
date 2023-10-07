<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';

  import type { PageData } from '../$types';

  interface BlogsData extends PageData {
    props: { items: [{ title: string; body: string; author: string }] };
  }

  export let data: BlogsData;
  const articles = data.props.items;
  console.log(articles);
</script>

<div id="app" class=" items-center justify-center h-full flex-col">
  <Navbar />
  {#each articles as article}
    <h1>{article.title}</h1>
  {/each}
</div>

<ColorThemeToggle display={false} />
