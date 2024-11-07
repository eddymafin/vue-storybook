<script setup>
import IconUser from '@/components/icons/IconUser.vue'
</script>
<template>
  <nav class="l-nav">
    <ul class="l-navList">
      <li><a href="">ダッシュボード</a></li>
      <li><a href="">売上一覧</a></li>
      <li><a href="">〇〇一覧</a></li>
      <li>
        <a href=""><IconUser :backgroundColor="'#fff'" /><span>アカウント情報</span></a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss"></style>
