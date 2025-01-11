
// document.addEventListener('DOMContentLoaded', () => {
//     const promoAds = document.querySelectorAll('.promoads img');
//     const popup = document.getElementById('popup');
//     const closeBtn = document.querySelector('.popup .close');
//     const companyImage = document.getElementById('companyImage');
//     const companyName = document.getElementById('companyName');
//     const companyDescription = document.getElementById('companyDescription');
//     const companyLink = document.getElementById('companyLink');

//     const openPopup = (ad, event) => {
//         const name = ad.getAttribute('data-name');
//         const image = ad.getAttribute('data-image');
//         const description = ad.getAttribute('data-description');
//         const website = ad.getAttribute('data-link');

//         companyImage.src = image;
//         companyName.textContent = name;
//         companyDescription.textContent = description;
//         companyLink.href = website;

//         // Position the popup
//         popup.style.display = 'flex';
//         const popupRect = popup.getBoundingClientRect();
//         const top = event.clientY - popupRect.height / 1;
//         const left = event.clientX - popupRect.width / 1;

//         popup.style.top = `${Math.max(top, 0)}px`; // Ensure it doesn't go off the top of the screen
//         popup.style.left = `${Math.max(left, 0)}px`; // Ensure it doesn't go off the left of the screen
//     };

//     promoAds.forEach(ad => {
//         const handleEvent = (event) => {
//             event.preventDefault(); // Prevent default anchor behavior
//             openPopup(ad, event);
//         };

//         ad.addEventListener('click', handleEvent);
//         ad.addEventListener('touchstart', handleEvent, { passive: false });
//     });

//     closeBtn.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === popup) {
//             popup.style.display = 'none';
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const promoAds = document.querySelectorAll('.promoads img');
//     const popup = document.getElementById('popup');
//     const closeBtn = document.querySelector('.popup .close');
//     const companyImage = document.getElementById('companyImage');
//     const companyName = document.getElementById('companyName');
//     const companyDescription = document.getElementById('companyDescription');
//     const companyLink = document.getElementById('companyLink');

//     const openPopup = (ad) => {
//         const name = ad.getAttribute('data-name');
//         const image = ad.getAttribute('data-image');
//         const description = ad.getAttribute('data-description');
//         const website = ad.getAttribute('data-link');

//         companyImage.src = image;
//         companyName.textContent = name;
//         companyDescription.textContent = description;
//         companyLink.href = website;

//         popup.style.display = 'flex'; // Ensure popup is displayed as a flexbox
//     };

//     promoAds.forEach(ad => {
//         ad.addEventListener('click', (event) => {
//             event.preventDefault(); // Prevent default anchor behavior
//             openPopup(ad);
//         });
//     });

//     closeBtn.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === popup) {
//             popup.style.display = 'none';
//         }
//     });
// });
document.querySelectorAll('.promoads img').forEach(image => {
    image.addEventListener('click', function () {
        // Fetch data attributes
        const name = this.getAttribute('data-name');
        const imageUrl = this.getAttribute('data-image');
        const description = this.getAttribute('data-description');
        const link = this.getAttribute('data-link');

        // Populate popup content
        document.getElementById('companyName').textContent = name;
        document.getElementById('companyImage').src = imageUrl;
        document.getElementById('companyDescription').textContent = description;
        document.getElementById('companyLink').href = link;

        // Show popup
        document.getElementById('popup').style.display = 'flex';
    });
});

// Close popup
document.querySelector('.popup .close').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

// Close popup on clicking outside the content
document.getElementById('popup').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

