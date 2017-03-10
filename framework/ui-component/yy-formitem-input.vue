<template>
  <el-form-item :label="label" :key="id">
    <el-input :id="item.name" v-model="value"></el-input>
  </el-form-item>
</template>

<script>
  export default {
    data() {
      return {
        label: '输入框',
        id: `yy-Date.now()`,
        value: null
      }
    }
  }

</script>
