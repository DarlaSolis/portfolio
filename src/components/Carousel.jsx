import { useRef, useState, useEffect, useCallback } from 'react';
import './Carousel.css';

const AUTOPLAY_DELAY = 3000; // Change every 3 seconds

const Carousel = ({ items }) => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const timerRef = useRef(null);
  const isPausedRef = useRef(false);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track || items.length === 0) return;
      const nextIndex = (index + items.length) % items.length;
      const targetCard = track.children[nextIndex];
      if (targetCard) {
        track.scrollTo({
          left: targetCard.offsetLeft - track.offsetLeft,
          behavior: 'smooth',
        });
      }
      setActiveIndex(nextIndex);
    },
    [items.length]
  );

  // Auto-play timer (3 seconds)
  useEffect(() => {
    if (!items || items.length === 0) return undefined;
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current && !selectedCert) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % items.length;
          const track = trackRef.current;
          if (track && track.children[next]) {
            track.scrollTo({
              left: track.children[next].offsetLeft - track.offsetLeft,
              behavior: 'smooth',
            });
          }
          return next;
        });
      }
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timerRef.current);
  }, [items, selectedCert]);

  // Sync index on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const handleScroll = () => {
      const { scrollLeft, children } = track;
      let closest = 0;
      let minDiff = Infinity;
      Array.from(children).forEach((child, i) => {
        const diff = Math.abs(child.offsetLeft - track.offsetLeft - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  const handleOpenCert = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    setSelectedCert(null);
  };

  return (
    <div
      className="carousel-wrap"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div className="carousel__track" ref={trackRef}>
        {items.map((item) => (
          <article
            key={item.id}
            className="ccard"
            onClick={() => handleOpenCert(item)}
            role="button"
            tabIndex={0}
            aria-label={`Ver certificado ${item.title}`}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenCert(item)}
          >
            <div className="ccard__badge-row">
              <span className="ccard__tag">{item.tag || 'Certificación'}</span>
              <span className="ccard__date">{item.date}</span>
            </div>

            <div className="ccard__body">
              <div className="ccard__icon-ring">
                <CertIcon />
              </div>
              <h3 className="ccard__title">{item.title}</h3>
              <p className="ccard__issuer">{item.issuer}</p>
              <p className="ccard__desc">{item.description}</p>
            </div>

            <div className="ccard__actions" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="btn btn--primary ccard__action-btn"
                onClick={() => handleOpenCert(item)}
              >
                <DocumentIcon /> Ver Certificado
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Clean Arrow Navigation (No dots) */}
      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__btn"
          onClick={() => scrollToIndex(activeIndex - 1)}
          aria-label="Certificado Anterior"
        >
          <ChevronIcon flip />
        </button>

        <button
          type="button"
          className="carousel__btn"
          onClick={() => scrollToIndex(activeIndex + 1)}
          aria-label="Siguiente Certificado"
        >
          <ChevronIcon />
        </button>
      </div>

      {/* Overlay Modal for Certificate Preview */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={handleCloseCert} role="dialog" aria-modal="true">
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={handleCloseCert}
              aria-label="Cerrar certificado"
            >
              ✕
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="cert-modal-tag">{selectedCert.tag}</span>
            </div>

            <div className="cert-modal-body">
              <h2 className="cert-modal-title">{selectedCert.title}</h2>
              <p className="cert-modal-issuer">{selectedCert.issuer} · {selectedCert.date}</p>
              <p className="cert-modal-desc">{selectedCert.description}</p>

              <div className="cert-modal-preview">
                {selectedCert.pdfUrl && selectedCert.pdfUrl.endsWith('.jpeg') ? (
                  <img
                    src={selectedCert.pdfUrl}
                    alt={selectedCert.title}
                    className="cert-modal-img"
                  />
                ) : selectedCert.pdfUrl ? (
                  <object
                    data={selectedCert.pdfUrl}
                    type="application/pdf"
                    className="cert-modal-pdf"
                  >
                    <div className="cert-modal-pdf-fallback">
                      <p>Documento PDF oficial de {selectedCert.title}</p>
                      <a href={selectedCert.pdfUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
                        Abrir PDF en Pantalla Completa ↗
                      </a>
                    </div>
                  </object>
                ) : (
                  <div className="cert-modal-credly-badge">
                    <CertIcon />
                    <h3>Insignia Oficial de Verificación</h3>
                    <p>Emitida por {selectedCert.issuer}</p>
                  </div>
                )}
              </div>

              <div className="cert-modal-actions">
                {selectedCert.credlyBadgeId && (
                  <a
                    href={`https://www.credly.com/badges/${selectedCert.credlyBadgeId}/public_url`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost"
                  >
                    <CredlyIcon /> Verificar en Credly ↗
                  </a>
                )}
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--primary"
                  >
                    <DocumentIcon /> Descargar / Ver Documento ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function CertIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 13 7 20l5-2.5 5 2.5-1.5-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CredlyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8v7.6L12 19.4 5.2 15.6V8L12 4.2z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function ChevronIcon({ flip }) {
  return (
    <svg
      viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Carousel;