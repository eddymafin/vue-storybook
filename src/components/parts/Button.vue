<script setup>
// import { reactive, computed } from 'vue'

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

// export default {
//   name: 'default-button',

//   props: {
//     label: {
//       type: String,
//       required: true,
//     },
//     primary: {
//       type: Boolean,
//       default: false,
//     },
//     size: {
//       type: String,
//       validator: function (value) {
//         return ['small', 'medium', 'large'].indexOf(value) !== -1
//       },
//     },
//     backgroundColor: {
//       type: String,
//     },
//   },

//   emits: ['click'],

//   setup(props, { emit }) {
//     props = reactive(props)
//     return {
//       classes: computed(() => ({
//         'storybook-button': true,
//         'storybook-button--primary': props.primary,
//         'storybook-button--secondary': !props.primary,
//         [`storybook-button--${props.size || 'medium'}`]: true,
//       })),
//       style: computed(() => ({
//         backgroundColor: props.backgroundColor,
//       })),
//       onClick() {
//         emit('click')
//       },
//     }
//   },
// }
</script>
<template>
  <button
    type="button"
    :class="['c-button', props.border ? `is-border` : '']"
    @click="onClick"
  >
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
