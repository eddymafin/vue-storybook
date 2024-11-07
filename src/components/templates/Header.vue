<script setup>
import Logo from '@/components/icons/Logo.vue'
import AdminNav from '@/components/views/AdminNav.vue'
import editorNav from '@/components/views/editorNav.vue'
import userNav from '@/components/views/userNav.vue'
const props = defineProps({
  type: {
    type: String,
    validator: function (value) {
      return ['admin', 'editor', 'user'].indexOf(value) !== -1
    },
  },
  class: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <header :class="['l-header', props.type ? `color-${props.type}` : '']">
    <div class="l-logo">
      <Logo />
    </div>
    <AdminNav v-if="props.type === 'admin'" />
    <editorNav v-if="props.type === 'editor'" />
    <userNav v-if="props.type === 'user'" />
  </header>
</template>
<style lang="scss">
.l-header {
  background: var(--base-gray);
  padding: 10px;
  min-height: 68px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  &.color-admin {
    background: var(--color-admin);
  }
  &.color-editor {
    background: var(--color-editor);
  }
  &.color-user {
    background: var(--color-user);
  }

  a {
    text-decoration: none;
  }
}
</style>
