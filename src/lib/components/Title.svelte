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
        .map((_, index) => {
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

<h1 class="text-5xl lg:text-6xl" on:mouseover={handleHover} on:focus>{text}</h1>
