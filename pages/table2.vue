<template>
  <ul v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count">{{ i }}</li>
  </ul>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
  export default defineComponent({
    setup: () => {
      const state = reactive({
        count: 0
      })

      const load = () => {
        state.count += 2
      }

      return {
        ...toRefs(state),
        load
      }
    }
  })
</script>
