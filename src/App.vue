<template>
  <div id="app">
    <nav class="navbar navbar-default">
      {{ currentUser }}
      <ul class="nav navbar-nav navbar-right">
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/">Home</router-link>
          <router-link to="/test">404</router-link>
          <router-link to="/auth/signin" v-if="!isLogged">Login</router-link>
          <a href="#" @click="logoutUser" v-else>Logout</a>
        </li>
      </ul>
    </nav>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
    computed: {
        /**
         * See src/app/auth/vuex/getters.js
         */
        ...mapGetters(['currentUser', 'isLogged']),
        version() {
            return version
        },
    },
    methods: {
        /**
         * Makes logout() action available withint this component
         * See /src/app/auth/vuex/actions.js
         */
        ...mapActions(['logout']),

        logoutUser() {
            this.logout()
        },
    }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 62px;
}
</style>
