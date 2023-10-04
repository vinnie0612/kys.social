import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

export const pb = new PocketBase('https://kys.social/api');

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  currentUser.set(pb.authStore.model);
});