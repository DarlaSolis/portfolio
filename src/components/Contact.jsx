import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSubmitted(false);
    setIsSubmitting(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/darladan001@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          _subject: 'Nuevo mensaje recibido desde tu Portafolio Web (Darla Solis)',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
      } else {
        throw new Error('Error al enviar mensaje');
      }
    } catch (err) {
      console.error('Error enviando formulario:', err);
      // Fallback mailto if AJAX endpoint is blocked/offline
      window.location.href = `mailto:darladan001@gmail.com?subject=Contacto%20Portafolio&body=${encodeURIComponent(message)}%0A%0ADe:%20${encodeURIComponent(email)}`;
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const waUrl = `https://wa.me/529991354832?text=${encodeURIComponent(
      'Hola Darla, vi tu portafolio y me gustaría ponerme en contacto contigo.'
    )}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contacto" className="contact section">
      <header className="contact__head">
        <p className="eyebrow">Disponibilidad Inmediata</p>
        <h2 className="contact__title">Contacto</h2>
        <div className="divider" />
        <p className="contact__subtitle">
          ¿Tienes un proyecto en mente, una propuesta laboral o deseas consultar sobre desarrollo backend? Selecciona el medio de contacto de tu preferencia.
        </p>
      </header>

      {/* Spacious 3-Column Component Cards Grid */}
      <div className="contact__grid">
        {/* Card 1: Direct Message via Website Modal */}
        <article className="contact-card" onClick={handleOpenModal}>
          <div className="contact-card__header">
            <div className="contact-card__icon-ring">
              <MailIcon />
            </div>
            <span className="contact-card__tag">MENSAJE DIRECTO</span>
          </div>

          <div className="contact-card__body">
            <h3 className="contact-card__title">Enviar por el sitio web</h3>
            <p className="contact-card__desc">Abre el formulario directo para redactar y enviar tu mensaje sin salir del sitio.</p>
          </div>

          <div className="contact-card__footer">
            <button type="button" className="btn btn--primary contact-card__btn">
              <MailIcon /> Redactar Mensaje
            </button>
          </div>
        </article>

        {/* Card 2: Phone & WhatsApp */}
        <article className="contact-card" onClick={handleWhatsApp}>
          <div className="contact-card__header">
            <div className="contact-card__icon-ring">
              <PhoneIcon />
            </div>
            <span className="contact-card__tag">NÚMERO DE TELÉFONO</span>
          </div>

          <div className="contact-card__body">
            <h3 className="contact-card__title">+52 (999) 135-4832</h3>
            <p className="contact-card__desc">Respuesta rápida vía WhatsApp para consultas profesionales inmediatas.</p>
          </div>

          <div className="contact-card__footer">
            <button type="button" className="btn btn--primary contact-card__btn">
              <WhatsAppIcon /> Enviar WhatsApp
            </button>
          </div>
        </article>

        {/* Card 3: Social Profiles */}
        <article className="contact-card">
          <div className="contact-card__header">
            <div className="contact-card__icon-ring">
              <ShareIcon />
            </div>
            <span className="contact-card__tag">REDES PROFESIONALES</span>
          </div>

          <div className="contact-card__body">
            <h3 className="contact-card__title">LinkedIn & GitHub</h3>
            <p className="contact-card__desc">Explora mi código fuente, proyectos y trayectoria laboral completa.</p>
          </div>

          <div className="contact-card__footer contact-card__footer--social">
            <a
              href="https://www.linkedin.com/in/darla-solis"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost contact-card__social-btn"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href="https://github.com/darlasolis"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost contact-card__social-btn"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </article>
      </div>

      {/* Modal Popup Overlay for Direct Message Form */}
      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={handleCloseModal} role="dialog" aria-modal="true">
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="contact-modal-close"
              onClick={handleCloseModal}
              aria-label="Cerrar formulario"
            >
              ✕
            </button>

            {submitted ? (
              <div className="contact-modal-success">
                <div className="contact-modal-success-badge">✓</div>
                <h3>¡Mensaje Enviado con Éxito!</h3>
                <p>
                  Gracias por tu mensaje. Se ha enviado correctamente a <strong>darladan001@gmail.com</strong> desde <strong>{email}</strong>. Darla te responderá a la brevedad.
                </p>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={handleCloseModal}
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-modal-form">
                <h3 className="contact-modal-title">Envíame un mensaje directo</h3>

                <div className="contact-modal-field">
                  <label htmlFor="modal-email" className="contact-modal-label">
                    Tu Correo Electrónico
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    className="contact-modal-input"
                    placeholder="tu_correo@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="contact-modal-field">
                  <label htmlFor="modal-message" className="contact-modal-label">
                    Mensaje
                  </label>
                  <textarea
                    id="modal-message"
                    className="contact-modal-textarea"
                    rows={5}
                    placeholder="Me gustaría conocer más sobre tu proyecto, oportunidad de colaboración o cualquier consulta que tengas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="contact-modal-footer">
                  <button
                    type="submit"
                    className="btn btn--primary contact-modal-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <SendIcon /> Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.889-5.335 11.893-11.893.002-3.179-1.233-6.166-3.479-8.413" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3v11.5h-3V9Zm6 0h2.88v1.57h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v6.9h-3v-6.12c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.6-2.35 3.24v6.22h-3V9Z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.3 6.84 9.65.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default Contact;
