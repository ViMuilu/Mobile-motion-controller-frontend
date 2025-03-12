<template>
  <h1>Move Your Phone!</h1>
</template>

<script setup>
import socket from "./websocket.js";
import { sendMotionData } from "./motion";

sendMotionData(socket);
</script>

<style scoped>
/* You can style here if you like */
</style>