<template>
  <yy-form-table v-on:init="init"></yy-form-table>
</template>

<script>
  import Vue from '../framework'

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
    }
  }

  export default {
    methods: impl
  }

</script>
