<template>
  <div>
    <o-table class="table" v-infinite-scroll="fetchData" :data="tableData">
      <o-table-column prop="name" label="名前" />
      <o-table-column prop="email" label="メールアドレス" />
    </o-table>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      tableData: [],
      totalCount: 0,
      page: 0,
      completed: false
    })

    const fetchData = () => {
      if (state.completed) return

      state.page++
      for (let i = 0; i < 5; i++) {
        if (state.totalCount > 28) {
          state.completed = true
          return
        }
        state.tableData.push({
          name: `カツオ${state.totalCount}`,
          email: `test${state.totalCount}@example.com`
        })
        state.totalCount++
      }
    }

    fetchData()

    return {
      ...toRefs(state),
      fetchData
    }
  }
})
</script>

<style lang="scss" scoped>
.table {
  overflow-y: auto;
}
</style>
