const socket = io('/')
const videoGrid = document.getElementById('video-grid');
const message = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
var canvas = document.getElementById("canvas");
const myPeer = new Peer({
    host: '/',
    port: '8001'
})

const myVideo = document.createElement('video');
myVideo.muted = true;
var myStream;
var peers = {};
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo,stream);
    myPeer.on('call', (call) => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })
    })

    socket.on('user-connected', userId => {
        setTimeout(()=>{
            connectToNewUser(userId, stream)
        },1000)
        //console.log('user-connected: ' + userId)
    })

})

socket.on('user-disconnected', userId => {
   // console.log(userId,peers[userId]);
    if(peers[userId])
        peers[userId].close();
})

myPeer.on('open', id => {
    if(id)
        socket.emit('join-room', ROOM_ID, id)
})


function connectToNewUser(userId, stream) {
    var call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
        //console.log('closing');
        video.remove()
    })
    peers[userId] = call;
}


function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}

// chat

btn.addEventListener('click', ()=> {
    socket.emit('chat', {
        message : message.value
    })
    output.innerHTML += '<p>' + message.value + '</p>';
    message.value = "";
})


socket.on('chat', (data)=>{
    console.log(data.message);
    output.innerHTML += '<p>' + data.message + '</p>';
})

function toggleChat() {
    var element = document.getElementById("mychat");
    if(element.style.display === "none")
        element.style.display = "block";
    else
        element.style.display = "none";
}

function disconnectCall() {
    socket.disconnect();
    window.location.href = "/meeting"
}

function toggleCamera() {
    if(myVideo.srcObject){
        myVideo.srcObject = null;
    }else{
        myVideo.srcObject = myStream;
    }
}

// // white board

function toggleBoard() {
    var element = document.getElementById("myboard");
    if(element.style.display === "none")
        element.style.display = "block";
    else
        element.style.display = "none";
}

canvas.width = 0.98*window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

var x;
var y;
var mouseDown = false;

window.onmousedown = e => {
    ctx.moveTo(x,y);
    socket.emit('down' , {x,y});
    mouseDown = true;
}

window.onmouseup = e => {
    mouseDown = false;
}

socket.on('ondraw', ({x,y}) => {
    ctx.lineTo(x,y);
    ctx.stroke();
})

socket.on('ondown', ({x,y}) => {
    ctx.moveTo(x,y);
})

window.onmousemove = (e) => {
    x = e.clientX;
    y = e.clientY;
    
    if(mouseDown){
        socket.emit('draw', {x,y})
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
