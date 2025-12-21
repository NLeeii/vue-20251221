<script setup>
// 1. 載入套件
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 2. 定義資料
const userList = ref([])

// 3. 取得即時資料(在畫面都渲染完成後再去取資料)
onMounted(() => {
  axios
    .get('https://fakestoreapi.com/users')
    .then((response) => {
      userList.value = response.data
    })
})

</script>

<template>
  <ol>
    <li v-for="data in userList">
      <div class="avatar">☁</div>
      <div class="content">
        <p>姓名: {{ data.name.firstname }}.{{ data.name.lastname }}</p>
        <p>email: {{ data.email }}</p>
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
ol {
  padding: 24px 0;
}

li {
  display: flex;
  gap: 16px;
  padding: 8px;
  background-color: #eee;
  margin-bottom: 8px;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #888;
  font-size: 28px;
  color: #555;
}
</style>