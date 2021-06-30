/*
 * @Author: Riman
 * @Date: 2021-04-01 09:42:08
 * @LastEditTime: 2021-04-02 14:58:02
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
    product:[
        {
          title: 1,
          id: 1,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2740128407,3151051221&fm=26&gp=0.jpg",
        },
        {
          title: 2,
          id: 2,
          thumb:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075695866,304762525&fm=26&gp=0.jpg",
        },
        {
          title: 3,
          id: 3,
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912940200,2947373025&fm=26&gp=0.jpg",
        },
        {
          title: 4,
          id: 4,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3251556539,2241458961&fm=26&gp=0.jpg",
        },
        {
          title: 5,
          id: 5,
          thumb:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3563633233,3261344371&fm=26&gp=0.jpg",
        },
      ],
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


