<template>
  <navbar/>
  <div class="bg-red-primary h-1"></div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App', 

  components: {
    Navbar,
  },

  mounted() {
    document.title = 'Indie Coder'
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
