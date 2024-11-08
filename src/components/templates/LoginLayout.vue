<script setup>
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue'

const props = defineProps({
  type: {
    type: String,
    validator: function (value) {
      return ['admin', 'editor', 'user'].indexOf(value) !== -1
    },
  },
})
</script>
<template>
  <div class="">
    <Header />
    <main class="l-main">
      <slot />
    </main>
    <Footer :type="props.type" />
  </div>
</template>
