/*
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 14:52:41
 * @LastEditors: Riman
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index
    }
})  