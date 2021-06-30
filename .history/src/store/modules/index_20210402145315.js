/*
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 14:53:14
 * @LastEditors: Riman
 * @Description: 
 */
import * as TYPES from '../mutation.types'

const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}'),
    token: sessionStorage.getItem('token') || '',
    //产品信息
    product:[{

    }],
    //公司介绍
    companyMsg:{
        
    }
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


