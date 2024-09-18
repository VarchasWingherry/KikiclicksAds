let points = 0;

function updatePointsMessage() {
    document.querySelectorAll('#pointsMessage').forEach(message => {
        message.textContent = `Total points: ${points}`;
    });
}

function viewImage(button) {
    const wrapper = button.closest('.image-wrapper');
    const overlay = wrapper.querySelector('.overlay');
    const image = wrapper.querySelector('.hidden-image');
    const claimButton = wrapper.querySelector('.claim-button');
    const pointsMessage = wrapper.querySelector('#imagePointsMessage');

    overlay.style.display = 'none';
    image.style.display = 'block';

    claimButton.disabled = false;
    pointsMessage.textContent = `You can claim your points.`;
}

function claimImagePoints(button) {
    if (button.disabled) return;

    points += 10;
    updatePointsMessage();

    const pointsMessage = button.closest('.image-wrapper').querySelector('#imagePointsMessage');
    pointsMessage.textContent = `You have earned 10 points! Total points: ${points}`;
    
    button.disabled = true;
}

function playAd(videoId, claimButtonId) {
    const videoAd = document.getElementById(videoId);
    videoAd.play();
    videoAd.nextElementSibling.style.display = 'none';
    videoAd.addEventListener('ended', () => {
        document.getElementById(claimButtonId).disabled = false;
        document.querySelectorAll('#adPointsMessage').forEach(message => {
            message.textContent = `You can claim your points.`;
        });
    });
}

function claimAdPoints(claimButtonId) {
    if (document.getElementById(claimButtonId).disabled) return;

    points += 10;
    updatePointsMessage();

    document.getElementById(claimButtonId).disabled = true;
}