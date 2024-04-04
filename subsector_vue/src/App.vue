<template>
  <main id="wrapper">
    <nav class="navbar bg-neutral-800 border-b border-gray-600">
      <div class="navbar-brand">
          <router-link to="/" class="text-white router-link-active router-link-exact-active transition py-4 px-6 cursor-pointer hover:bg-neutral-700" :class="{ 'router-link-active router-link-exact-active border-b-4  border-blue-500 bg-neutral-700': $route.path === '/' }">
              <strong>Industrial</strong>
          </router-link>
          <router-link to="/office" class="text-white router-link-active router-link-exact-active transition py-4 px-6 cursor-pointer hover:bg-neutral-700" :class="{ 'router-link-active router-link-exact-active border-b-4  border-blue-500 bg-neutral-700': $route.path === '/office' }">
              <strong>Office</strong>
          </router-link>
          <router-link to="/retail" class="text-white router-link-active router-link-exact-active transition py-4 px-6 cursor-pointer hover:bg-neutral-700" :class="{ 'router-link-active router-link-exact-active border-b-4  border-blue-500 bg-neutral-700': $route.path === '/retail' }">
              <strong>Retail</strong>
          </router-link>
          <router-link to="/residential" class="text-white router-link-active router-link-exact-active transition py-4 px-6 cursor-pointer hover:bg-neutral-700" :class="{ 'router-link-active router-link-exact-active border-b-4  border-blue-500 bg-neutral-700': $route.path === '/residential' }">
              <strong>Residential</strong>
          </router-link>
      </div>
    </nav>
  </main>
  <section class="section bg-neutral-800">
      <router-view/>
  </section>
  <footer class="footer w-full min-h-screen gap-x-8 bg-neutral-800 text-gray-300 pb-10">
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
