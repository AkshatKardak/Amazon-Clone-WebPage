// Search Input Live Filter
const searchInput = document.querySelector('.search-input');
const productBoxes = document.querySelectorAll('.box');

searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    productBoxes.forEach(box => {
        const title = box.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});

// LocalStorage Cart Counter
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
const cartText = document.querySelector('.cart-text');
cartText.innerText = `Cart (${cartCount})`;

document.querySelectorAll('.box-content p').forEach((item) => {
    item.addEventListener('click', () => {
        const category = item.parentElement.querySelector('h2').innerText;
        alert(`Redirecting to more ${category}...`);
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        cartText.innerText = `Cart (${cartCount})`;
    });
});

// Back to Top
const backToTop = document.querySelector('.foot-panel1');
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Category Filter Dropdown
const categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', function () {
    const selected = this.value;
    productBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        if (selected === 'all' || boxCategory === selected) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
});

// Login Modal Logic
const modal = document.getElementById('loginModal');
const signinBtn = document.querySelector('.nav-signin');
const closeBtn = document.querySelector('.close-btn');

signinBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('emailInput').value;
    alert(`Logged in as: ${email}`);
    modal.style.display = 'none';
});
