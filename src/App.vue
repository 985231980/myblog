<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import store from "@/store/index";
export default {
  //定义store
  store,
  name: 'App',
  //以下所有内容固定添加
  mounted() {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState() {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>