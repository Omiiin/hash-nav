/*
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 15:00:40
 * @LastEditors: Riman
 * @Description: 
 */
import * as TYPES from '../mutation.types'

const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}'),
    token: sessionStorage.getItem('token') || '',
    eId:''
}

const actions = {
    
}

const mutations = {
    [TYPES.LOGIN]: (state, loginData) => {
        state.userInfo = loginData.user
        state.token = loginData.token
        sessionStorage.setItem('userInfo', JSON.stringify(loginData.user))
        sessionStorage.setItem('token', loginData.token)
    },
    [TYPES.LOGOUT]: state => {
        state.userInfo = {}
        state.token = ''
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('token')
    },
    getId(state,data){
        state.eId=data
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}


