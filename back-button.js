// back-button.js
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        // Remove any existing href
        backBtn.removeAttribute('href');

        // Add click event
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();

            // If there's history, go back
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // If no history, go to home
                window.location.href = 'index.html';
            }
        });

        // Update button text
        const icon = '<i class="fa-solid fa-arrow-left"></i> ';
        backBtn.innerHTML = window.history.length > 1 ?
            icon + 'Go Back' :
            icon + 'Back to Home';
    }
});