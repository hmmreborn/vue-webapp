<template>
  <div id="app">
    <router-view  v-on:footer="footer" v-wechat-title="$route.meta.title"></router-view>
    <the-footer v-if="footer_show"></the-footer>
  </div>
</template>
 
<script>
import TheFooter from './components/TheFooter'	
export default {
  name: 'App',
  components: {
  	TheFooter
  },
  data() {
  	return {
  		footer_show: true,
  	}
  },
  methods: {
      footer:function (bool) {
          this.footer_show = bool;
      }
  }
}
</script>
<style >
html,
body {
  height: 100%;
  min-height: 100%;
}
#app,
.page {
  height: 100%;
  background: #F7F8FA;
}
</style>