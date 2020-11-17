<template>
  <div class="container">
    <button @click="fetch">ボタン</button>
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
      this.$auth.loginWith('local', { data: this.form })
      // this.$axios.post('/v1/auth', this.form)
      //   .then((response) => {
      //     console.log(response)
      //   })
    },
    fetch() {
      this.$axios.get('/v1/me', {
        headers: {
          Authorization: 'Bearer 9877f51ec00ff4dbe21d75890f478a56bc167b2cffc6be2c075326d80a125b6404cae8769a9a11bdfde029788eea35ac034426b19bbe2f6862d18796df8b0f1b'
        }
      })
        .then((response) => {
          console.log(response)
        })
    }
  }
})
</script>
