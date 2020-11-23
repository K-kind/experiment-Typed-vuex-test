<template>
  <div>
    <o-form ref="ruleForm" @submit.native.prevent="submit" :model="formData">
      <div v-for="(array, index) in formData.myArray" :key="index">
        <o-form-item :prop="`myArray.${index}`" :rules="arrayRule">
          <o-input v-model="formData.myArray[index]" />
        </o-form-item>
      </div>
      <o-button native-type="submit">送信</o-button>
    </o-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      formData: {
        myArray: ["", "", ""]
      },
      rules: {
        myArray: [
          [{ type: 'string', required: true }],
          // [{ type: 'string', required: true }],
          // [{ type: 'string', required: true }]
        ]
      },
      arrayRule: [{ type: 'string', required: true }],
      ruleForm: null
    })

    const submit = () => {
      console.log(state.ruleForm)
      state.ruleForm.validate((valid) => {
        console.log(valid)
      })
    }

    return {
      ...toRefs(state),
      submit
    }
  }
})
</script>
