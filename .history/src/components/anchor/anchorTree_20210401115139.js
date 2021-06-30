/*
 * @Author: Riman
 * @Date: 2021-04-01 09:47:34
 * @LastEditTime: 2021-04-01 11:51:39
 * @LastEditors: Riman
 * @Description: 
 */
import AnchorItem from './AnchorItem.vue'
import AnchorGroup from './AnchorGroup.vue'
export default {
  name: 'anchor-tree',
  render(h) {
    const create = (titleList, h) => {
      return titleList.map(item => {
        if (item.children && item.children.length) {
          return h('anchor-group', {
              props: {
                key: item.id,
                data: item,
              },
              on: {
                locateTitle: this.handleLocateTitle
              },
            },
            create(item.children, h)
          )
        } else {
          return h('anchor-item', {
            props: {
              key: item.id,
              data: item,
            },
            on: {
              locateTitle: this.handleLocateTitle
            },
          })
        }
      })
    }
    return h('div', {}, create(this.titleList, h))
  },
  components: {
    AnchorItem,
    AnchorGroup
  },
  props: {
    // 标题列表
    titleList: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    handleLocateTitle(data) {
      // console.log('test',data)
      this.$emit('locateTitle', data)
    },
  }
}