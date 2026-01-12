<script setup>
// 列表
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
// 1. 定義資料
const productList = ref([])
// 2. 頁面渲染完畢去抓資料
onMounted(() => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      productList.value = response.data
    })
})
</script>

<template>
  <RouterLink v-for="item in productList" :key="item.id" :to="`/shopDetail/${item.id}`">
    商品詳情{{ item.id }}/商品名稱{{ item.title }}
  </RouterLink>
</template>

<style lang="scss" scoped>
a {
  display: block;
}
</style>