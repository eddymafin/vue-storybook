<script setup>
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
  <footer class="l-footer">
    <template v-if="props.type === 'editor' || props.type === 'user'">
      <nav class="l-nav">
        <ul class="l-navList">
          <li><a href="">運営会社</a></li>
          <li><a href="">プライバシーポリシー</a></li>
          <li><a href="">利用規約</a></li>
        </ul>
      </nav>
    </template>
    <div>&copy; 2024 komamen.net All Rights Reserved.</div>
  </footer>
</template>
<style lang="scss" scoped>
.l-footer {
  background: var(--base-gray);
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .l-nav {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .l-navList {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    a {
      padding: 0;
    }
  }
}
</style>
