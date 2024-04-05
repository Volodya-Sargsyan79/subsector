<template>
  <div class="home">
    Industrial
  </div>
</template>
  
<script>
  import { computed } from "vue";
  import { useStore } from 'vuex';

  export default {
    name: 'Industrial',
    setup() {
      const store = useStore();
      const subsectorsData = computed(() => store.getters.getSubsectorsData);

      // Dispatch the action to fetch API data when the component is created
      store.dispatch('fetchSectorsData', "18ff4730-d8c2-4ce2-a3e2-cb2ad7ce6675");

      return {
        subsectorsData
      };
    },
  }
</script>
  