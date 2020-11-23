<template>
  <o-card>
    <o-form ref="oform" size="medium" :model="formData" @submit.native.prevent="submit" @valid-submit="validSubmit">
      <o-form-item prop="clinicId" :rules="staffRules.clinicId">
        <o-select v-model="formData.clinicId">
          <o-option v-for="clinic in clinics" :key="clinic.value" :value="clinic.value" :label="clinic.label" />
        </o-select>
      </o-form-item>
      <o-table :data="formData.newStaffs">
        <o-table-column label="メールアドレス">
          <template v-slot="{ row, $index }">
            <o-form-item :prop="`newStaffs.${$index}.email`" :rules="staffRules.email" hide-margin>
              <o-input v-model.trim="row.email" />
            </o-form-item>
          </template>
        </o-table-column>
        <o-table-column label="名前">
          <template v-slot="{ row, $index }">
            <o-row :gutter="10">
              <o-col :span="12">
                <o-form-item :prop="`newStaffs.${$index}.family_name`" :rules="staffRules.family_name" hide-margin>
                  <template #label>ラべる</template>
                  <o-input v-model.trim="row.family_name" />
                  <template #error="{ error }">
                    <span>{{ error }}</span>
                  </template>
                </o-form-item>
              </o-col>
              <o-col :span="12">
                <o-form-item :prop="`newStaffs.${$index}.given_name`" :rules="staffRules.given_name" hide-margin>
                  <o-input v-model.trim="row.given_name" />
                </o-form-item>
              </o-col>
            </o-row>
          </template>
        </o-table-column>
        <o-table-column label="役割">
          <template v-slot="{ row, $index }">
            <o-form-item :prop="`newStaffs.${$index}.role`" :rules="staffRules.role" hide-margin>
              <o-select v-model="row.role">
                <o-option v-for="role in roles" :key="role.value" :value="role.value" :label="role.value" />
              </o-select>
            </o-form-item>
          </template>
        </o-table-column>
        <o-table-column>
          <template v-slot="{ row, $index }">
            <o-button size="small">削除</o-button>
          </template>
        </o-table-column>
      </o-table>
      <o-button native-type="submit">送信</o-button>
      <o-button @click="reset">リセット</o-button>
    </o-form>
  </o-card>
</template>
<script lang="ts">
import cloneDeep from 'lodash.clonedeep'
import { defineComponent, onMounted, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    newStaffs: Array,
    clinicId: Number
  },
  setup: (props) => {
    const required = (rule, value, callback, source, options) => {
      // options.messages.required = '%sは必須ですじゃ'
      // debugger
      if (!value) {
        callback(new Error(`${rule.fullField}は必須です`))
      } else {
        callback();
      }
    }

    const state = reactive({
      formData: {
        clinicId: null,
        newStaffs: [],
      },
      staffRules: {
        clinicId: [
          {
            required: true,
            type: 'number',
            fullField: '院'
          }
        ],
        email: [
          {
            required: true,
            type: 'email', // 最大文字数254も含む
            fullField: 'メールアドレス',
            trigger: 'blur'
          }
        ],
        family_name: [
          {
            required: true,
            max: 20,
            fullField: '姓'
          },
        ],
        given_name: [
          {
            required: true,
            max: 20,
            fullField: '名'
          },
        ],
        role: [
          {
            required: true,
            type: 'number',
            fullField: '役割'
          },
        ]
      },
      clinics: [
        { value: 1, label: 'クリニック1' },
        { value: 2, label: 'クリニック2' },
        { value: 3, label: 'クリニック3' },
        { value: 4, label: 'クリニック4' }
      ],
      roles: [
        { value: 1, label: '役割1' },
        { value: 2, label: '役割2' },
        { value: 3, label: '役割3' },
        { value: 4, label: '役割4' }
      ],
      oform: null
    })

    const submit = (event) => {
      // console.log(state.oform.clearValidate)
      // console.log(`submit: ${event}`)
    }

    const reset = () => {
      // console.log(state.oform)
      // state.oform.clearValidate(['newStaffs.0.email', 'newStaffs.2.email'])
      state.oform.resetFields()
      // state.oform.validate()
    }

    const validSubmit = (event) => {
      console.log(`valid-submit: ${event}`)
    }

    onMounted(() => {
      state.formData.newStaffs = cloneDeep(props.newStaffs)
      state.formData.clinicId = props.clinicId
    })

    return {
      ...toRefs(state),
      submit,
      reset,
      validSubmit,
    }
  }
})
</script>

<style lang="scss">
// .el-form-item.is-required {
//   margin-bottom: 0;
//   transition: margin 100ms;
//   &.is-error {
//     margin-bottom: 22px;
//   }
// }
</style>
