<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import ColorThemeToggle from '$lib/components/ColorThemeToggle.svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';

  import type { PageData } from '../$types';

  interface BlogsData extends PageData {
    articles: [
      {
        title: string;
        body: string;
        created: string;
        id: string;
        authorId: string;
        authorName: string;
        description: string;
      }
    ];
  }

  export let data: BlogsData;
  const articles = data.articles;
  console.log(articles);
</script>

<div id="app" class=" items-center justify-center h-full flex-col">
  <Navbar />
  <div class="mt-4 flex flex-col items-center gap-2">
    {#each articles as article}
      <ArticleCard {article} />
    {/each}
  </div>
</div>

<ColorThemeToggle display={false} />
