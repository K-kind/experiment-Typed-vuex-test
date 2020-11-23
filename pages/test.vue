<template>
  <div>
    <h1>{{ user }}</h1>
    <o-form ref="ruleForm">
      <o-table :data="tableData">
        <o-table-column>
          <template v-slot="{ row }">
            <o-form-item prop="email" :rules="rules.email">
              <o-input v-model="row.email" placeholder="メール" />
            </o-form-item>
          </template>
        </o-table-column>
        <o-table-column>
          <template v-slot="{ row }">
            <o-form-item prop="name">
              <o-input v-model="row.name" placeholder="名前" />
            </o-form-item>
          </template>
        </o-table-column>
        <o-table-column>
          <template v-slot="{ row }">
            <o-form-item prop="role">
              <o-select v-model="row.role">
                <o-option
                  v-for="role in roles"
                  :key="role.id"
                  :label="role.label"
                  :value="role.id"
                />
              </o-select>
            </o-form-item>
          </template>
        </o-table-column>
      </o-table>
      <o-button @click="submit">送信</o-button>
      <o-button @click="reset">リセット</o-button>
    </o-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const initialData = {
      email: '',
      name: '',
      role: null
    }
    const state = reactive({
      tableData: [],
      roles: [
        { id: 1, label: 'コック' },
        { id: 2, label: '料理長' },
        { id: 3, label: '調理師' },
      ],
      rules: {
        email: [
          { required: true, message: 'メールを入力してください', trigger: 'blur' },
          { type: 'email', message: 'メールを入力してください', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '名前を入力してください', trigger: 'blur' },
          { min: 3, max: 5, message: '3文字以上5文字以内で入力してください', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '職種を選択してください', trigger: 'change' }
        ],
      }
    })

    const ruleForm = ref(null)

    const submit = () => {
      ruleForm.value.validate((valid) => {
        if (valid) {
          alert('有効')
        } else {
          alert('無効')
        }
      })
    }

    const reset = () => {
      ruleForm.value.resetFields()
    }

    state.tableData.push({ ...initialData })
    state.tableData.push({ ...initialData })
    state.tableData.push({ ...initialData })

    return {
      ...toRefs(state),
      ruleForm,
      submit,
      reset
    }
  },
  computed: {
    user() {
      return this.$auth.user
    }
  }
})
</script>
