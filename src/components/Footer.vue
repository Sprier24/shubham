<template>
  <footer class="w-full bg-black backdrop-blur-md border-t border-white/20 text-white px-6 py-10">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-start">

      <div class="flex flex-col items-center md:pl-24 md:items-start space-y-2">
        <img :src="logo" alt="Spriers Logo" class="h-14 md:pl-5 w-auto" />
        <h2 class="text-2xl font-bold tracking-wide">Spriers</h2>
        <p class="text-white/60 now max-w-xs">Agile IT Solution for a Fast Paced World.</p>
      </div>

      <div class="flex flex-col items-center md:pl-36 md:items-start space-y-2">
        <h3 class="font-semibold text-lg text-purple-400">Quick Links</h3>
        <ul class="space-y-2 text-white/80">
          <li><router-link to="/" class="hover:text-purple-400 transition">Home</router-link></li>
          <li><router-link to="/services" class="hover:text-purple-400 transition">Services</router-link></li>
          <li><router-link to="/contact" class="hover:text-purple-400 transition">Contact</router-link></li>
          <li><a href="mailto:you@example.com" class="hover:text-purple-400 transition">Email Us</a></li>
        </ul>
      </div>

      <div class="flex flex-col items-center md:pl-24 md:items-start space-y-2">
        <h3 class="font-semibold text-lg text-purple-400">Follow Us</h3>
        <div class="flex space-x-5 text-2xl">
          <a href="#" aria-label="Facebook" class="hover:text-purple-400 transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-purple-400 transition"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-purple-400 transition"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="GitHub" class="hover:text-purple-400 transition"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/50">
      &copy; {{ currentYear }} Spriers. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import logo from '../assets/logo.svg'
const currentYear = new Date().getFullYear()
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>
