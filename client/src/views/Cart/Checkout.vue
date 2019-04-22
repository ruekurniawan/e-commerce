<template>
  <div>
    
    <b-form @submit.prevent="onSubmit">
      
        <b-form-input id="input-1" v-model="nama" type="text" required placeholder="Enter name"></b-form-input>
      
        <b-form-input id="input-2" type="text" v-model="alamat" required placeholder="Enter Address"></b-form-input>
      
        <b-form-input id="input-3" type="text" v-model="telepon" required placeholder="Enter Telp"></b-form-input>
      
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Checkout",
  data() {
    return {
      carts: {},
      
        nama: "",
        alamat: "",
        telepon: "",
      
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
    onSubmit() {
      // console.log(form, 'ini form')
      axios({
        method: 'POST',
        url: "http://localhost:3000/checkout",
        headers: {
          token: localStorage.getItem("token")
        }, data: {
          nama: this.nama,
          alamat: this.alamat,
          telepon: this.telepon,
        }
      })
      .then((data) => {
        console.log(data)
          this.$router.replace({path: '/'})
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

