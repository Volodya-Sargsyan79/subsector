<template>
  <div class="home">
    Industrial
  </div>
</template>
  
<script>  
  import { defineProps, computed } from "vue";

  const props = defineProps({
    data: Object,
    allCategory: Object,
    type: String,
  });

  const allCategory = computed(() => props.allCategory);
  const allCategoryItems = computed(() => allCategory.value.items);

  export default {
    name: 'Industrial',
  }
</script>
  