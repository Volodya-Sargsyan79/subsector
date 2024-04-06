<template>
    <div>
        <nav class="bg-neutral-800 border-b border-gray-600">
            <button
                v-for="sector in sectors"
                :key="sector.id" 
                class="text-white py-4 px-6 hover:bg-neutral-700 focus:z-10 focus:ring-4 focus:ring-blue-500 focus:bg-neutral-700"
                @click="getSubsectorsData(sector.id)">
                {{ sector.name }}
            </button>
        </nav>
        <section class="bg-neutral-800 p-5">
            <Table :subsectors="subsectors" :deleteSubsector="deleteSubsector"></Table>
        </section>
    </div>
</template>

<script>
    import Table from '@/components/Table.vue';

    export default {
        name: 'Subsector',
        components: {
            Table
        },
        props: {
            sectors: {
                type: Array,
                default: () => []
            },
            subsectors: {
                type: Array, 
                default: () => []
            },
            deleteSubsector: {
                type: Function,
                required: true 
            },
            getSubsectorsData: {
                type: Function,
                required: true 
            }

        },
    }
</script>
