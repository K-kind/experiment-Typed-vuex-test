<template>
  <div class="container">
    <template v-if="user">
      <p>ユーザー名: {{ user.name }}</p>
      <p>アドレス: {{ user.email }}</p>
    </template>
    <template v-else>
      <o-input type="text" placeholder="email" v-model="form.email" />
      <o-input type="text" placeholder="password" v-model="form.password" />
      <o-button @click="login">ログイン</o-button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup: () => {
    const state = reactive({
      form: {
        email: '',
        password: ''
      }
    })

    const { app } = useContext()
    const user = computed(() => {
      return app.$accessor.user.user
    })

    const login = async () => {
      app.$accessor.user.test(state.form)
    }

    return {
      ...toRefs(state),
      user,
      login
    }
  }
})
</script>
