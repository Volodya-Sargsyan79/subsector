<template>
    <form class="flex flex-col max-w-7xl mx-auto py-8 gap-y-4 w-1/2" @submit="editSubsector">
        <div class="flex flex-col gap-y-4 mb-4">
            <p class="font-semibold text-2xl border-b-2 border-gray-600 pb-4">Edit</p>
        </div>

        <div class="flex flex-col gap-y-2">
            <p>Sector</p>
            <input class="bg-transparent border rounded-md px-3 py-1 border-gray-600" type="text" :value="$store.state.sectorName" disabled />
        </div>
        <div class="flex flex-col gap-y-2">
            <p>Grade</p>
            <input 
                aria-describedby="helper-text-explanation" 
                class="border border-gray-600 outline-none text-sm text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent" 
                placeholder="Name" 
                required=""
                name="grade"
                :value="sector.name">
        </div>

        <div data-v-44035ffb="" class="flex flex-col gap-y-2">
            <p data-v-44035ffb="">
                Sorting order 
                <span data-v-44035ffb="" class="text-red-500">
                    *
                </span>
            </p>
            <select 
                data-v-44035ffb="" 
                class="bg-transparent border border-gray-600 px-3 py-1 rounded-md disabled:text-white" 
                required=""
                name="sortingOrder"
                :value="sector.index">
                <option data-v-44035ffb="" class="bg-gray-600" value="0">0</option>
                <option data-v-44035ffb="" class="bg-gray-600" value="1">1</option>
                <option data-v-44035ffb="" class="bg-gray-600" value="2">2</option>
            </select>
        </div>

        <div data-v-44035ffb="" class="flex flex-col gap-y-2">
            <p data-v-44035ffb="">
                Weighing Type 
                <span data-v-44035ffb="" class="text-red-500">
                    *
                </span>
            </p>
            <select 
                data-v-44035ffb="" 
                class="bg-transparent border border-gray-600 px-3 py-1 rounded-md disabled:text-white" 
                required=""
                name="weighingType"
                :value="sector.weightingType">
                <option data-v-44035ffb="" class="bg-gray-600" value="value">Value</option>
            </select>
        </div>

        <div class="flex-col flex">
            <div class="w-full flex justify-between text-xs pl-2">
                <span class="self-end flex justify-end">0</span>
                <span class="self-end flex justify-end">20</span>
                <span class="self-end flex justify-end">40</span>
                <span class="self-end flex justify-end">60</span>
                <span class="self-end flex justify-end">80</span>
                <span class="self-end flex justify-end">100</span>
            </div>

            <div class="w-full flex justify-between text-xs px-2">
                <span class="self-end text-xl">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end text-xl">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end text-xl">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end text-xl">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end text-xl">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end">|</span>
                <span class="self-end text-xl">|</span>
            </div>
            
            <div class="px-2">
                <div class="h-max slider-target slider-tooltip-drag slider-ltr slider-horizontal slider-txt-dir-ltr">
                    <div class=" w-full h-8 relative z-1 bg-gray-300 rounded">
                        <div class="slider-connects">
                            <div class=" absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full bg-neutral-600 cursor-pointer tap:duration-300 tap:transition-transform disabled:bg-gray-400 disabled:cursor-not-allowed" style="transform: translate(0%, 0px) scale(1, 1);">
                            </div>
                        </div>
                        <div class="slider-origin" style="transform: translate(0%, 0px); z-index: 5;">
                            <div class="absolute bg-white border-0 shadow-slider cursor-grab focus:outline-none h:w-4 h:h-10 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-10 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:ring focus:ring-neutral-600 focus:ring-opacity-30 slider-handle-lower" 
                                data-handle="0" 
                                tabindex="0" 
                                role="slider" 
                                aria-orientation="horizontal" 
                                aria-valuemin="0.0" 
                                aria-valuemax="100.0" 
                                aria-valuenow="0.0" 
                                aria-valuetext="0.00">
                                <div class="slider-touch-area"></div>
                            
                                <div 
                                    class="absolute bg-white block text-sm font-semibold whitespace-nowrap py-1 px-1.5 min-w-5 text-center text-neutral-600 rounded border border-whith transform h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 disabled:bg-gray-400 disabled:border-gray-400 merge-h:translate-x-1/2 merge-h:left-auto merge-v:-translate-x-4 merge-v:top-auto tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block slider-tooltip-top"
                                    >
                                    0
                                </div>
                            </div>
                        </div>
                        
                        <div class="slider-origin" style="transform: translate(96%, 0px); z-index: 5;">
                            <div class="absolute bg-white border-0 shadow-slider cursor-grab focus:outline-none h:w-4 h:h-10 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-10 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:ring focus:ring-neutral-600 focus:ring-opacity-30 slider-handle-upper" 
                                data-handle="1" 
                                tabindex="0" 
                                role="slider" 
                                aria-orientation="horizontal" 
                                aria-valuemin="0.0" 
                                aria-valuemax="100.0" 
                                aria-valuenow="100.0" 
                                aria-valuetext="100.00">
                                <div class="slider-touch-area"></div>
                                
                                <div class=" absolute bg-white block text-sm font-semibold whitespace-nowrap py-1 px-1.5 min-w-5 text-center text-neutral-600 rounded border border-whith transform h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 disabled:bg-gray-400 disabled:border-gray-400 merge-h:translate-x-1/2 merge-h:left-auto merge-v:-translate-x-4 merge-v:top-auto tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block slider-tooltip-top">
                                    100
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex justify-between text-xs px-2">
            <span class="self-start text-xl">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start text-xl">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start text-xl">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start text-xl">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start text-xl">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start">|</span>
            <span class="self-start text-xl">|</span>
        </div>

        <div class="w-full grid grid-cols-3 text-xs px-2 ">
            <span class="flex justify-center border-x">Low Risk</span>
            <span class="w-full flex justify-center border-x"></span>
            <span class="w-full flex justify-center border-x">High Risk</span>
        </div>

        <div class="flex mt-4 gap-x-5">
            <button 
                class="rounded-md bg-gray-600 text-gray-300 hover:bg-gray-700 transition px-4 py-2" 
                type="submit"
                >
                Submit 
            </button>
            <button class="rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition px-4 py-2"> 
                Cancel 
            </button>
        </div>
    </form>

</template>

<script>
import EditSubsector from '@/views/EditSubsector.vue'
import { ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const value = ref(10)
    export default {
        name: 'Form',
        props: {
            id: {
                type: String,
                default: () => ""
            },
        },
        setup() {
            const store = useStore()
            const sector = computed(() => store.state.sector)
            return {
                sector
            }
        },
        methods: {
            editSubsector(e) {
                let subsector = {
                    id: "",
                    index: e.target.sortingOrder.value,
                    midRangeMax: 0,
                    midRangeMin: 0,
                    name: e.target.grade.value,
                    weightingType: e.target.weighingType.value
                }
                e.preventDefault()
                console.log(subsector)
            }
        }
    }
</script>


