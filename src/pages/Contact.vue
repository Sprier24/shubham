<template>
  <div class="relative w-full min-h-screen pb-20 overflow-hidden">
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

    <!-- Foreground Content -->
    <section class="relative z-10 min-h-screen">
      <Navbar class=" mb-16 " />

      <div class="flex items-center justify-center px-4">
        <form
          @submit.prevent="sendEmail"
          ref="form"
          class="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl p-8 rounded-2xl max-w-2xl w-full space-y-5 text-white"
        >
          <h2 class="text-3xl font-bold text-center">Contact Us</h2>

          <!-- Name Inputs -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              required
              class="p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              required
              class="p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <!-- Email -->
          <input
            v-model="email"
            type="email"
            placeholder="Email Address"
            required
            class="w-full p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <!-- Phone -->
          <input
            v-model="phone"
            type="tel"
            placeholder="Contact Number (with country code)"
            required
            class="w-full p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <!-- Project Description -->
          <textarea
            v-model="project"
            placeholder="Tell Us About Your Project"
            rows="4"
            required
            class="w-full p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <!-- Referral -->
          <input
            v-model="referral"
            type="text"
            placeholder="How Did You Hear About Us?"
            class="w-full p-3 border border-white/30 rounded-md bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import Navbar from '../components/Navbar.vue'

// Form data
const form = ref(null)
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const project = ref('')
const referral = ref('')

// Send email using EmailJS
const sendEmail = () => {
  const serviceID = 'your_service_id'     
  const templateID = 'your_template_id'
  const userID = 'your_user_id'        

  const templateParams = {
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
    phone: phone.value,
    project: project.value,
    referral: referral.value,
  }

  emailjs.send(serviceID, templateID, templateParams, userID)
    .then(() => {
      alert('Message sent successfully!')
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      phone.value = ''
      project.value = ''
      referral.value = ''
    })
    .catch((error) => {
      console.error('EmailJS error:', error)
      alert('Failed to send message. Please try again later.')
    })
}
</script>
