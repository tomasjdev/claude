// Inserta el pie de página compartido en el elemento #footer
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("footer");
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="index.html" class="footer-logo">Horizonte<span>Inmobiliaria</span></a>
        <p>Somos una agencia inmobiliaria especializada en compra, venta y renta de propiedades residenciales, comprometida con la transparencia y el servicio de excelencia.</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8.75h4.6V23H.2V8.75zM8.4 8.75h4.4v1.95h.06c.6-1.14 2.1-2.34 4.3-2.34 4.6 0 5.45 3 5.45 6.95V23h-4.6v-6.7c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.53V23H8.4V8.75z"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Enlaces</h4>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="propiedades.html">Propiedades</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4>Propiedades</h4>
        <ul>
          <li><a href="propiedades.html?type=venta">En venta</a></li>
          <li><a href="propiedades.html?type=renta">En renta</a></li>
          <li><a href="propiedades.html?category=Casa">Casas</a></li>
          <li><a href="propiedades.html?category=Departamento">Departamentos</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul class="footer-contact">
          <li>${'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'} Av. Reforma 123, Ciudad de México</li>
          <li>${'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'} +52 55 1234 5678</li>
          <li>${'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" stroke-opacity="0"/><path d="M22 6 12 13 2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>'} contacto@horizonteinmobiliaria.com</li>
        </ul>
        <h4 style="margin-top:24px;">Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" placeholder="Tu correo electrónico" required>
          <button type="submit" aria-label="Suscribirse">→</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year"></span> Horizonte Inmobiliaria. Todos los derechos reservados.</span>
      <span><a href="#">Aviso de privacidad</a> · <a href="#">Términos y condiciones</a></span>
    </div>
  </div>`;
  initFooterYear();
  initNewsletterForm();
});
