<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  border: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button type="button" :class="['c-button', props.border ? `is-border` : '']" @click="onClick">
    {{ props.label }}
  </button>
</template>
<style lang="scss">
.c-button {
  color: #fff;
  background: #4b4b4b;
  border-radius: 6px;
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  min-width: 218px;

  &.is-border {
    color: #000;
    border: 1px solid #000;
    background: #fff;
  }
}
</style>
