import axios from "axios";
import { createStore } from 'vuex';

const store = createStore({
  state: {
    sector: null,
    sectorName: '',
    sectorsData: null,
    subsectorsData: null,
    subSectorsEditData: null,
  },
  getters: {
    getSectorsData: (state) => state.sectorsData,
    getSubsectorsData: (state) => state.subsectorsData,
    getSectorsEditData: (state) => state.subSectorsEditData,
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
    setEditSubsectorsEdit(state, data) {
      state.subSectorsEditData = data;
    },
    setSectorName(state, data) {
      state.sectorName = data;
    },
    setSector(state, data) {
      state.sector = data;
    }
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
    async fetchEditSubsectors({ commit }, subsectorsID) {
      try {
        const response = await axios.put(`/subsectors/${subsectorsID}`);
        commit('setEditSubsectorsEdit', response.data);
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
    fetchSectorName({ commit }, sectorName) {
      commit('setSectorName', sectorName)
    },
    fetchSector({ commit }, sector) {
      commit('setSector', sector)
    }
  },
});

export default store;