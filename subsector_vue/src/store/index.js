import axios from "axios";
import { createStore } from 'vuex';

const store = createStore({
  state: {
    sectorsData: null,
    subsectorsData: null,
  },
  getters: {
    getSectorsData: (state) => state.sectorsData,
    getSubsectorsData: (state) => state.subsectorsData,
  },
  mutations: {
    setSectorsData(state, data) {
      state.sectorsData = data;
    },
    setSubsectorsData(state, data) {
      state.subsectorsData = data;
    },
    setDeleteSubsectors(state, data) {
      state.subsectorsData = data;
    },
  },
  actions: {
    async fetchSectorsData({ commit }) {
      try {
        const response = await axios.get('/sectors');
        commit('setSectorsData', response.data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
    async fetchSubsectorsData({ commit }, sectorId) {
      try {
        const response = await axios.get(`/sector/${sectorId}/subsectors`);
        commit('setSubsectorsData', response.data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
    async fetchDeleteSubsector({ commit }, subsectorsID) {
      try {
        const response = await axios.delete(`/subsectors/${subsectorsID}`);
        commit('setDeleteSubsectors', response.data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
  },
});

export default store;