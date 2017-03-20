<template>
  <yy-form-table ref="formTable"  v-on:init="init">
    <el-button slot="zone-action-1" type="button" @click="handleClick">新增</el-button>
    <el-button slot="zone-action-1" type="info" @click="handleSearch">查询</el-button>
    <el-button slot="zone-action-2" type="button" @click="handleClick">按日期</el-button>
    <el-button slot="zone-action-2" type="info" @click="handleSearch">按产品</el-button>
  </yy-form-table>
</template>

<script>
  const impl = {
    init(context) {
      context.$http.get('/api/products').then(response => {
        const result = response.body

        if (result.code === 200) {
          context.render(result.data)
        } else {
          console.error('api is error.')
        }
      })
    },

    handleClick(e) {
      alert(e.target.innerText)
    },

    handleSearch() {
      const qp = this.$refs.formTable.queryParams
      this.$http.get('/api/products', qp).then(response => {
        const result = response.body

        if (result.code === 200) {
          this.$refs.formTable.bizdata = []//result.data
        } else {
          console.error('api is error.')
        }
      })
    }
  }

  export default {
    methods: impl
  }

</script>
