const tabs = document.querySelectorAll('.tab > div');
const views = document.querySelectorAll('.viewvideo, .viewimg, .viewarticle');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Hide all views
        views.forEach(v => v.style.display = 'none');

        // Add 'active' class to the clicked tab
        tab.classList.add('active');
        // Display the corresponding view based on index
        views[index].style.display = 'block';
    });
});


let points = 0;

function updatePointsMessage() {
    document.querySelectorAll('.pointsMessage').forEach(message => {
        message.textContent = `Total points: ${points}`;
    });
}

function playAd(button, claimButtonId) {
    const videoAd = button.closest('.ad-video').querySelector('video');
    videoAd.play();
    button.style.display = 'none';
    
    videoAd.addEventListener('ended', () => {
        document.getElementById(claimButtonId).disabled = false;
        alert("You can now claim your points.");
    });
}

function claimAdPoints(button) {
    if (button.disabled) return;

    points += 10;
    updatePointsMessage();

    button.disabled = true;
    alert("You have earned 10 points!");
}

function viewImage(button) {
    const wrapper = button.closest('.image-wrapper');
    const overlay = wrapper.querySelector('.overlay');
    const image = wrapper.querySelector('.hidden-image');
    const claimButton = wrapper.querySelector('.claim-button');
    const pointsMessage = wrapper.querySelector('.imagePointsMessage');

    overlay.style.display = 'none';
    image.style.display = 'block';

    claimButton.disabled = false;
    alert("You can now claim your points.");
}

function claimImagePoints(button) {
    if (button.disabled) return;

    points += 10;
    updatePointsMessage();

    button.disabled = true;
    alert("You have earned 10 points!");
}

function viewArticle(button) {
    const wrapper = button.closest('.article-wrapper');
    const overlay = wrapper.querySelector('.overlay');
    const articleContent = wrapper.querySelector('.article-content');
    const claimButton = wrapper.querySelector('.claim-button');
    const pointsMessage = wrapper.querySelector('.articlePointsMessage');

    overlay.style.display = 'none';
    articleContent.style.display = 'block';

    claimButton.disabled = false;
    alert("You can now claim your points.");
}

function claimArticlePoints(button) {
    if (button.disabled) return;

    points += 10;
    updatePointsMessage();

    button.disabled = true;
    alert("You have earned 10 points!");
}

