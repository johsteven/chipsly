const kontakForm = document.querySelector("#kontak-form");
const barBtn = document.querySelector("#bar-btn");
const navMenuCollapse = document.querySelector(".nav-menu-collapse");
let collapse = false;
const chipslyTelp = 6287840598951;

function kirim() {
    const fieldNama = kontakForm.querySelector("#nama").value;
    const fieldTelp = kontakForm.querySelector("#telp").value;
    const fieldPesan = kontakForm.querySelector("#pesan").value;

    const placeholderChat = `Halo, nama saya ${fieldNama}, saya ingin memberi kritik dan saran mengenai produk Chipsly "${fieldPesan}" terimakasih. Berikut nomor telepon saya lampirkan ${fieldTelp}`
    const textChat = placeholderChat.split(' ').join('%20');

    const url = `https://wa.me/${chipslyTelp}?text=${textChat}`;
    window.open(url, '_blank')
}

function navCollapsed() {
    collapse = true;
    if (collapse) {
        navMenuCollapse.classList.toggle('-right-full');
        navMenuCollapse.classList.toggle('right-0')
    }
}

kontakForm.addEventListener("submit", kirim);
barBtn.addEventListener("click", navCollapsed)
navMenuCollapse.addEventListener("click", navCollapsed)