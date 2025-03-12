function sendMotionData(socket) {
    window.addEventListener("deviceorientation", (event) => {
        let data = {
            alpha: event.alpha, // Rotation around Z-axis
            beta: event.beta,   // Rotation around X-axis
            gamma: event.gamma  // Rotation around Y-axis
        };
        socket.send(JSON.stringify(data));
    });
}

export { sendMotionData };