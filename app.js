const video1 = document.getElementById('ProjectVideo1');
const video2 = document.getElementById('ProjectVideo2');
const video3 = document.getElementById('ProjectVideo3');
const hoverSign = document.querySelector(".hover-sigh");

const videolist = [video1 , video2 , video3];

videolist.forEach(function(video) {
    video.addEventListener('mouseover' , function() {
        video.play();
        hoverSign.classList.add("active")
    })
    video.addEventListener('mouseout' , function() {
        video.pause();
        hoverSign.classList.remove("active")
    })
})

// sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

menu.addEventListener("click" , function() {
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
}) 

close.addEventListener("click" , function () {
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
}) 