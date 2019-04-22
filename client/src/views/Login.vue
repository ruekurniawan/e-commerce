<template>
  <b-container fluid> 
    <b-form @submit="onSubmit" v-if="show">
      
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input v-model="form.password" type="password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>


<script>
import axios from 'axios'
import Bus from '@/views/bus/event.js'
import { access } from 'fs';
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""  
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      console.log(this.form)
      evt.preventDefault();
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          email: this.form.email,
          password: this.form.password,
        }
      })
      .then(({data}) => {
        // console.log(data.access_token)
        // console.log('Masuk')
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('role', data.role)
        Bus.$emit('isLogin', false)
        this.$router.push('/')
        // }
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
};
</script>