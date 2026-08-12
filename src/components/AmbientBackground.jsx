import './AmbientBackground.css';

const AmbientBackground = () => {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--1" />
      <div className="ambient__orb ambient__orb--2" />
      <div className="ambient__orb ambient__orb--3" />
    </div>
  );
};

export default AmbientBackground;
