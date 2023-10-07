import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  let post = await pb.collection('posts').getOne(params.id)
  const created = new Date(post.created).toISOString().split('T')[0]
  const author = await pb.collection('users').getOne(post.author).then((user) => user.username)
  const article = {
    'authorId': post.author,
    'title': post.title,
    'body': post.body,
    'created': created,
    'id': post.id,
    'description': post.description,
    'authorName': author
  }
  return { article }
}
