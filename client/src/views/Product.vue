<template>
  <div class="container">
    <!-- <b-form @submit.prevent="addProduct">
      <b-card-group deck>
        <b-form-group>
          <b-card-text>
            <h5>Name Product</h5>
            <b-form-input v-model="name"></b-form-input>
            <h5>Price</h5>
            <b-form-input v-model="price"></b-form-input>
            <h5>Stock</h5>
            <b-form-input v-model="stock"></b-form-input>
    </b-card-text>-->
    <!-- Styled -->
    <!-- <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-button type="submit" variant="primary">Submit</b-button>
    </b-form-group>-->
    <!-- </b-card> -->
    <!-- </b-card-group> -->
    <!-- </b-form> -->

    <div>
      <h5>List Product</h5>
      <div>
        <ul v-for="(productList, index) in allProducts" :key="index" class="list-unstyled">
          <b-img :src="productList.image" fluid alt="Fluid image"></b-img>
          <li>
            <span>Name Product:</span>
            {{productList.name}}
          </li>
          <li>
            <span>Harga:</span>
            {{productList.price}}
          </li>
          <li>
            <span>Stock:</span>
            {{productList.stock}}
          </li>
          <b-button @click="addCartProduct(productList._id)" variant="success">Add to cart</b-button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListProduct",
  data() {
    return {
      name: "",
      price: "",
      stock: "",
      file: "",
      allProducts: []
    };
  },

  methods: {
    // addProduct() {
    // console.log('masuk add ')
    // let formData = new FormData();
    // formData.append("name", this.name);
    // formData.append("price", this.price);
    // formData.append("stock", this.stock);
    // formData.append("image", this.file);
    // console.log(formData);
    //   axios({
    //     method: "POST",
    //     url: "http://localhost:3000/products",
    //     data: formData,
    //     headers: {
    //       token: localStorage.getItem("token")
    //     }
    //   })
    //     .then(data => {
    //       console.log("Masuk");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },

    readProduct() {
      axios({
        method: "GET",
        url: "http://localhost:3000/users/product",
        // headers: {
        //   token: localStorage.getItem("token")
        // }
      })
        .then(({ data }) => {
          // console.log(JSON.stringify(data));
          console.log(data)
          this.allProducts = data;
        })
        .catch(err => {
          console.log(err.response);
        });
    },

    addCartProduct(valueId) {
      // console.log(valueId)
      axios({
        method: "PUT",
        url: "http://localhost:3000/carts",
        data: {
          productId: valueId
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, 
  created() {
    // console.log(this.$router)
    if(localStorage.getItem('role') !== 'admin') {
      console.log('maaf anda bukan admin')
    }
    this.readProduct();
  },

};
</script>
