<template>
  <h1>Connect Your Phone!</h1>
  <div v-for="port in ports" :key="port">
    <QrCode :port="port" />
  </div>
  <div v-if="motionData">
    <h2>Motion Data:</h2>
    <p>Alpha: {{ motionData.alpha }}</p>
    <p>Beta: {{ motionData.beta }}</p>
    <p>Gamma: {{ motionData.gamma }}</p>
  </div>
  <div class="dot" :style="dotStyle"></div>
</template>

<script setup>
import { ref, computed } from 'vue';
import QrCode from './components/QrCode.vue';
import socket from "./websocket.js";

const ports = ref([import.meta.env.VITE_SERVER_PORT]);
const motionData = ref({ alpha: 0, beta: 0, gamma: 0 });

socket.on('motionData', (data) => {
  motionData.value = data;
});

const dotStyle = computed(() => {
  const x = motionData.value.gamma * -5;
  const y = motionData.value.beta * -5;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
});
</script>

<style scoped>
.dot {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s linear;
}
</style>