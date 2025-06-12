const image = document.getElementById('modal__image');
const card = document.getElementById('modal__cards');

image.addEventListener('click', function() {
    if (card.style.display === 'none' || card.style.display === '') {
      card.style.display = 'flex';  // Kartochkalarni ko'rsatish
    } else {
      card.style.display = 'none';  // Kartochkalarni yashirish
    }
});

const img = document.getElementById('modal__second__img');
const second = document.getElementById('modal__second__card');

img.addEventListener('click', function() {
    if (second.style.display === 'none' || second.style.display === '') {
      second.style.display = 'flex';  // Kartochkalarni ko'rsatish
    } else {
      second.style.display = 'none';  // Kartochkalarni yashirish
    }
});

const ki = document.getElementById('kitob');
const bi = document.getElementById('bitob');

ki.addEventListener('click', function() {
    if (bi.style.display === 'none' || bi.style.display === '') {
      bi.style.display = 'flex';  // Kartochkalarni ko'rsatish
    } else {
      bi.style.display = 'none';  // Kartochkalarni yashirish
    }
});

const a = document.getElementById('abu');
const ba = document.getElementById('babu');

a.addEventListener('click', function() {
    if (ba.style.display === 'none' || ba.style.display === '') {
      ba.style.display = 'flex';  // Kartochkalarni ko'rsatish
    } else {
      ba.style.display = 'none';  // Kartochkalarni yashirish
    }
});

const za = document.getElementById('zaynab');
const cha = document.getElementById('chaynak');

za.addEventListener('click', function() {
    if (cha.style.display === 'none' || cha.style.display === '') {
      cha.style.display = 'flex';  // Kartochkalarni ko'rsatish
    } else {
      cha.style.display = 'none';  // Kartochkalarni yashirish
    }
});

// modal

// Sahifa yuklanganda modalni yashirish (agar ochiq bo‘lsa)
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("modal").style.display = "none";
});

// "Show Order Summary" tugmasini bosganda modalni ochish
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "flex";
});

// "Checkout" tugmasini bosganda modalni yopish
document.getElementById("checkout").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Modal tashqarisini bosganda uni yopish
window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
  }
});
