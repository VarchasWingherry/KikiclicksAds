document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabhead');
    const views = document.querySelectorAll('.viewvideo, .viewimg, .viewarticle');

    // Ensure initial state
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

            // Log which tab was clicked
            console.log(`Tab clicked: ${tab.textContent.trim()}`);

            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('actives'));
            // Hide all views
            views.forEach(v => v.style.display = 'none');

            // Add 'active' class to the clicked tab
            tab.classList.add('actives');
            // Display the corresponding view based on index
            views[index].style.display = 'block';
        });
    });
});
