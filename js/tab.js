document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabhead');
    const views = document.querySelectorAll('.viewvideo, .viewimg, .viewarticle');

    views.forEach((view, index) => {
        if (index === 0) {
            view.style.display = 'block';
        } else {
            view.style.display = 'none';
        }
    });

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            console.log(`Tab clicked: ${tab.textContent.trim()}`);

            tabs.forEach(t => t.classList.remove('active'));

            views.forEach(v => v.style.display = 'none');

            tab.classList.add('active');
            
            views[index].style.display = 'block';
        });
    });
});
