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
    <div
      role="tooltip"
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
      <Icon icon="pixelarticons:logout" />
    </div>
    {#if showTooltip}
      <div class="absolute top-40 left-50" transition:fade={{ delay: 0, duration: 200 }}>
        <span class="">signed in as {$currentUser.username}</span>
      </div>
    {/if}
  {:else}
    <div transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
      <Icon icon="pixelarticons:login" />
    </div>
  {/if}
</button>
