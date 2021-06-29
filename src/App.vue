<template>
  <Navbar />
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> -->
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Navbar, Footer },
};
</script>
