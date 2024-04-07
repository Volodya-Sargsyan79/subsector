<template>
  <div>
    <section>
      <router-view   
        :sectors="sectors" 
        :subsectors="subsectors" 
        :getSubsectorsData="getSubsectorsData" 
        :deleteSubsector="deleteSubsector" >
      </router-view>
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
    const sectors = computed(() => store.getters.getSectorsData);
    const subsectors = computed(() => store.getters.getSubsectorsData);

 
    const getSubsectorsData = (id) => {
      store.dispatch('fetchSubsectorsData', id);
    }

    const editSubsector = (subsectorId) => {
      store.dispatch('fetchEditSubsectors', subsectorId);
    }
    
    
    const deleteSubsector = (subsectorId) => {
      store.dispatch('fetchDeleteSubsector', subsectorId);
    }

    store.dispatch('fetchSectorsData');
    
    return {
      sectors,
      subsectors,
      getSubsectorsData,
      editSubsector,
      deleteSubsector
    };
  },
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
</style>