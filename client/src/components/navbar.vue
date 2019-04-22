<template>
  <div id="nav">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <b-nav-item><router-link to='/'>Home</router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div v-if="isLogin">
              <b-nav-item><router-link to='/login'>Login</router-link></b-nav-item>
              <b-nav-item><router-link to='/register'>Register</router-link></b-nav-item>
            </div>
            <div v-else>
              <b-nav-item @click="logout">Logout</b-nav-item>
            </div>
            <b-nav-item><router-link to='/carts'>Cart</router-link></b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Bus from '@/views/bus/event.js'
export default {
  name: "navbar",
  data() {
    return {
      isLogin: true
    }
  },
  mounted() {
    Bus.$on('isLogin', payload => {
      this.isLogin = payload
    })
    if(localStorage.getItem('token')) {
      this.isLogin = false
    } else {
      this.isLogin = true
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      this.isLogin = true
    }
  }
};
</script>
