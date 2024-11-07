<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#4A4A4A',
  },
})
</script>
<template>
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 10C3.5 10 1 13.3333 0 15H15C13.8333 13.3333 12 10 7.5 10Z"
      :fill="props.backgroundColor"
    />
    <path
      d="M13 5.5C13 8.53757 10.5376 11 7.5 11C4.46243 11 2 8.53757 2 5.5C2 2.46243 4.46243 0 7.5 0C10.5376 0 13 2.46243 13 5.5Z"
      :fill="props.backgroundColor"
    />
  </svg>
</template>
