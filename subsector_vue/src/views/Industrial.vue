<template>
  <div class="home">
    <Table :subsectors=subsectors></Table>
  </div>
</template>
  
<script>
import Table from '../components/Table.vue'
export default {
  name: 'Industrial',
  components: {
    Table
  },
  props: {
    subsectors: {
      type: Array, // Adjust the type based on the actual data type of subsectors
      default: () => [] // Provide a default value if needed
    }
  }
}
</script>