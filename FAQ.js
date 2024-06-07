document.addEventListener("DOMContentLoaded", function () {
    var faqs = document.querySelectorAll('.faq');
    faqs.forEach(function (faq) {
        faq.addEventListener('click', function () {
            var answer = this.querySelector('.faq-answer');
            var isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
