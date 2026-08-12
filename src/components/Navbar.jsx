import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const sections = [
  { id: 'inicio', label: 'Inicio', icon: HomeIcon },
  { id: 'acerca', label: 'Acerca de mí', icon: UserIcon },
  { id: 'proyectos', label: 'Proyectos', icon: FolderIcon },
  { id: 'otros', label: 'Certificados', icon: DiamondIcon },
  { id: 'contacto', label: 'Contacto', icon: MailIcon },
];

export const Navbar = () => {
  const [active, setActive] = useState('inicio');
  const [hidden, setHidden] = useState(false);
  const observerRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isOnePage = location.pathname === '/' || location.pathname.startsWith('/proyectos');

  // Initial Hash Scroll
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const element = document.getElementById(hashId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  // Scroll Hide/Show Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 60) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current + 10) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current - 10) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setHidden(false);
      }, 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // IntersectionObserver to sync active section
  useEffect(() => {
    if (!isOnePage) return undefined;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
          if (!window.location.pathname.startsWith('/proyectos')) {
            if (window.location.hash !== `#${visible.target.id}`) {
              window.history.replaceState(null, '', `#${visible.target.id}`);
            }
          }
        }
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [isOnePage]);

  const goTo = (id) => {
    if (location.pathname.startsWith('/proyectos')) {
      navigate(`/#${id}`);
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
      return;
    }
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav-wrap ${hidden ? 'nav-wrap--hidden' : ''}`}>
      <nav className="nav" aria-label="Navegación principal">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => goTo(id)}
            className={`nav__item ${active === id ? 'nav__item--active' : ''}`}
            aria-label={label}
            title={label}
          >
            <span className="nav__icon"><Icon /></span>
            <span className="nav__label">{label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h3.5a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20c1-3.6 4-5.6 7.2-5.6s6.2 2 7.2 5.6" strokeLinecap="round" />
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.5 6.5a1 1 0 0 1 1-1h4.4l1.7 2h9a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-11.5Z" strokeLinejoin="round" />
    </svg>
  );
}
function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="6" y="6" width="12" height="12" rx="2" transform="rotate(45 12 12)" />
      <path d="M12 9.6v4.8M9.6 12h4.8" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default Navbar;