<template>
  <div class="container">
    <template v-if="user">
      <p>ユーザー名: {{ user.name }}</p>
      <p>アドレス: {{ user.email }}</p>
    </template>
    <template v-else>
      <input type="text" placeholder="email" v-model="form.email">
      <input type="text" placeholder="password" v-model="form.password">
      <button @click="login">ログイン</button>
      <o-button loading>ボタン</o-button>
      <o-button icon="material-icons stop">
      </o-button>
      <o-button icon="el-icon-eleme">
      </o-button>
      <i class="material-icons stop"></i>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    user() {
      return this.$accessor.user.user
    }
  },
  methods: {
    login() {
      // await this.$accessor.user.login(this.form)
      this.$axios.post('/v1/auth/sign_in', this.form)
        .then((response) => {
          console.log(response)
        })
    }
  }
})
</script>
