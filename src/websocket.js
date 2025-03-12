let socket = new WebSocket("ws://localhost:8000/ws");

socket.onopen = () => console.log("Connected to WebSocket");
socket.onmessage = (event) => console.log("Server:", event.data);

export default socket;