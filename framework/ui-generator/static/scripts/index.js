const instance = new Vue({
  el: '#container',
  template: '#template-container',
  data: {
    treeData: [{
      label: '一级 1',
      children: [{
        label: '二级 1-1',
        children: [{
          label: '三级 1-1-1'
        }]
      }]
    }, {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
          label: '三级 2-2-1'
        }]
      }]
    }, {
      label: '一级 3',
      children: [{
        label: '二级 3-1',
        children: [{
          label: '三级 3-1-1'
        }]
      }, {
        label: '二级 3-2',
        children: [{
          label: '三级 3-2-1'
        }]
      }]
    }],
    defaultProps: {
      children: 'children',
      label: 'label'
    },
    // 选择表
    tableItems: {
      order: [{
          id: 'code',
          title: '编号',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'customer',
          title: '客户',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'date',
          title: '日期',
          ctltype: 'yy-formitem-date'
        },
        {
          id: 'product',
          title: '产品',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'number',
          title: '数量',
          ctltype: 'yy-formitem-number'
        },
        {
          id: 'code',
          title: '编号',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'customer',
          title: '客户',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'date',
          title: '日期',
          ctltype: 'yy-tableitem-date'
        },
        {
          id: 'product',
          title: '产品',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'number',
          title: '数量',
          ctltype: 'yy-tableitem-number'
        }
      ],
      product: [{
          id: 'code',
          title: '编号',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'customer',
          title: '客户',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'date',
          title: '日期',
          ctltype: 'yy-formitem-date'
        },
        {
          id: 'product',
          title: '产品',
          ctltype: 'yy-formitem-input'
        },
        {
          id: 'number',
          title: '数量',
          ctltype: 'yy-formitem-number'
        },
        {
          id: 'code',
          title: '编号',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'customer',
          title: '客户',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'date',
          title: '日期',
          ctltype: 'yy-tableitem-date'
        },
        {
          id: 'product',
          title: '产品',
          ctltype: 'yy-tableitem-input'
        },
        {
          id: 'number',
          title: '数量',
          ctltype: 'yy-tableitem-number'
        }
      ]
    },
    // selectedTableItems: {},
    selectedTableDatas: {}
  },
  methods: {
    handleNodeClick: function (a, b, c, d) {
      console.log(a, b, c, d);
    },
    handleSelectionChange: function (val) {
      this.multipleSelection = val
    },
    changeTable: function (e) {
      const tableName = e.target.name

      if (e.target.checked) {
        instance.$set(this.selectedTableDatas, tableName, this.tableItems[tableName])
      } else {
        instance.$delete(this.selectedTableDatas, tableName)
      }
    }
  }
})
