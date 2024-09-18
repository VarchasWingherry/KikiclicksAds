const review = document.getElementById("addreview");

function openReview() {
    review.style.display = 'block';
    review.style.display = 'flex';
    review.style.flexDirection = 'column';
    review.style.alignItems = 'center';
    review.style.justifyContent = 'space-evenly';
    review.style.marginLeft = '50px';
}

function closeReview() {
    review.style.display = 'none';
}

const allStars = document.querySelectorAll('.star .st');
const ratingValue = document.getElementById('ratingvalue');
allStars.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0;
        ratingValue.value = idx + 1;
        allStars.forEach(i => {
            i.classList.replace('fa-solid', 'fa-regular');
            i.classList.remove('active');
        });
        for (let i = 0; i < allStars.length; i++)
            if (i <= idx) {
                allStars[i].classList.replace('fa-regular', 'fa-solid');
                allStars[i].classList.add('active');
            } else {
                allStars[i].style.setProperty('--i', click);
                click++;
            }
    });
});

document.getElementById('addreview').addEventListener('submit', function (event) {
    event.preventDefault();
    const display = document.getElementById('rating-sections');
    display.style.display = 'block';

    const name = document.getElementById('commentername').value;
    const comment = document.getElementById('reviewcomments').value;
    const reviewContainer = document.getElementById('reviews-container');
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const newReview = document.createElement('div');
    newReview.classList.add('review-item');

    const reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');

    const reviewerName = document.createElement('div');
    reviewerName.classList.add('name');
    reviewerName.textContent = name;

    const reviewDate = document.createElement('div');
    reviewDate.classList.add('date');
    reviewDate.textContent = `${date} ${time}`;

    reviewHeader.appendChild(reviewerName);
    reviewHeader.appendChild(reviewDate);

    const StarRating = document.createElement('div');
    StarRating.classList.add('rating-done');
    let Stars = '';
    for (let i = 0; i < ratingValue.value; i++) {
        Stars += `<i class="fa-solid fa-star"></i>`;
    }
    StarRating.innerHTML = Stars;

    const commentDone = document.createElement('div');
    commentDone.classList.add('comment-done');
    commentDone.textContent = comment;

    newReview.appendChild(reviewHeader);
    newReview.appendChild(StarRating);
    newReview.appendChild(commentDone);

    reviewContainer.appendChild(newReview);

    document.getElementById('commentername').value = '';
    document.getElementById('reviewcomments').value = '';
    ratingValue.value = 0;
    allStars.forEach(i => {
        i.classList.replace('fa-solid', 'fa-regular');
        i.classList.remove('active');
    });

    closeReview();
});
