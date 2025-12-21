<script setup>
import{ref} from 'vue'
const light = ref(false)
const switchLight = () => {
  light.value = !light.value
}
const target = ref('')
</script>

<template>
  <!-- {{target}} -->
  <br>
  <!-- 一個 '=' 為賦值號，左邊賦值給右邊 -->
  <button @click="target = 'A'">A</button>
  <button @click="target = 'B'">B</button>
  <button @click="target = 'C'">C</button>
  <!-- 三個 '=' 為'比較'，嚴格的相等比較 -->
  <!-- v-if -->
  <!-- <div class="card" v-if="target === 'A' ">A</div>
  <div class="card" v-else-if="target === 'B' ">B</div>
  <div class="card" v-else="target === 'C'">C</div> -->
  <!-- v-show -->
  <div class="card" v-show="target === 'A' ">A</div>
  <div class="card" v-show="target === 'B' ">B</div>
  <div class="card" v-show="target === 'C'">C</div>


  <!-- 開燈案例 -->
  <!-- <button @click="switchLight">燈光切換</button>
  <div class="card"
  :class="light? 'lightBg':'darkBg'"
  :style="{
    // 有兩種寫法:一種是'background-color'，另一種是backgroundColor小駝峰寫法
    'background-color': light? 'gold':'gray',
    color: light? 'gray':'#fff'}">
    {{ light? '開':'關' }}
  </div> -->
</template>

<!-- scoped不會影響到其他component，只會影響到.vue檔裡面的 -->
<style lang="css" scoped>
.card {
  margin-top: 10px;
  width: 50px;
  height: 50px;
  background-color: #eee;
  text-align: center;
  line-height: 50px;
}
</style>
