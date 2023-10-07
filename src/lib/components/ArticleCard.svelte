<script>
  export let article = {
    authorName: 'string',
    authorId: 'string',
    title: 'string',
    body: 'string',
    created: 'string',
    id: 'string',
    description: 'string'
  };
</script>

<div class=" bg-stone-800 w-screen p-6 max-w-3xl">
  <div class="flex flex-row justify-between items-center">
    <a href={`/blogs/${article.id}`}>
      <h1 class="text-3xl lg:text-5xl">{article.title}</h1>
    </a>
    <div class="flex flex-col">
      <a href={`/users/${article.authorId}`}>
        <p class="text-xl lg:text-2xl">{article.authorName}</p>
      </a>
      <p class="text-xl lg:text-2xl">{article.created}</p>
    </div>
  </div>
  <p class="text-lg">{article.description}</p>
</div>
