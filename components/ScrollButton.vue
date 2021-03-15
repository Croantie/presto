<template>
  <a class="button" href="#about" uk-scroll><i uk-icon="arrow-down" /></a>
</template>

<script>
export default {
  name: "ScrollButton"
}
</script>

<style scoped lang="scss">
  .button {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    background-color: #000912;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1.8em;
  }
</style>
