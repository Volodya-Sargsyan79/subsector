<template>
  <div>
    <section>
      <router-view></router-view>
    </section>
    <footer class="footer w-full min-h-screen gap-x-8 bg-neutral-800 text-gray-300 pb-10">
      <p class="has-text-centered">Copyright (c) 2024</p>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();

    const editSubsector = (subsectorId) => {
      store.dispatch('fetchEditSubsectors', subsectorId);
    }
    
    return {
      editSubsector,
    };
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>