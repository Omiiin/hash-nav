import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/user'

Vue.use(Vuex)
index
export default new Vuex.Store({
    modules: {
        index
    }
})  