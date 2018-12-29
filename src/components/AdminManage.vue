<template>
  <Table border :columns="columns" :data="adminData"></Table>
</template>

<script>
  export default {
    name: "AdminManage",
    data() {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.name)
              ]);
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '详细地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            // render 函数传入两个参数，第一个是 h，第二个是对象，包含 row、column 和 index，分别指当前单元格数据，当前列数据，当前是第几行。
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        adminData: [
          {
            name: '张三',
            age: 45,
            address: '山东省济南市历下区'
          },
          {
            name: '李四',
            age: 34,
            address: '山东省淄博市'
          },
          {
            name: '王五',
            age: 30,
            address: '山东省日照市'
          },
          {
            name: '赵六',
            age: 56,
            address: '山东省青岛市'
          }
        ]
      }
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: '管理员信息',
          content: `Name：${this.adminData[index].name}<br>Age：${this.adminData[index].age}<br>Address：${this.adminData[index].address}`
        })
      },
      remove(index) {
        this.adminData.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
