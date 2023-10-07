import { pb } from "$lib/utils/pocketbase";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  let props = await pb.collection('posts').getList(1,50)

  return { props }
}