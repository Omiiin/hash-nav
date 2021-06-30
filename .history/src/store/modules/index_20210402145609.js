/*
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 14:56:09
 * @LastEditors: Riman
 * @Description: 
 */
import * as TYPES from '../mutation.types'

const state = {
    userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}'),
    token: sessionStorage.getItem('token') || '',
    //导航栏
    titleList: [
        {
          label: "首页",
          id: "home",
        },
        {
          label: "产品中心",
          id: "product",
        },
        {
          label: "解决方案",
          id: "solution", // '/solution'
        },
        {
          label: "客户案例",
          id: "customer", // '/customer'
        },
        {
          label: "关于我们",
          id: "about", // '/about'
        },
        {
          label: "500",
          id: "error-500",
        },
      ],
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


