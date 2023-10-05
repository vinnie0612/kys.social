<script lang="ts">
  import gun from '$lib/images/gun_lg.png';

  export let classes = '';
</script>

<div class={classes}>
  <img src={gun} width="130" alt="" class="dark:invert transition" />
</div>

<style>
  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
</style>
