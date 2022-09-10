<script lang="ts">
  let count = 0

  const addOne = () => count += 1
</script>

<main>
Hi Christine

<button on:click={addOne}>count is {count}</button>
</main>
