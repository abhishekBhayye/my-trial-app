<template>
  <div class="app-main w-100">
    <NavigationComponent />
    <router-view />
  </div>  
</template>

<script>
import NavigationComponent from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    NavigationComponent
  }
}
</script>