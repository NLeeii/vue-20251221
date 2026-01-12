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
      // userList.value = response.data
      const result = response.data
      userList.value = result
    })
})

const nameKey = 'Ricky'
const person = {
  name: 'NLEE',
  age: 22,
  isStudent: false,
  greet: function (val1, val2) {
    return `Hello, my name is ${this.name}__${val1}__${val2}`
  },
  brithYear: () => {
    // 今年
    const current = new Date().getFullYear()
    return current - person.age
  }
}
// console.log(person.greet(2, 3));
// console.log(person.brithYear());

const keyWord = ref('')
const getInput = (e) => {
  // console.log(e.target.value);
  keyWord.value = e.target.value
}

const resultList = ref([])
const search = () => {
  resultList.value = userList.value.filter((user) => {
    // return user.username === keyWord.value

    // 模糊比對.includes()
    return user.username.includes(keyWord.value)
  })
}

</script>

<template>
  <input type="text" placeholder="請輸入名稱" @input="getInput">
  <button @click="search">查詢</button>
  {{ keyWord }}
  <!-- {{ resultList }} -->
  <ol>
    <!-- 基本上使用v-for就要加上 :key ，並且:key要為唯一值 -->
    <li v-for="data in resultList" :key="data.id">
      <div class="avatar">☁</div>
      <div class="content">
        <p>姓名: {{ data.username }}</p>
        <p>email: {{ data.email }}</p>
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
ol {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
}

li {
  display: flex;
  gap: 16px;
  padding: 8px;
  background-color: #eee;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #888;
  border-radius: 5px;
  font-size: 28px;
  color: #555;
}
</style>