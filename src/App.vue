<template>
  <div >
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: '',
  components: {
    Navbar
  }  
}
</script>

<style>
body {
  background: #ddd;
}
</style>
