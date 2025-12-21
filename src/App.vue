<script setup>
import{ref, reactive} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// 包在ref()裡面的原因就是為了"即時更新"
const count = ref(0)
const list = ref(['#fa0', 'red', 'blue'])
const addCount = ()=> {
  count.value++
}
const pushList = ()=>{
  list.value.push('#999')
}

const url = ref('https://www.google.com/?hl=zh_TW')

const changeUrl = ()=>{
  url.value = 'https://www.pinterest.com/'
}

// reactive
const user = reactive({
  name: 'NLee',
  blog: 'test'
})

const rename = ()=> {
  user.name = 'Ricky'
}

const updateUser = ()=>{
  user.name = 'en'
  user.blog = 'create'
}
</script>

<template>
  <!-- <p :style="{color:list[count]} || 'green'">{{ count}}</p>
  <br>
  <button @click="count++" :disabled="count>list.length-1">增加數量</button>
  <button @click="addCount">增加數量2</button>
  <hr>
  {{ list }}
  <br>
  <button @click="pushList">加長陣列</button>
  <hr> -->

  <!-- reactive -->
  <!-- {{ user['name']}}
  {{ user.blog }}
  <br>
  <button @click="rename">重新命名</button>
  <button @click="updateUser">換人</button> -->

  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <!-- <HelloWorld msg="NLEE!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/product-1">Product-1</RouterLink>
        <RouterLink to="/user">User</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
