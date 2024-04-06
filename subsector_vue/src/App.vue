<template>
  <main id="wrapper">
    <nav class="navbar bg-neutral-800 border-b border-gray-600">
      <div class="navbar-brand">
          <router-link
            v-for="sector in sectors" 
            :key="sector.id" 
            :to="sector.name.toLowerCase()"
            @click="getSubsectorsData(sector.id)"
            class="text-white router-link-active router-link-exact-active transition py-4 px-6 cursor-pointer hover:bg-neutral-700" 
            :class="{ 'router-link-active router-link-exact-active border-b-4  border-blue-500 bg-neutral-700': $route.path === '/'+sector.name.toLowerCase() }">
              <strong>{{ sector.name }}</strong>
          </router-link>
      </div>
    </nav>
  </main>
  <section class="section bg-neutral-800">
      <router-view :subsectors="subsectors" :deleteSubsector="deleteSubsector"></router-view>
  </section>

  <footer class="footer w-full min-h-screen gap-x-8 bg-neutral-800 text-gray-300 pb-10">
    <p class="has-text-centered">Copyright (c) 2024</p>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const sectors = computed(() => store.getters.getSectorsData);
    const subsectors = computed(() => store.getters.getSubsectorsData);
 
    const getSubsectorsData = (id) => {
      store.dispatch('fetchSubsectorsData', id);
    }
    
    const deleteSubsector = (subsectorId) => {
      store.dispatch('fetchDeleteSubsector', subsectorId);
    }

    store.dispatch('fetchSectorsData');
    
    return {
      sectors,
      subsectors,
      getSubsectorsData,
      deleteSubsector
    };
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>