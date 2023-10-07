<script lang="ts">
  import type { PageData } from '../$types';
  import Navbar from '$lib/components/Navbar.svelte';

  interface BlogData extends PageData {
    article: {
      title: string;
      body: string;
      created: string;
      id: string;
      authorId: string;
      authorName: string;
      description: string;
    };
  }

  export let data: BlogData;
  const article = data.article;

  console.log(article);
</script>

<Navbar />
<article class="flex justify-center">
  <div class="max-w-3xl mt-3">
    <div class="flex flex-row justify-between items-center">
      <h1 class="text-5xl">{article.title}</h1>
      <p class="text-3xl">By {article.authorName} on {article.created}</p>
    </div>
    <p class="text-2xl">{article.description}</p>
    <div class="text-xl border border-stone-300 p-1 max-h-[75vh] overflow-auto">
      {@html article.body}
    </div>
  </div>
</article>
