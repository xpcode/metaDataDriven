<template>
  <el-row>
    <el-form ref="form" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in formItems" :key="item.id">
          <el-form-item :label="item.title">
            <el-input v-if="item.ctltype==='yy-formitem-input'" :id="item.id" />
            <el-input-number v-if="item.ctltype==='yy-formitem-number'" :min="1" :max="10" :id="item.id" />
            <el-date-picker v-if="item.ctltype==='yy-formitem-date'" :id="item.id" type="date" placeholder="选择日期" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button :id="item.id" :type="item.type" :key="item.id" @click="handleClick(item.id)" v-for="item in actionItems">{{item.title}}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="bizdata" style="width: 100%">
      <el-table-column :prop="item.id" :label="item.title" :key="item.id" v-for="item in tableItems">
        <el-input :id="item.id" v-if="status===1" />
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
  import env from '../env'

  export default {
    data() {
      return {
        status: 0,
        metadata: [],
        bizdata: []
      }
    },

    computed: {
      formItems() {
        return this.metadata.filter(item => {
          return item.ctltype.startsWith('yy-formitem-')
        })
      },

      tableItems() {
        return this.metadata.filter(item => {
          return item.ctltype.startsWith('yy-tableitem-')
        })
      },

      actionItems() {
        return this.metadata.filter(item => {
          return item.ctltype.startsWith('yy-actionitem-')
        })
      },
    },

    created() {
      this.$http.get(env.HTTP_METADATA_BYMODULE + 'product')
        .then(response => {
          const result = response.body

          if (result.code === 200) {
            this.metadata = result.data.elements
            this.initBizData()
          } else {
            console.error('api is error.')
          }
        })
    },

    methods: {
      initBizData() {
        this.$emit('init', {
          $http: this.$http,
          render: a => this.bizdata = a
        })
      },

      handleClick(ctlName) {
        this.$emit(`click${ctlName}`, {
          $http: this.$http,
          render: a => this.bizdata = a
        })
      }
    }
  }

</script>
