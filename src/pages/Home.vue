<template>
  <HelloWorld />
  <Button />
</template>
<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
// import Button from "../components/Button.vue";import { inject } from 'vue'
import { inject } from "vue";
const message = inject("message");

console.log(message);
</script>
