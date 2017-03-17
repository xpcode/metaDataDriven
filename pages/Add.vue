<template>
  <yy-form on:init="init" @clickbtnAdd="clickbtnAdd" @clickbtnSearch="clickbtnSearch"></yy-form>
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
    },

    clickbtnAdd(context) {
      alert('click btnAdd')
    },

    clickbtnSearch(context) {
      alert('click btnSearch')
      context.render([])
    }
  }

  export default {
    methods: impl
  }

</script>
