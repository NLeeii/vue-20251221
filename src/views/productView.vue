<script setup>
import { ref } from 'vue'
const pageCount = ref(10)
const list = ref(['aaa', 'bbb', 'ccc'])
const fruits = ref(['apple', 'banana', 'melon'])
</script>

<template>
  <main>
    <h1>Product-頁面切換</h1>
    <button v-for="page in pageCount">第{{ page }}頁</button>
    <br>
    <h3>頁面排序</h3>
    <div v-for="item in list">{{ item }}</div>
    <hr>
    <h3>水果排序</h3>
    <div v-for="(fruit, index) in fruits">{{ index + 1 }}.{{ fruit }}</div>
    <h3>愛心列印</h3>
    <span v-for="num in Math.round(5.2)">❤️</span>
  </main>
</template>

<style>
  button {
    margin-left: 3px;
  }
</style>
