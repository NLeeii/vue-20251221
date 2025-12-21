<script setup>
import { ref, computed, onMounted } from 'vue'
const productList = ref([
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description: 'The color could be slightly',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
])

// 快速計算陣列數量
const listCount = computed(()=>{
  return productList.value.length
})

// 判斷有無資料
const noData = computed(()=>{
  return productList.length === 0
})

// onMounted()
// debugger
onMounted(()=>{
  // debugger
})
</script>

<template>
  <h2 class="main-title">商品列表</h2>
  <p>商品總數:{{listCount}}</p>
  <div v-if="noData">沒有資料</div>
  <div v-else>
    <article class="card" v-for="product in productList">
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
}
</style>
