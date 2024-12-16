const socket = io();
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioBufferQueue = [];

socket.on('audio', (data) => {
    const floatArray = new Float32Array(data);
    audioBufferQueue.push(floatArray);
    playAudio();
});

function playAudio() {
    if (audioBufferQueue.length === 0) return;

    const buffer = audioContext.createBuffer(1, audioBufferQueue[0].length, audioContext.sampleRate);
    buffer.copyToChannel(audioBufferQueue.shift(), 0);

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
}
