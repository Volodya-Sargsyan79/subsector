import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    },
    isAuthenticated: false,
    token: '',
    allCategory: [],
  },
  getters: {
    
    getAllCategory: (state) => state.allCategory,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = '',
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    allCategory: (state, data) => {
      
      if (data.errorMessage) {
        state.allCategoryErrorMessage = data.errorMessage;
      } else if (data.index == null) {
        state.allCategory = data;
      } else {
        state.allCategory.items[data.index].parentData = data;
      }
    },
  },
  actions: {
    allCategory() {
      get('/api/categories')
        .then(async (response) => {
          if (response.status == 200) {
            let allCategoryData = await response.data;
            allCategoryData.index = null;
            commit("allCategory", allCategoryData);
          } else {
            let dataError = {};
            dataError.errorMessage = response.response.data.message;
            commit("allCategory", dataError);
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    },
  },
  modules: {
    
  }
})
