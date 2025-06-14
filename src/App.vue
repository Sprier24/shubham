<!-- App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
      
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
  <Footer/>
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>
