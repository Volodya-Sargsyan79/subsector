<template>
  <div class="flex flex-col w-full gap-y-4">
    <table class="table-auto border-spacing-8 border border-gray-600">
      <thead class="border-b border-gray-600">
        <tr class="h-6 border-b border-gray-600">
          <td></td>
          <td></td>
          <td class="p-3 flex justify-end">
            <button class="rounded-md bg-gray-600 text-gray-300 hover:bg-gray-700 transition px-4 py-2 w-fit">
              <p>
                <span class="text-gray-300">+</span>
                Add New Grade
              </p>
            </button>
          </td>
        </tr>
        <tr class="h-6">
          <th class="py-3 px-3 text-white border-x border-gray-600 w-1/5">Name</th>
          <th class="py-3 px-3 text-white border-x border-gray-600 w-1/5">Weighting Type</th>
          <th class="py-3 px-3 text-white border-x border-gray-600 w-1/5">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subsector in subsectors" :key="subsector.id" class="transition-all h-12 border-b border-gray-600 hover:cursor-pointer hover:bg-gray-300 hover:bg-opacity-15">
          <td class="border-x text-white border-gray-600 py-3 px-3">{{ subsector.name }}</td>
          <td class="border-x text-white border-gray-600 py-3 px-3">{{ subsector.weightingType }}</td>
          <td class="border-x border-gray-600 py-3 px-3 flex gap-x-3">
            <button 
              class="rounded-md bg-blue-500 text-gray-300 hover:bg-blue-600 transition px-4 py-2 w-fit"
              @click="editSubsector(subsector)">
              <span class="text-gray-300"> ✎ </span>
              Edit
            </button>
            <button 
              class="rounded-md bg-gray-600 text-gray-300 hover:bg-gray-700 transition px-4 py-2 w-fit"
              @click="deleteSubsector(subsector.id)">
              <span class="text-gray-500">✖</span>
              Delete 
            </button>
            <button class="rounded-md bg-yellow-600 text-gray-300 hover:bg-gray-700 transition px-4 py-2 w-24">
              <p>
                <span class="text-gray-600">↻</span>
                Sync 
              </p>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'Table',
  props: {
    subsectors: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const store = useStore();

    const deleteSubsector = (subsectorId) => {
      store.dispatch('fetchDeleteSubsector', subsectorId);
    }

    return {
      deleteSubsector
    };
  },
  methods: {
    editSubsector(subsector) {
      this.$router.push({ path: '/subsector/edit', query: { id: subsector.id }  });
      this.$store.dispatch("fetchSector", subsector)
    }
  }
}
</script>
