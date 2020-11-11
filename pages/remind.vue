<template>
  <div class="container">
    <input type="text" placeholder="email" v-model="form.email">
    <button @click="submit">送信</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    submit() {
      // await this.$accessor.user.login(this.form)
      this.$axios.post('/v1/auth/password', {
        ...this.form,
        redirect_url: 'http://localhost:8000/reset'
      })
        .then((response) => {
          console.log(response)
        })
    }
  }
})
</script>
