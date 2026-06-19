function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Protect WhatsApp number from scraping
window.addEventListener('DOMContentLoaded', function() {
    // Number is split and reversed to deter automated scrapers
    const phoneNumber = ['7', '1', '0', '3', '0', '4', '4', '4', '5', '0'].reverse().join('');
    const messageTop = encodeURIComponent('Hello David, I saw your portfolio');
    const messageContact = encodeURIComponent('Hello David, I would like to connect');
    
    // Desktop nav WhatsApp link
    const navLink = document.querySelector('.whatsapp-nav-link');
    if (navLink) {
        navLink.href = `https://wa.me/${phoneNumber}?text=${messageTop}`;
    }
    
    // Mobile menu WhatsApp link
    const mobileLink = document.querySelector('.whatsapp-mobile-link');
    if (mobileLink) {
        mobileLink.href = `https://wa.me/${phoneNumber}?text=${messageTop}`;
        mobileLink.removeAttribute('onclick');
        mobileLink.target = '_blank';
        mobileLink.rel = 'noopener noreferrer';
    }
    
    // Profile section WhatsApp link
    const profileLink = document.querySelector('.whatsapp-profile-link');
    if (profileLink) {
        profileLink.href = `https://wa.me/${phoneNumber}?text=${messageTop}`;
    }
    
    // Contact section WhatsApp link
    const contactLink = document.querySelector('.whatsapp-contact-link');
    if (contactLink) {
        contactLink.href = `https://wa.me/${phoneNumber}?text=${messageContact}`;
    }
});