<script setup>
import { ref } from 'vue'
import AdminLayout from '@/components/views/AdminLayout.vue'
import Select from '@/components/parts/Select.vue'

const number = ref('')
const numbers = ['10件', '20件']
</script>
<template>
  <AdminLayout :type="'admin'">
    <Select :options="numbers" v-model="number" />
  </AdminLayout>
</template>
