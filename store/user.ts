import { getterTree, mutationTree, actionTree } from 'typed-vuex'

type User = {
  name: string
  email: string
}

export const state = () => ({
  user: null as User | null
})
export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  user: state => state.user
})

export const mutations = mutationTree(state, {
  setUser(state, user: User): void {
    state.user = user
  },
  deleteUser(state): void {
    state.user = null
  }
})

interface LoginParams {
  email: string
  password: string
}

interface LoginResponse {
  user: User
}

export const actions = actionTree(
  { state, getters, mutations },
  {
    async login(
      { commit },
      params: LoginParams
    ): Promise<void> {
      const response = await this.app.$axios.post<LoginResponse>('/auth', params)
      if (!response) {
        return
      }
      commit('setUser', response.data.user)
    },
    async test(
      _,
      params: LoginParams
    ): Promise<void> {
      this.app.$accessor.user.login(params)
    }
  }
)
