// // JavaScript
// window.sr = ScrollReveal();
// sr.reveal('.foo');
// sr.reveal('.bar');


// Changing the defaults
 
window.sr = ScrollReveal({ scale: 0.9, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', reset: true });

// Customizing a reveal set
// sr.reveal('.column', { duration: 500 });
sr.reveal('.container', { duration: 1000 });
sr.reveal('p', { duration: 800 });

