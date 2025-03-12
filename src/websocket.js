import { io } from 'socket.io-client';

const socket = io(`wss://${import.meta.env.VITE_LOCAL_IP}:${import.meta.env.VITE_SERVER_PORT}`);

export default socket;