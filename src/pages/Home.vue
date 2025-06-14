<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source src="../assets/bg11.mp4" type="video/mp4" />
    </video>

    <!-- Hero Section -->
    <section class="relative z-10 h-full">
      <!-- Navbar always on top -->
      <Navbar class="relative z-50" />

      <!-- Hero Content -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div class="shadow-2xl shadow-[#8c52ff] rounded-4xl p-10 bg-gradient-to-b from-transparent to-[#8c52ff]/80">
          <h1 class="text-7xl md:text-[12rem] text-amber-500 font-bold uppercase animate-fade-in-down">
            Spriers
          </h1>
          <p class="text-2xl md:text-[2rem] font-medium drop-shadow-md tracking-wider animate-fade-in-up delay-300">
            Agile IT Solution <br class="md:hidden" /> for a Fast Paced World
          </p>
        </div>
      </div>
    </section>
  </div>

  <!-- Services Section -->
  <section class="py-16 bg-radial-purple-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-[4rem] font-bold text-center text-white mb-12">Our Services</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-6 pt-10 rounded-2xl shadow-md hover:shadow-xl transition"
          :class="`card-animate card-delay-${index + 1}`"
        >
          <h3 class="text-xl font-semibold text-[#8c52ff] mb-3">{{ service.title }}</h3>
          <p class="text-black font-sans font-bold text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'

const services = ref([
  {
    title: 'Cloud Computing',
    description:
      'Empower your business with scalable, flexible, and secure cloud solutions. Reduce infrastructure costs while boosting performance and availability.',
  },
  {
    title: 'Software Development',
    description:
      'From idea to execution, we craft reliable and high-performing custom software. Designed to meet your unique challenges and business goals.',
  },
  {
    title: 'Application Development',
    description:
      'We build powerful mobile and desktop applications with sleek interfaces. Ensure seamless user experience across platforms and devices.',
  },
  {
    title: 'Website Development',
    description:
      'We develop responsive, SEO-friendly websites that convert visitors into customers. Fast, modern, and tailored to your brand\'s identity.',
  },
  {
    title: 'E-Commerce',
    description:
      'Build secure and scalable online stores with seamless user experiences. We integrate modern payment gateways and inventory systems.',
  },
  {
    title: 'CRM',
    description:
      'Enhance customer relationships with smart, customizable CRM platforms. Track, manage, and automate customer interactions with ease.',
  },
])
</script>
