<script setup>
import { ref } from 'vue'
import LoginLayout from '@/components/templates/LoginLayout.vue'
import IconUser from '@/components/icons/IconUser.vue'
import Input from '@/components/parts/Input.vue'

const userInput = ref('')
console.log(userInput)
</script>
<template>
  <LoginLayout
    >管理者のログイン

    <IconUser />
    {{ userInput }}
    <div>
      <Input
        v-model="userInput"
        :value="userInput"
        :placeholder="'ユーザー名またはメールログイン'"
      />
    </div>
    <div><Input :type="'password'" :placeholder="'パスワード'" /></div>
  </LoginLayout>
</template>
