document.addEventListener('DOMContentLoaded', function() {
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const orderAcceptedContainer = document.querySelector('.order-accepted');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const hospitalOrder = this.parentElement;
            orderAcceptedContainer.appendChild(hospitalOrder);

            // Optionally, disable the accept button after moving the order
            this.disabled = true;
            this.textContent = "Accepted";
        });
    });
});