import { profile } from "../data/content";
import TerminalPanel from "./TerminalPanel";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero scanlines">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__status mono">
            <span className="hero__status-dot" />
            SYSTEM_ONLINE · SECURITY_STATUS: ACTIVE
          </div>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role mono">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta-row">
            <a href={profile.cvPath} download className="btn btn--primary">
              Descargar CV
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contactar
            </a>
          </div>

          <div className="hero__links mono">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <span className="hero__links-sep">/</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <TerminalPanel />
        </div>
      </div>

      <a href="#about" className="hero__scroll mono" aria-label="Ir a la siguiente sección">
        scroll<span className="hero__scroll-bar" />
      </a>
    </section>
  );
}
