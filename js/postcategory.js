function checkSelection(event) {
    const selected = document.querySelector('input[name="category"]:checked');
    
    if (!selected) {
        event.preventDefault();
        alert('Please select a category before proceeding.');
    }
}