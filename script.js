// Add your JavaScript code here
// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})

// countdown
// Function to update the countdown timer
function updateCountdown() {
    // Define the target date (replace with your desired end date)
    var targetDate = new Date("2024-05-19T00:00:00");
  
    // Get the current date and time
    var currentDate = new Date();
  
    // Calculate the time difference between the target date and current date
    var timeDiff = targetDate.getTime() - currentDate.getTime();
  
    // Calculate the remaining days, hours, minutes, and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    // Display the remaining time in the HTML elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
  
  // Call the updateCountdown function every second to keep the timer up to date
  setInterval(updateCountdown, 1000);
  


// Sample JavaScript code to handle button click
document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.getElementById('wpfunnels_next_step_controller');
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
        var loader = document.querySelector('.wpfnl-loader');
        loader.style.display = 'inline-block'; // Display loader
        // Here you can add code to initiate download or perform any other action
        // For demonstration purposes, we'll just simulate a delay
        setTimeout(function() {
            // After a delay, hide the loader
            loader.style.display = 'none';
            // Add code to redirect or perform any other action
            console.log('Download initiated...');
        }, 2000); // Simulate a 2-second delay
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get all accordion items
    var accordionItems = document.querySelectorAll('.accordion-item');

    // Loop through each accordion item
    accordionItems.forEach(function(item) {
        // Add click event listener to accordion title
        var title = item.querySelector('.accordion-title');
        title.addEventListener('click', function() {
            // Toggle the active class on the accordion item
            item.classList.toggle('active');

            // Toggle the display property of accordion content
            var content = item.querySelector('.accordion-content');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});


const s = window.screen;
const w = hacker.width = s.width;
const h = hacker.height = s.height;
const ctx = hacker.getContext("2d");
const p = Array(Math.floor(w / 10) + 1).fill(0);
const random = (items) => items[Math.floor(Math.random() * items.length)];
const hex = "0123456789ABCDEFG".split("");

setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, .05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "green";
    p.map((v, i) => {
        ctx.fillText(random(hex), i * 10, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
    });
}, 1000 / 30);


document.addEventListener("DOMContentLoaded", function() {
    // Lazy load images
    var lazyLoadImages = document.querySelectorAll('img.lazy');
    lazyLoadImages.forEach(function(img) {
        img.addEventListener('load', function() {
            img.classList.add('lazy-loaded');
        });
        img.src = img.dataset.src;
    });
});