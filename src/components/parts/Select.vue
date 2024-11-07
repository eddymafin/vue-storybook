<script setup>
const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
  },
})
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="c-select-wrap">
    <select
      class="c-select"
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
<style lang="scss">
.c-select-wrap {
  appearance: none;
  border: 1px solid #d9d9d9;
  padding: 0.5em;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 11px;
    background: #000;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.c-select {
  appearance: none;
  cursor: pointer;
  outline: 0;
  padding-right: 1em;
  background: #fff;
  border: none;
  min-width: 180px;
}
</style>
