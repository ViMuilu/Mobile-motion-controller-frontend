<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import QRCode from 'qrcode';

const props = defineProps({
  port: {
    type: Number,
    required: true
  }
});

const canvas = ref(null);

onMounted(() => {
  const localIp = import.meta.env.VITE_LOCAL_IP;
  const url = `https://${localIp}:${props.port}`;
  QRCode.toCanvas(canvas.value, url, { width: 200 }, (error) => {
    if (error) console.error(error);
  });
});
</script>

<style scoped>

</style>