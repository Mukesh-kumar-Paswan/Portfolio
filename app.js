const video1 = document.getElementById('ProjectVideo1');
const video2 = document.getElementById('ProjectVideo2');
const video3 = document.getElementById('ProjectVideo3');
const hoverSign = document.querySelector(".hover-sigh");

// sidebar elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon'); 

close.addEventListener("click" , function () {
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
}); 

// scroll animation to contact page
  document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump behavior

    const contactSection = document.getElementById("contact-sections");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

// scroll animation to about page
document.getElementById("abut").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump behavior

    const clickAbut = document.getElementById("clickAbut");
    clickAbut.scrollIntoView({ behavior: "smooth" });
});

// scroll animation to skill page
document.getElementById("skull").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump behavior

    const clickSkull = document.getElementById("clickSkull");
    clickSkull.scrollIntoView({ behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const notification = document.getElementById("notification");

  sendBtn.addEventListener("click", () => {
    notification.textContent = "Message sent successfully!";
    notification.classList.add("show");

    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  });
});
