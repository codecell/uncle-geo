<template>
  <div class="home">
    <Gmap />
  </div>
</template>

<script>
// @ is an alias to /src
import Gmap from '@/components/home/Gmap.vue'

export default {
  name: 'home',
  components: {
    Gmap
  }
}
</script>
