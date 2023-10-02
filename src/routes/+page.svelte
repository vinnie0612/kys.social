<script lang="ts">
  const letters = 'abcdefghijklmnopqrstuvxyz.';

  let interval: any = null;
  let text: string = 'kys.social';
  let oText: string = text;

  function handleHover(): void {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      text = text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return oText[index];
          }

          return letters[Math.floor(Math.random() * text.length)];
        })
        .join('');

      if (iteration >= oText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 10);
  }
</script>

<main class="bg-stone-900 text-white h-full">
  <div class="flex items-center justify-center h-full flex-col">
    <h1 class="text-6xl" on:mouseover={handleHover} on:focus>{text}</h1>
    <h2 class="text-3xl">pull the trigger</h2>
  </div>
</main>
