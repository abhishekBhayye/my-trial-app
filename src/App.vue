<template>
  <div class="d-flex">
    <div class="row">
    <div class="col-sm-2">

    </div>
    <div class="col-sm-10">
      <HomeComponent />
    </div>
  </div>
  </div>
  
</template>

<script>
import HomeComponent from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>