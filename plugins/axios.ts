import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
  }
}

const axios: Plugin = ({ $axios }) => {
  $axios.onRequest(config => {
    // config.baseURL = 'http://katahira.co.jp/api'
    config.baseURL = 'http://localhost:3000'
    // config.withCredentials = true
    return config
  })
}

export default axios
