<template>
  <div class="container">
    <b-form @submit.prevent="addProduct">
      <b-card-group deck>
        <b-form-group>
          <b-card-text>
            <h5>Name Product</h5>
            <b-form-input v-model="name"></b-form-input>
            <h5>Price</h5>
            <b-form-input v-model="price"></b-form-input>
            <h5>Stock</h5>
            <b-form-input v-model="stock"></b-form-input>
          </b-card-text>
          <!-- Styled -->
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form-group>
        <!-- </b-card> -->
      </b-card-group>
    </b-form>
  </div>
</template>


<script>
import ProductVue from './Product.vue';
export default {
  name: 'Admin',
   data() {
    return {
      name: "",
      price: "",
      stock: "",
      file: "",
      allProducts: []
    };
  },
  methods : {
    addProduct() {
      // console.log('masuk add ')
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("stock", this.stock);
      formData.append("image", this.file);
      // console.log(formData);
      axios({
        method: "POST",
        url: "http://localhost:3000/products",
        data: formData,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(data => {
          console.log("Masuk");
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    if(localStorage.getItem('role') !== 'admin') {
      this.$router.push('/')
      console.log('maaf anda bukan admin')
    }
  }
}
</script>

<style>

</style>
