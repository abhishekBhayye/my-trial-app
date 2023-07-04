<template>
  <div class="navigation container-fluid">
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" :to="{ name: 'About Us' }">About Us</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"
            >Customer Management</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent',
};
</script>
