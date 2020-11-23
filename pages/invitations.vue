<template>
  <div class="container">
    <o-button v-if="!modalIsOpen" @click="modalIsOpen = true">開く</o-button>
    <NewStaffs v-else :new-staffs.sync="newStaffs" :clinic-id.sync="clinicId" />
  </div>
</template>
<script lang="ts">
import cloneDeep from 'lodash.clonedeep'
import { defineComponent, onMounted, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      newStaffs: [],
      clinicId: null,
      modalIsOpen: false
    })

    const staffField = {
      email: '',
      family_name: '',
      given_name: '',
      role: null
    }

    const addField = (times = 1) => {
      for (let i = 0; i < times; i++) {
        state.newStaffs.push(cloneDeep(staffField))
      }
    }

    onMounted(() => {
      addField(3)
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
<style scoped>
.container {
  padding: 20px;
}
</style>
