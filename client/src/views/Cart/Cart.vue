<template>
  <div>
    <p>List Cart Products</p>
    <form>
      <ul v-for="(cartList, index) in carts.products" :key="index" class="list-unstyled">
        <b-img :src="cartList.image" fluid alt="Fluid image"></b-img>
        <li>
          <!-- {{cartList}} -->
          <span>Name:</span>
          {{cartList.name}}
        </li>
        <li>
          <span>Price: IDR</span>
          {{cartList.price}}
        </li>
        <li>
          <span>Quantity:</span>
          {{cartList.quantity}}
        </li>
        <b-button @click="minusCartProduct(cartList.productId)" variant="success">-</b-button>
      </ul>
      <p>total price: IDR {{carts.totalPrice}}</p>
    </form>
        <router-link to="/carts/checkout">Belanja</router-link>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      carts: {}
    };
  },
  created() {
    this.getUserCart();
  },

  methods: {
    getUserCart() {
      axios({
        method: "GET",
        url: "http://localhost:3000/carts",
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          // console.log(JSON.stringify(data));
          this.carts = data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    minusCartProduct(value) {
      console.log(value);
      axios({
        method: "DELETE",
        url: `http://localhost:3000/carts/${value}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(cartProducts => {
          // console.log('masuk')
          console.log(cartProducts);
          this.getUserCart();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

