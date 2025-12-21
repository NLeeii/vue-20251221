<script setup>
import { ref } from 'vue'
const pageCount = ref(10)
const list = ref(['aaa', 'bbb', 'ccc'])
</script>

<template>
  <main>
    <h1>Product</h1>
    <button v-for="page in pageCount">第{{ page }}頁</button>
    <hr>
    <div v-for="item in list">{{ item }}</div>
  </main>
</template>

<style>
  button {
    margin-left: 3px;
  }
</style>
