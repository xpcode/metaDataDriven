<template>
  <component v-if="preview===true">
    <el-card :body-style="{ padding: '0' }">
      <img :src="modelThumb" class="image">
      <div style="padding: 14px;">
        <span>{{modelName}}</span>
        <div class="bottom">
          <el-button type="text">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </component>
  <component v-else>
    <el-row>
      <el-form ref="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in formItems" :key="item.id">
            <el-form-item :label="item.title">
              <el-input v-model="queryParams[item.id]" v-if="item.ctltype==='yy-formitem-input'" :id="item.id" />
              <el-input-number v-model="queryParams[item.id]" v-if="item.ctltype==='yy-formitem-number'" :min="1" :max="10" :id="item.id"
              />
              <el-date-picker v-model="queryParams[item.id]" v-if="item.ctltype==='yy-formitem-date'" :id="item.id" type="date" placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <slot name="zone-action-1"></slot>
        </el-form-item>
      </el-form>
      <el-row>
        <el-col :span="20">
          数据
        </el-col>
        <el-col :span="4">
          <slot name="zone-action-2"></slot>
        </el-col>
      </el-row>
      <el-table :data="bizdata" style="width: 100%">
        <el-table-column :prop="item.id" :label="item.title" :key="item.id" v-for="item in tableItems">
          <el-input :id="item.id" v-if="status===1" />
        </el-table-column>
      </el-table>
    </el-row>
  </component>
</template>

<script>
  import env from '../env'

  export default {
    props: {
      preview: {
        type: Boolean,
        default: false,
      },
      modelThumb: {
        type: String,
        default: '',
      },
      modelName: {
        type: String,
        default: '',
      }
    },

    data() {
      return {
        status: 0,
        metadata: [],
        bizdata: [],
        queryParams: {}
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
      }
    },

    created() {
      this.$http.get(env.HTTP_METADATA_BYMODULE + 'product')
        .then(response => {
          const result = response.body

          if (result.code === 200) {
            this.metadata = result.data.elements
            this.$emit('init', {
              $http: this.$http,
              render: a => this.bizdata = a
            })
          } else {
            console.error('api is error.')
          }
        })
    }
  }

</script>
