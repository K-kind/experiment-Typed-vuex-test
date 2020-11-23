<template>
  <div class="container">
    <o-card class="card">
      <template #header>
        <h1>新規登録</h1>
      </template>
      <o-form label-position="top" :model="formData" :rules="rules">
        <o-form-item label="名前" required>
          <o-row :gutter="10">
            <o-col :span="12">
              <o-form-item prop="family_name">
                <o-input v-model="formData.family_name" />
              </o-form-item>
            </o-col>
            <o-col :span="12">
              <o-form-item prop="given_name_kana">
                <o-input v-model="formData.given_name_kana" />
              </o-form-item>
            </o-col>
          </o-row>
        </o-form-item>
        <o-form-item label="名前（ふりがな）">
          <o-row :gutter="10">
            <o-col :span="12">
              <o-form-item prop="family_name_kana">
                <o-input v-model="formData.family_name_kana" />
              </o-form-item>
            </o-col>
            <o-col :span="12">
              <o-form-item prop="given_name">
                <o-input v-model="formData.given_name" />
              </o-form-item>
            </o-col>
          </o-row>
        </o-form-item>
        <o-form-item label="メールアドレス" prop="email">
          <o-input v-model="formData.email" />
        </o-form-item>
        <o-form-item label="電話番号" prop="phone_number">
          <o-input v-model="formData.phone_number" />
        </o-form-item>
        <o-form-item label="パスワード" prop="password">
          <o-input v-model="formData.password" type="password" show-password />
        </o-form-item>
        <o-form-item label="パスワード（確認用）" prop="password_confirmation">
          <o-input v-model="formData.password_confirmation" type="password" />
        </o-form-item>
        <o-form-item label="生年月日" prop="birthday">
          <o-row>
            <o-col :span="10">
              <o-form-item prop="birthday_year" class="birthday">
                <o-input inputmode="numeric" maxlength="4" v-model.number.trim="formData.birthday_year" />
              </o-form-item>
            </o-col>
            <o-col :span="7">
              <o-form-item prop="birthday_month" class="birthday">
                <o-input inputmode="numeric" maxlength="2" v-model.number.trim="formData.birthday_month" />
              </o-form-item>
            </o-col>
            <o-col :span="7">
              <o-form-item prop="birthday_day" class="birthday">
                <o-input inputmode="numeric" maxlength="2" v-model.number.trim="formData.birthday_day" />
              </o-form-item>
            </o-col>
          </o-row>
        </o-form-item>
        <o-button native-type="submit">送信</o-button>
      </o-form>
    </o-card>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      rules: {
        family_name: [
          {
            required: true,
            max: 20,
            fullField: '姓'
          }
        ],
        given_name: [
          {
            required: true,
            max: 20,
            fullField: '名'
          }
        ],
        family_name_kana: [
          {
            required: true,
            max: 20,
            fullField: 'せい'
          }
        ],
        given_name_kana: [
          {
            required: true,
            max: 20,
            fullField: 'めい'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            fullField: 'メールアドレス'
          }
        ],
        phone_number: [
          {
            required: true,
            fullField: '電話番号'
          },
          {
            pattern: /^0\d{9,10}$/,
            message: '正しい電話番号を入力してください'
          }
        ],
        password: [
          {
            required: true,
            fullField: 'パスワード'
          }
        ],
        password_confirmation: [
          {
            required: true,
            fullField: 'パスワード（確認用）'
          },
          {
            validator: confirm
          }
        ],
        birthday: [
          {
            validator: date
          }
        ]
      },
      formData: {
        family_name: '',
        given_name: '',
        family_name_kana: '',
        given_name_kana: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
        birthday_year: null,
        birthday_month: null,
        birthday_day: null
      }
    })

    const birthday = computed(() => state)

    function confirm(rule, value, callback, source, options) {
      if (value !== state.formData.password) {
        callback(new Error('パスワードと一致しません'))
      } else {
        callback();
      }
    }

    const isValidDate = (y: number, m: number, d: number) => {
      const dt = new Date(y, m - 1, d)
      return (dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d)
    }

    function date(rule, value, callback, source, options) {
      const valid = isValidDate(
        state.formData.birthday_year,
        state.formData.birthday_month,
        state.formData.birthday_day
      )
      if (!valid) {
        callback(new Error('正しい日付を入力してください（半角）'))
      } else {
        callback();
      }
    }

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 40px;
  display: flex;
  justify-content: center;
  .card {
    width: 480px;
  }
}
.birthday {
  .el-form-item__content {
    display: flex !important;
  }
}
</style>
