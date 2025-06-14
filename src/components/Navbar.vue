<template>
  <nav class="md:bg-white md:shadow-xl shadow-[#8c52ff] ml-4 mr-4 md:ml-12 md:mr-12 mt-5 rounded-2xl ">
    <div class="max-w-7xl  px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <router-link to="/" class="flex items-center space-x-3">
          <img :src="logo" alt="Logo" class="h-16 w-auto" />
        </router-link>

        <div class="hidden md:flex  space-x-8 text-[1rem] uppercase">
          <router-link
            to="/"
            class="text-black hover:text-[#8c52ff] font-medium transition duration-200"
          >Home</router-link>
          <router-link
            to="/services"
            class="text-black hover:text-[#8c52ff] font-medium transition duration-200"
          >Services</router-link>
          <router-link
            to="/about"
            class="text-black hover:text-[#8c52ff] font-medium transition duration-200"
          >About us</router-link>
          <router-link
            to="/product"
            class="text-black hover:text-[#8c52ff] font-medium transition duration-200"
          >Product</router-link>
          <router-link
            to="/contact"
            class="text-black hover:text-[#8c52ff] font-medium transition duration-200"
          >Contact</router-link>
        </div>

        <!-- Mobile Toggle Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white  focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden text-center rounded-3xl  bg-white/20 px-4 pb-4 pt-2 space-y-3 text-lg uppercase">
      <router-link
        to="/"
        class="block text-white hover:text-[#8c52ff] font-medium transition duration-200"
        @click="closeMenu"
      >Home</router-link>
      <router-link
        to="/services"
        class="block text-white hover:text-[#8c52ff] font-medium transition duration-200"
        @click="closeMenu"
      >Services</router-link>
      <router-link
        to="/about"
        class="block text-white hover:text-[#8c52ff] font-medium transition duration-200"
        @click="closeMenu"
      >About us</router-link>
      <router-link
        to="/product"
        class="block text-white hover:text-[#8c52ff] font-medium transition duration-200"
        @click="closeMenu"
      >Product</router-link>
      <router-link
        to="/contact"
        class="block text-white hover:text-[#8c52ff] font-medium transition duration-200"
        @click="closeMenu"
      >Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.svg'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
