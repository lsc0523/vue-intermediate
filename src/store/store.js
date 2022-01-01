import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import * as getters from './getters.js'
// import * as mutations from './mutations.js'
import todoApp from './modules/todoApp.js'

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});