// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active state on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#my-nav .nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

document.getElementById('preventivo-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Prendi i valori dal form
    const nome = encodeURIComponent(document.querySelector('#preventivo-form input[type="text"]').value);
    const email = encodeURIComponent(document.querySelector('#preventivo-form input[type="email"]').value);
    const telefono = encodeURIComponent(document.querySelector('#preventivo-form input[type="tel"]').value);
    const servizio = encodeURIComponent(document.querySelector('#preventivo-form select').value);
    const messaggio = encodeURIComponent(document.querySelector('#preventivo-form textarea').value);

    // Costruisci il messaggio WhatsApp
    let whatsappText = `Ciao, mi chiamo ${nome}. Vorrei un preventivo per il servizio: ${servizio}.`;
    whatsappText += `%0A%0AInformazioni di contatto:%0AEmail: ${email}%0ATelefono: ${telefono}`;
    whatsappText += `%0A%0AMessaggio:%0A${messaggio}`;

    // Apri WhatsApp
    window.open(`https://wa.me/+393271450340?text=${whatsappText}`, '_blank');
});

// Gestione link Termini e Privacy
document.querySelectorAll('a[href="#terms"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#terms').style.display = 'block';
        document.querySelector('main').style.display = 'none';
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
    });
});

// Stessa cosa per #privacy...

// Gestione pulsante "Torna al sito"
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#terms').style.display = 'none';
        document.querySelector('#privacy').style.display = 'none';
        document.querySelector('main').style.display = 'block';
        document.querySelector('header').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    });
});