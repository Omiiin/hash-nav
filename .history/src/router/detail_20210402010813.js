/*
 * @Author: Riman
 * @Date: 2021-04-01 23:01:27
 * @LastEditTime: 2021-04-02 01:03:31
 * @LastEditors: Riman
 * @Description: 
 */
export default [
    {
        path: 'detail',
        component: resolve => require(['@/views/detail/detail'], resolve),
        name: 'Detail',
        meta: {
            nav: '详情'
        }
    }
      
]