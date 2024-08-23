// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', () => {
    // Butonu seç
    const button = document.querySelector('button');

    // Butona tıklandığında çalışacak fonksiyon
    button.addEventListener('click', () => {
        alert('Butona tıkladınız!');
    });
});
