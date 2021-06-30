/*
 * @Author: Riman
 * @Date: 2021-04-01 23:01:27
 * @LastEditTime: 2021-04-02 01:02:23
 * @LastEditors: Riman
 * @Description: 
 */
export default [
    {
        path: 'detail',
        component: resolve => require(['@/views/detail'], resolve),
        name: 'Detail',
        meta: {
            nav: '详情'
        }
    }
      
]