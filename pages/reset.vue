<template>
  <div class="container">
    <input type="text" placeholder="password" v-model="form.password">
    <input type="text" placeholder="password_confirm" v-model="form.password_confirmation">
    <button @click="submit">送信</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    submit() {
      // await this.$accessor.user.login(this.form)
      this.$axios.put('/v1/auth/password', {
        ...this.form
      }, {
        headers: {
          'access-token': this.$route.query['access-token'],
          client: this.$route.query.client,
          uid: this.$route.query.uid,
        }
      })
        .then((response) => {
          console.log(response)
        })
    }
  }
})
</script>
