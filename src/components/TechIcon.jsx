import './TechIcon.css';

export const TechIcon = ({ name, showLabel = false }) => {
  const IconComponent = iconMap[name] || DefaultIcon;

  return (
    <span className="tech-chip" title={name} aria-label={name}>
      <span className="tech-chip__icon">
        <IconComponent />
      </span>
      {showLabel && <span className="tech-chip__name">{name}</span>}
    </span>
  );
};

function ReactIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="16" cy="16" rx="8" ry="14" strokeLinecap="round" />
      <ellipse cx="16" cy="16" rx="14" ry="8" strokeLinecap="round" transform="rotate(90 16 16)" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="24" height="24" rx="4" />
      <path d="M12 11.5v9m0 0 3-1.5" strokeLinecap="round" />
      <path d="M20 11.5v9m0 0-3-1.5" strokeLinecap="round" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 4h12a6 6 0 0 1 6 6v4H10V4Z" fill="currentColor" opacity="0.15" />
      <path d="M22 28H10a6 6 0 0 1-6-6v-4h18v10Z" fill="currentColor" opacity="0.15" />
      <path d="M10 4h12a6 6 0 0 1 6 6v4H10V4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 28H10a6 6 0 0 1-6-6v-4h18v10Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12.5" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="19.5" cy="21.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9c0 5 8 5 8 0m-8 4c0 7 10 7 10 0" strokeLinecap="round" />
      <path d="M10 22c3 2 9 2 12 0" strokeLinecap="round" />
      <path d="M16 7c4 2 4 5 0 7" strokeLinecap="round" />
    </svg>
  );
}

function DartIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 26 16 6 26 26 16 18 6 26Z" strokeLinejoin="round" />
      <path d="M16 18 9 24.5M16 18 23 24.5" strokeLinecap="round" />
    </svg>
  );
}

function SpringIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 22c3 0 3-5 6-5s3 5 6 5" strokeLinecap="round" />
      <path d="M14 12c2-2 6-2 8 0" strokeLinecap="round" />
      <path d="M10 12c2-2 6-2 8 0" strokeLinecap="round" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="16" cy="8" rx="10" ry="4" />
      <path d="M6 8v10c0 2 4 4 10 4s10-2 10-4V8" />
      <path d="M6 14c0 2 4 4 10 4s10-2 10-4" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 17h16v7H8z" strokeLinejoin="round" fill="currentColor" opacity="0.1" />
      <path d="M8 17h16v7H8z" strokeLinejoin="round" />
      <path d="M12 17v-4h2v4M16 17v-4h2v4M20 17v-4h2v4" strokeLinecap="round" />
      <path d="M6 20h20M10 14h3M15 14h3M20 14h3" strokeLinecap="round" />
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 16c2 6 10 6 12 0" strokeLinecap="round" />
      <path d="M16 14l-4-4 4-4 4 4-4 4Z" fill="currentColor" opacity="0.15" />
      <path d="M16 6v8" strokeLinecap="round" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="23" r="2.5" fill="currentColor" />
      <circle cx="23" cy="9" r="2.5" fill="currentColor" />
      <circle cx="23" cy="23" r="2.5" fill="currentColor" />
      <path d="M11.5 21.5 20.5 12.5M20.5 10.5v9M11.5 24.5h8" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4c-6 0-10 4.5-10 10 0 4.5 3 8.5 7 9.9.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.4-2.3-.2-4.5-1.1-4.5-5 0-1.1.4-2 1-2.8 0-.2-.4-1.3.1-2.7 0 0 .9-.3 2.8 1 1-.3 2-.4 3-.4s2 .1 3 .4c1.9-1.3 2.8-1 2.8-1 .5 1.4.1 2.5.1 2.7.6.8 1 1.7 1 2.8 0 3.9-2.2 4.8-4.5 5 .4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5 4-1.4 7-5.4 7-9.9 0-5.5-4-10-10-10Z" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 9h12v14H10z" rx="2" ry="2" />
      <path d="M14 13h4M14 17h4M14 21h4" strokeLinecap="round" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a4 4 0 1 1 0 8h-4a4 4 0 1 1 0-8h4Z" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="22" r="4" fill="currentColor" />
      <path d="M16 18h4a4 4 0 1 0 0-8h-4" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function OdooIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="10" cy="16" r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="22" cy="16" r="3" />
      <path d="M7 16h18" strokeLinecap="round" />
    </svg>
  );
}

function CanvasIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 8h16v16H8z" rx="3" ry="3" />
      <path d="M12 12l8 8M20 12l-8 8" strokeLinecap="round" />
    </svg>
  );
}

function ScrumIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 6a10 10 0 1 0 10 10" strokeLinecap="round" />
      <path d="M26 12l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

function BashIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 10l6 6-6 6M14 22h12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlutterIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 6L6 16l4 4 16-16H16zM14 18l4 4-8 8h-6l10-10z" strokeLinejoin="round" />
    </svg>
  );
}

function LaravelIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 8l8-4 8 4v8l-8 4-8-4V8z" strokeLinejoin="round" fill="currentColor" opacity="0.15" />
      <path d="M8 8l8-4 8 4v8l-8 4-8-4V8zM16 4v12M8 8l8 4 8-4M16 16l8 4M16 16V28" strokeLinejoin="round" />
    </svg>
  );
}

function PhpIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="16" cy="16" rx="12" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="16" cy="16" rx="12" ry="7" />
      <path d="M10 13v6M10 13h3a2 2 0 0 1 0 4h-3M16 13v6M16 16h3M22 13v6M22 13h3a2 2 0 0 1 0 4h-3" strokeLinecap="round" />
    </svg>
  );
}

function BladeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 26L22 6h4v4L10 26H6z" fill="currentColor" opacity="0.2" />
      <path d="M6 26L22 6h4v4L10 26H6z" strokeLinejoin="round" />
      <path d="M14 14l4 4" strokeLinecap="round" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 13c2-3.5 5-5 8-3 3 2 4 4 6 4 3 0 5-1.5 6-4-1.5 3.5-4.5 5-7.5 3-3-2-4-4-6.5-4C9.5 9 7.5 10.5 6 13z" fill="currentColor" opacity="0.2" />
      <path d="M6 13c2-3.5 5-5 8-3 3 2 4 4 6 4 3 0 5-1.5 6-4-1.5 3.5-4.5 5-7.5 3-3-2-4-4-6.5-4C9.5 9 7.5 10.5 6 13zM6 21c2-3.5 5-5 8-3 3 2 4 4 6 4 3 0 5-1.5 6-4-1.5 3.5-4.5 5-7.5 3-3-2-4-4-6.5-4C9.5 17 7.5 18.5 6 21z" strokeLinejoin="round" />
    </svg>
  );
}

function Html5Icon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h20l-2 21-8 3-8-3L6 4z" fill="currentColor" opacity="0.15" />
      <path d="M6 4h20l-2 21-8 3-8-3L6 4z" strokeLinejoin="round" />
      <path d="M22 9H10l.5 6h11l-.8 8-4.7 1.6-4.7-1.6-.3-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Css3Icon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h20l-2 21-8 3-8-3L6 4z" strokeLinejoin="round" />
      <path d="M22 9H10.5l.5 5.5h10.5l-.8 8.5-4.7 1.5-4.7-1.5-.3-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4l11 6.5v13L16 30 5 23.5v-13L16 4z" fill="currentColor" opacity="0.15" />
      <path d="M16 4l11 6.5v13L16 30 5 23.5v-13L16 4z" strokeLinejoin="round" />
      <path d="M16 12v8M12 16h8" strokeLinecap="round" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22l6-12 4 6 4-6 6 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 26h24" strokeLinecap="round" />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 6l11 20L27 6l-11 3L5 6z" fill="currentColor" opacity="0.15" />
      <path d="M5 6l11 20L27 6l-11 3L5 6z" strokeLinejoin="round" />
      <path d="M16 9v17" strokeLinecap="round" />
    </svg>
  );
}

function ReactRouterIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <circle cx="24" cy="8" r="3" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M11 8h10M24 11v10M8 11v6c0 4 3 7 7 7h6" strokeLinecap="round" />
    </svg>
  );
}

function SwiperIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="8" width="22" height="16" rx="3" strokeLinejoin="round" />
      <path d="M10 16l4-4 4 4M18 16l4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TmdbIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="8" width="24" height="16" rx="2" strokeLinejoin="round" />
      <path d="M4 13h24M9 8v5M16 8v5M23 8v5M9 19v5M16 19v5M23 19v5" strokeLinecap="round" />
    </svg>
  );
}

function AlpineIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 24L16 8l10 16H6z" fill="currentColor" opacity="0.15" />
      <path d="M6 24L16 8l10 16H6z" strokeLinejoin="round" />
      <path d="M10 18l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GoogleCloudIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 22a6 6 0 0 1-1-11.9 8 8 0 0 1 15 2.9A5 5 0 0 1 23 22H10z" strokeLinejoin="round" fill="currentColor" opacity="0.15" />
      <path d="M10 22a6 6 0 0 1-1-11.9 8 8 0 0 1 15 2.9A5 5 0 0 1 23 22H10z" strokeLinejoin="round" />
    </svg>
  );
}

function DefaultIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="16" cy="16" r="10" />
      <path d="M12 12h8M12 20h8" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  React: ReactIcon,
  JavaScript: JsIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  Dart: DartIcon,
  'Spring Boot': SpringIcon,
  MySQL: DatabaseIcon,
  PostgreSQL: DatabaseIcon,
  Docker: DockerIcon,
  'AWS (Fundamentos)': AwsIcon,
  'AWS (Fundamentals)': AwsIcon,
  AWS: AwsIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  'REST APIs': ApiIcon,
  Figma: FigmaIcon,
  Odoo: OdooIcon,
  'Canvas API': CanvasIcon,
  Scrum: ScrumIcon,
  Bash: BashIcon,
  Flutter: FlutterIcon,
  Laravel: LaravelIcon,
  PHP: PhpIcon,
  Blade: BladeIcon,
  'Tailwind CSS': TailwindIcon,
  Tailwind: TailwindIcon,
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  'Node.js': NodeIcon,
  Express: ExpressIcon,
  Vite: ViteIcon,
  'React Router': ReactRouterIcon,
  Swiper: SwiperIcon,
  'TMDB API': TmdbIcon,
  'Alpine.js': AlpineIcon,
  'Google Cloud': GoogleCloudIcon,
  'Google Cloud (Fundamentals)': GoogleCloudIcon,
  GCP: GoogleCloudIcon,
};
