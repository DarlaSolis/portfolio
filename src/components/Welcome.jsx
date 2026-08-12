import { useEffect, useState } from 'react';
import './Welcome.css';

const Welcome = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        setTimeout(onFinish, 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  return (
    <div className={`welcome ${leaving ? 'welcome--leaving' : ''}`}>
      <div className="welcome__noise" />
      <div className="welcome__content">
        <h1 className="welcome__title">¡Bienvenido!</h1>
        <div className="welcome__bar-track">
          <div
            className="welcome__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="welcome__pct">{Math.floor(progress)}%</span>
      </div>
    </div>
  );
};

export default Welcome;
