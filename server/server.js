import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import cors from 'cors'; // Import the cors package

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const privateKey = fs.readFileSync(path.join(__dirname, '../certs/server.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '../certs/server.cert'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

const server = https.createServer(credentials, app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.VITE_SERVER_PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173"
}));


app.use(express.static(path.join(__dirname, 'public')));

app.post('/reset', (req, res) => {
  io.emit('resetPosition');
  console.log('Client reset the phone position');
  res.json({ message: 'Phone position reset' });
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('motionData', (data) => {
    io.emit('motionData', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});