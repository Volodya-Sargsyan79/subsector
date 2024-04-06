<template>
  <div class="home">
    <Table 
      :subsectors=subsectors 
      :deleteSubsector="deleteSubsector"
    ></Table>
  </div>
</template>
  
<script>
import Table from '../components/Table.vue'
export default {
  name: 'Retail',
  components: {
    Table
  },
  props: {
    subsectors: {
      type: Array, // Adjust the type based on the actual data type of subsectors
      default: () => [] // Provide a default value if needed
    },
    deleteSubsector: {
      type: Function, // Adjust the type if deleteSubsector has a different signature
      required: true // Ensure that deleteSubsector is always provided
    }
  }
}
</script>