<template>
  <div class="home mx-auto">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <p class="pr-4 bg-primary">123</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
