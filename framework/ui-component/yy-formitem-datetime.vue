<template>
  <el-form-item :label="label" :key="id">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
      align="right">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  export default {
    data(){
      return {
        label: '日期',
        id: `yy-Date.now()`,
        value: null
      }
    }
  }
</script>
