<script setup>
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  style: {
    type: String,
    default: '',
  },
})
defineEmits(['update:modelValue'])
</script>
<template>
  <input
    class="c-input"
    :type="props.type"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="{ borderColor: props.style }"
  />
</template>
<style lang="scss">
.c-input {
  appearance: none;
  background: #fff;
  border: 1px solid #000;
  padding: 0.5em;
  width: 100%;
}
</style>
