import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  let props = await pb.collection('posts').getList(1, 50, {sort: '-created'})

  const articles = []
  for (const post of props.items) {
    const author = await pb.collection('users').getOne(post.author).then((user) => user.username)
    const created = new Date(post.created).toISOString().split('T')[0]
    const article = {
      'authorId': post.author,
      'title': post.title,
      'body': post.body,
      'created': created,
      'id': post.id,
      'description': post.description,
      'authorName': author
    }
    articles.push(article)
  }

  return { articles }
}