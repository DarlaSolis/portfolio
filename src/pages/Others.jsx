import { extras } from '../data/extras';
import Carousel from '../components/Carousel';
import './Others.css';

const Others = () => {
  return (
    <section id="otros" className="others section">
      <header className="others__head">
        <p className="eyebrow">Más sobre mí</p>
        <h1 className="others__title">Otros</h1>
        <div className="divider" />
        <p className="others__hint">
          Certificaciones, cursos e información extra que complementan mi
          perfil técnico.
        </p>
      </header>

      <Carousel items={extras} />
    </section>
  );
};

export default Others;
