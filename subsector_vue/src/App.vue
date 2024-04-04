<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Industrial</strong></router-link>
        <router-link to="/office" class="navbar-item"><strong>Office</strong></router-link>
        <router-link to="/retail" class="navbar-item"><strong>Retail</strong></router-link>
        <router-link to="/residential" class="navbar-item"><strong>Residential</strong></router-link>
      </div>
    </nav>
  </div>
  <section class="section">
      <router-view/>
  </section>
  <footer class="footer">
    <p class="has-text-centered">Copyright (c) 2024</p>
  </footer>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    beforeCreate() {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token" + token
      } else {
        axios.defaults.headers.common['Authorization'] = ''
      }
    },
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>
