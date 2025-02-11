# 🎙️ XYZ Mic - Real-Time Audio Streaming with Node.js and Socket.IO 🚀

XYZ Mic is a proof-of-concept project that demonstrates real-time audio streaming between a Node.js server and a client using **Socket.IO**. It captures audio from the client's microphone, transmits it to the server, and broadcasts it to all connected clients in real time.

---

## ✨ Features

- **Real-time connection**: Uses **Socket.IO** to handle client connections and disconnections.
- **Audio streaming**: Captures audio from the client's microphone and streams it to the server.
- **Broadcasting**: The server broadcasts the received audio to all connected clients.
- **Simple interface**: Includes buttons to start and stop audio streaming.

---

## 🛠️ Project Structure

- **Server (`server.js`)**: Sets up an HTTP server with **Express** and **Socket.IO**. Handles client connections and audio streaming.
- **Client (`public/index.html` and `public/client.js`)**: Captures audio from the user's microphone and sends it to the server using **Socket.IO**.

---

## 📋 Requirements

- [Node.js](https://nodejs.org/) installed on your machine.
- A modern web browser with **Web Audio API** support.

---

## 🚀 Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DrBabaBoy/xyz-mic.git
   
2. Navigate to the project directory:
   ```bash
   cd xyz-mic
   
3. Install the required dependencies:
   ```bash
npm install

4. Start the server:
   ```bash
node server.js

5.Open your browser and visit http://localhost:3000 to access the application.


