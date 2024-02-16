// if (typeof window !== 'undefined') {
//     const WebSocket = require('ws');
//     const wss = new WebSocket('ws://localhost:3000');

//     wss.onmessage = function (event) {
//       console.log("Message received:", event.data);
    
//       const outputDiv = document.getElementById('websocketOutput');
//       outputDiv.innerHTML += `<p>${event.data}</p>`;
//     };
//   }
if (typeof window !== 'undefined') {
  // Check if running in the browser environment
  const outputDiv = document.getElementById('websocketOutput');

  // Create WebSocket connection
  const ws = new WebSocket('ws://localhost:3000');

  // Connection opened
  ws.addEventListener('open', function (event) {
      console.log('WebSocket connection established');
  });

  // Listen for messages
  ws.addEventListener('message', function (event) {
      console.log('Message received:', event.data);

      // Check if outputDiv is available (avoid server-side rendering)
      if (outputDiv) {
          const p = document.createElement('p');
          p.textContent = event.data;
          outputDiv.appendChild(p);
      }
  });
}
