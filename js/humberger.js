let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let hamburgerMenu = document.querySelector(".upper-navbar .menu-bar");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Add this for mobile view
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
document.addEventListener('DOMContentLoaded', () => {
  const notifications = document.querySelectorAll('.single-block');

  notifications.forEach(notification => {
      notification.addEventListener('click', (event) => {
          event.preventDefault();
          
          console.log('Notification clicked:', notification.id);
          
          const id = notification.id;
          const redDot = notification.querySelector('.red-dot');
          
          if (redDot) {
              console.log('Red dot found:', redDot);
              redDot.style.display = 'none';
              redDot.classList.add("hidden");
          } else {
              console.log('No red dot found');
          }

          switch (id) {
              case 'viewpostedads-notification':
                  window.location.href = '../html/postedads.html';
                  break;
              case 'rating-notification':
                  window.location.href = '../html/reviews.html';
                  break;
              case 'earn-notification':
                  window.location.href = '../html/earnpoints.html';
                  break;
              case 'viewads-notification':
                  window.location.href = '../html/viewadscategory.html';
                  break;
              case 'coupons-notification':
                    window.location.href = '../html/coupons.html';
                    break;
              case 'refer-notification':
                  window.location.href = '../html/referals.html';
                  break;
          }
      });
  });
});
const notifi = document.getElementById("bell");
const notificationView = document.querySelector(".main-notification");

notifi.addEventListener("click", () => {
  // Toggle the display of the profile view
  if (notificationView.style.display === "none" || notificationView.style.display === "") {
      notificationView.style.display = "block";
  } else {
      notificationView.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  // Close the profile view when clicking outside of it
  if (notificationView.style.display === "block" && !notificationView.contains(e.target) && e.target !== notifi) {
      notificationView.style.display = "none";
  }
});

document.getElementById("log_out").addEventListener("click",()=>{
  let logout=confirm("Are you sure want to logout");
  if(logout){
    window.location.href="../html/kikiclickadshome.html"
  }
})