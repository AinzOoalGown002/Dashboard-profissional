
const expItems = document.querySelectorAll('.exp-item');

expItems.forEach(item => {
    let typingTimer;
    const text = item.getAttribute('data-desc');
    const display = item.querySelector('.typing-area');

    item.addEventListener('mouseenter', () => {
        display.innerHTML = "";
        let i = 0;
        clearInterval(typingTimer);
        typingTimer = setInterval(() => {
            if (i < text.length) {
                display.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingTimer);
            }
        }, 30);
    });

    item.addEventListener('mouseleave', () => {
        clearInterval(typingTimer);
        display.innerHTML = "";
    });
});

const modal = document.getElementById("modal-container");
const modalBody = document.getElementById("modal-body");
const cards = document.querySelectorAll('.interactive');

cards.forEach(card => {
    card.onclick = () => {
        modalBody.innerHTML = card.innerHTML;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };
});

document.querySelector(".close-btn").onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};