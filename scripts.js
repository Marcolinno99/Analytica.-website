document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const feedback = document.getElementById('formFeedback');
    
    if (name && email && message) {
        feedback.textContent = 'Grazie per averci contattato! Risponderemo al più presto.';
        feedback.style.display = 'block';
        feedback.style.color = 'green';
        form.reset();
    } else {
        feedback.textContent = 'Per favore, compila tutti i campi richiesti.';
        feedback.style.display = 'block';
        feedback.style.color = 'red';
    }
});

// FAQ expand and collapse
document.querySelectorAll('.faq-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const isOpen = this.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('open'));
        if (!isOpen) {
            this.classList.add('open');
        }
    });
});
