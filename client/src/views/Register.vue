<template>
  <b-container fluid>
    <form @submit="onSubmit">
      <input type="text" v-model="form.fullname">
      <input type="text" v-model="form.email">
      <input type="text" v-model="form.password">
      <button type="submit">Button</button>
    </form>
    <!-- <b-form @submit="onSubmit" v-if="show">

      <b-form-input id="input-group-3" label="fullname:" label-for="input-3">
        <b-form-select id="input-3" type="text" v-model="form.fullname" required></b-form-select>
      </b-form-input>
      <b-form-input id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-input>

      <b-form-input id="input-group-3" label="Password:" label-for="input-3">
        <b-form-select id="input-3" type="password" v-model="form.password" required></b-form-select>
      </b-form-input>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form> -->
  </b-container>
</template>


<script>
import axios from "axios";

export default {

  data() {
    return {
      form: {
        fullname: "",
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
      axios
        .post("http://localhost:3000/users/register", {
          fullname: this.form.fullname,
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.$router.replace({path: '/'})
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>