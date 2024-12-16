const socket = io();
let mediaStream;
let audioContext;
let processor;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

startBtn.addEventListener('click', async () => {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(mediaStream);

    processor = audioContext.createScriptProcessor(4096, 1, 1);
    processor.onaudioprocess = (event) => {
        const audioData = event.inputBuffer.getChannelData(0);
        socket.emit('audio', audioData);
    };

    source.connect(processor);
    processor.connect(audioContext.destination);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    mediaStream.getTracks().forEach((track) => track.stop());
    processor.disconnect();
    audioContext.close();

    startBtn.disabled = false;
    stopBtn.disabled = true;
});
