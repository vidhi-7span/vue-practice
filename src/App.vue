<template>
  <div class="space-x-4 pb-2">
    <router-link to="/" class="underline hover:text-green-600">
      Home
    </router-link>
    <router-link to="/about" class="underline hover:text-green-600">
      About
    </router-link>
    <router-link to="/contact" class="underline hover:text-green-600">
      Contact
    </router-link>
    <router-view />
  </div>
</template>

<script setup>
import { provide } from "vue";
provide(
  /* key */ "message",
  /* value */ "Hello from Provide that define in App.vue !"
);
</script>
