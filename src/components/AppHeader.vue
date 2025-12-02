<template>
  <header class="sticky top-0 z-50 w-full bg-white shadow-md bg-opacity-95 backdrop-blur">
    <div class="w-full px-6 py-3 flex items-center justify-between">

      <!-- LEFT LOGO -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
        <img src="/wlogo.png" alt="UWSCG" class="uwsc-logo" />
      </router-link>
      </div>

      <!-- RIGHT CONTACT -->
      <div class="flex items-center space-x-8 text-gray-700 font-medium">

        <a
          href="mailto:info@water.gov.ge"
          class="flex items-center space-x-2 hover:text-blue-700 transition"
        >
          <i class="fa-solid fa-envelope text-blue-600 text-xl"></i>
          <span>info@water.gov.ge</span>
        </a>

        <a
          href="tel:995322930000"
          class="flex items-center space-x-2 hover:text-blue-700 transition"
        >
          <i class="fa-solid fa-phone text-blue-600 text-xl"></i>
          <span>995 32 293 00 00</span>
        </a>

      </div>
    </div>
  </header>
</template>

<script setup>
</script>
