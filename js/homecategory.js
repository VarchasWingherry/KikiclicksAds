// category.js

// category.js

document.querySelectorAll('.category-box').forEach(box => {
    box.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        const redirectUrl = `../html/viewads.html?category=${selectedCategory}`;

        if (isLoggedIn) {
            window.location.href = redirectUrl;
        } else {
            window.location.href = `../html/login.html?redirect=${encodeURIComponent(redirectUrl)}`;
        }
    });
});
