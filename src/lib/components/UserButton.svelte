<script>
  import Icon from '@iconify/svelte';

  import { pb, currentUser } from '$lib/utils/pocketbase';
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  const handleAuth = async () => {
    if ($currentUser) {
      pb.authStore.clear();
    } else {
      await pb.collection('users').authWithOAuth2({ provider: 'github' });
    }
  };

  let showTooltip = false;
</script>

<button on:click={handleAuth}>
  {#if $currentUser}
    <div class="relative">
      <div
        role="tooltip"
        class="absolute bottom-full left-1/2 transform -translate-x-1/2"
        transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
        on:mouseover={() => {
          showTooltip = true;
        }}
        on:focus={() => {
          showTooltip = true;
        }}
        on:mouseleave={() => {
          showTooltip = false;
        }}
      >
        <div class="bg-gray-800 text-white rounded-md p-2">
          <span>Signed in as {$currentUser.username}</span>
        </div>
      </div>
      <Icon icon="pixelarticons:logout" />
    </div>
    {#if showTooltip}
      <div
        class="absolute bottom-full left-1/2 transform -translate-x-1/2"
        transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
      >
        <div class="bg-gray-800 text-white rounded-md p-2">
          <span>Signed in as {$currentUser.username}</span>
        </div>
      </div>
    {/if}
  {:else}
    <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
      <Icon icon="pixelarticons:login" />
    </div>
  {/if}
</button>

  