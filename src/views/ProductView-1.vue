<script setup>
// 引用所有會用到的套件
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import axios from 'axios'

// 圖片引入方式1 - for assets
import productImg1 from '@/assets/img/product_01.jpg'
import productImg2 from '@/assets/img/product_02.jpg'

// 解析 icon 圖片路徑(要先確認.vue的位置)
const parseAssetsIcon = (fileName) => {
  return new URL(`../assets/img/${fileName}`, import.meta.url).href
}

// 設定根目錄
const baseURL = import.meta.env.BASE_URL


// const productList = ref([
//   {
//     id: 2,
//     title: 'Mens Casual Premium Slim Fit T-Shirts ',
//     price: 22.3,
//     description: 'Slim-fitting style',
//     category: "men's clothing",
//     image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 4,
//     title: 'Mens Casual Slim Fit',
//     price: 15.99,
//     description: 'The color could be slightly',
//     category: "men's clothing",
//     image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
// ])

import Card from '@/components/Card.vue'
import BasicButton from '@/components/BasicButton.vue'
const productList = ref([])


// 快速計算陣列數量
const listCount = computed(() => {
  return productList.value.length
})

// 判斷有無資料
const noData = computed(() => {
  return productList.length === 0
})

// 把獲取資料寫進一個函式中
const fetchData = () => {
  // debugger
  axios
    // 從哪裡取得資料
    .get(`${baseURL}data/product.json`)
    // 然後回傳什麼值
    .then((response) => {
      // handle success
      // 用productList去接回傳值
      productList.value = response.data
      // 為了讓resultList裡面還是有預設顯示的資料(給透過按按鈕搜尋的那個方法使用的!)
      // resultList.value = response.data
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
}

// onMounted()
// debugger
onMounted(() => {
  fetchData()
})
// onMounted(() => {
//   // debugger
//   axios
//     // 從哪裡取得資料
//     .get('https://fakestoreapi.com/products')
//     // 然後回傳什麼值
//     .then((response) => {
//       // handle success
//       // 用productList去接回傳值
//       productList.value = response.data
//     })
//     .catch((error) => {
//       // handle error
//       console.log(error);
//     })
//     .finally(() => {
//       // always executed
//     });

// })

let btnList = ref(['衣服', '褲子', '襪子'])

const searchStr = ref('')
const colors = ref('#eee')
const fontSizeValue = ref(20)

// 透過按按鈕(綁定@click)來獲得搜尋結果
// const resultList = ref([])
// const search = ()=>{
//   resultList.value = productList.value.filter((product)=>{
//     return product.title.toLowerCase().includes(searchStr.value.toLowerCase())
//   })
// }

// 即時、快速篩選搜尋結果
const resultList = computed(() => {
    return productList.value.filter((product) => {
      return product.title.toLowerCase().includes(searchStr.value.toLowerCase())
  })
})

</script>

<template>
  <h2 class="main-title" :style="{ fontSize: `${fontSizeValue}px` }">商品列表</h2>
  <input type="text" v-model="searchStr">{{ searchStr }}
  <button @click="search">查詢</button>
  <br>
  <input type="color" v-model="colors">{{ colors }}
  <input type="number" v-model="fontSizeValue">{{ fontSizeValue }}
  <!-- 圖片引入方式1 - for assets-->
  <!-- <img v-for="img in 2" :src="productImg1"> -->

  <!-- 圖片引入方式2 - only assets-->
  <!-- <img src="@/assets//img/product_01.jpg"> -->
  <!-- 圖片引入方式3 - for public-->
  <!-- <img :src="`${baseURL}public/img/product_03.jpg`"> -->

  <Swiper :slides-per-view="3" :space-between="20">
    <SwiperSlide v-for="product in productList" :key="product.id">
      <!-- slot測試 -->
      <Card>
        <template #title>
          {{ product.title }}
        </template>
        {{ product.price }}
        <template #footer>
          footer
        </template>
      </Card>
      <!-- <img :src="parseAssetsIcon('product_02.jpg')"> -->
      <!-- <BasicButton :title="product.title" type="round"/> -->
    </SwiperSlide>
  </Swiper>
  <BasicButton title="大按鈕" size="large" type="round" />
  <BasicButton title="小按鈕" size="small" />
  <BasicButton v-for="btn in btnList" :key="btn" :title="btn" />
  <p>商品總數:{{ resultList.length }}</p>
  <div v-if="noData">沒有資料</div>
  <div v-else>
    <article class="card" v-for="product in resultList" :style="{ 'backgroundColor': colors }">
      <div>
        <img :src="product.image" class="product-img" />
      </div>
      <div class="content">
        <div class="product-title">
          <h3>{{ product.title }}</h3>
        </div>
        <div class="product-category">
          <p>{{ product.category }}</p>
        </div>
        <div class="product-desc">
          <p>{{ product.description }}</p>
        </div>
        <div class="product-detail">
          <p>單價:{{ '$' + product.price }}</p>
          <!-- ?是一個保護機制，如果沒有rating的話，就會取後面設的預設值 -->
          <p>
            評分:{{ product.rating?.rate || 0 }}
            <span v-for="star in Math.round(product.rating?.rate || 0)">❤️</span>
            <span>({{ product.rating.count }})</span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main-title {
  padding: 16px 0;
  font-weight: 700;
}

.card {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  margin-bottom: 16px;
  background-color: #eee;

  .product-img {
    width: 100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .product-detail {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

.card:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
</style>
