<template>
    <div>
        <nav class="bg-neutral-800 border-b border-gray-600">
            <button
                v-for="sector in sectors"
                :key="sector.id" 
                class="text-white bg-neutral-800 py-4 px-6 border-b-4  hover:bg-neutral-700 focus:bg-neutral-700 focus:border-blue-500"
                @click="getSubsectorsData(sector.id), $router.push({ path: '/subsector', query: { sector: sector.id} }, pushSectorName(sector.name))">
                {{ sector.name }}
            </button>
        </nav>
        <section class="bg-neutral-800 p-5">
            <Table :subsectors="subsectors"></Table>
        </section>
    </div>
</template>

<script>
    import Table from '@/components/Table.vue';
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'Subsector',
        components: {
            Table
        },
        props: {
            subsectors: {
                type: Array, 
                default: () => []
            }
        },
        setup() {
            const store = useStore()
            const sectors = computed(() => store.state.sectorsData)
            const subsectors = computed(() => store.getters.getSubsectorsData);

            const getSubsectorsData = (id) => {
                store.dispatch('fetchSubsectorsData', id);
            }

            store.dispatch('fetchSectorsData');
            
            return {
                sectors,
                subsectors,
                getSubsectorsData
            }
        },
        methods: {
            pushSectorName(sectorName) {
                this.$store.dispatch("fetchSectorName", sectorName)
            }
        }
    }
</script>
