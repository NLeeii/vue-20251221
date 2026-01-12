<script setup>

</script>
<template>
  <div class="cardtest">
    <header>header</header>
    <div>
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot></slot>
      </p>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
  .cardtest {
    border: 1px solid #555;
    p {
      font-size: 12px;
      font-weight: bold;
      color: #18399b;
    }
  }
</style>