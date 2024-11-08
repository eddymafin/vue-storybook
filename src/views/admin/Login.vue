<script setup>
import { ref } from 'vue'
import LoginLayout from '@/components/templates/LoginLayout.vue'
import IconUser from '@/components/icons/IconUser.vue'
import Input from '@/components/parts/Input.vue'
import Button from '@/components/parts/Button.vue'

const userInput = ref('')
console.log(userInput)
</script>
<template>
  <LoginLayout>
    <h3 class="c-title">管理者のログイン<IconUser /></h3>
    <form action="">
      <div class="l-form-wrap">
        {{ userInput }}
        <div class="">
          <Input
            v-model="userInput"
            :value="userInput"
            :placeholder="'ユーザー名またはメールログイン'"
          />
        </div>
        <div><Input :type="'password'" :placeholder="'パスワード'" /></div>
        <Button :label="'ログイン'" />
      </div>
    </form>
  </LoginLayout>
</template>
<style lang="scss">
.l-form-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .l-form-wrap {
    margin: auto;
    max-width: 600px;
  }
}
</style>
