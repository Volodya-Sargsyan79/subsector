<template>
    <div class="bg-neutral-800 min-h-screen text-gray-300">
        <Form :id="$route.query.id" />
    </div>
  </template>
    
  <script>
  import Form from '../components/Form.vue'
  export default {
    name: 'Edit',
    components: {
        Form
    },
    computed: {
      sectorName() {
        return this.$store.state.sectorName
      }
    }

  }
  </script>