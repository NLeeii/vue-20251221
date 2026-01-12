<script setup>
// defineProps(['title', 'size', 'type'])

defineProps({
  title: {
    type: String,
    default: '按鈕'
  },
  size: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
})


</script>
<template>
  <button :class="[size,type]">
    {{ title }}
  </button>
</template>
<style lang="scss" scoped>
button {
  &.large {
    width: 100px;
  }
  &.small {
    width: 80px;
  } 
  &.round {
    border-radius: 50px;
  }
}
</style>