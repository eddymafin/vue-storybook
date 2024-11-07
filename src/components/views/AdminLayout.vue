<script setup>
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue'
</script>
<template>
  <Header :type="'admin'" />
  <main class="l-main">
    <slot />
  </main>
  <Footer :type="'admin'" />
</template>
