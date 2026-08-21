import { profile } from "../data/content";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__inner">
        <Reveal>
          <div className="section-kicker mono">07 · Contacto</div>
          <h2 className="section-title contact__title">¿Hablamos?</h2>
          <p className="section-lead contact__lead">
            Estoy abierto a nuevas oportunidades profesionales en IT, sistemas, soporte y ciberseguridad.
          </p>
        </Reveal>

        <Reveal delay={90} className="contact__grid">
          <a className="contact__item" href={`mailto:${profile.email}`}>
            <span className="contact__label mono">EMAIL</span>
            <span className="contact__value contact__value--sm">{profile.email}</span>
          </a>
          <a className="contact__item" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            <span className="contact__label mono">TELÉFONO</span>
            <span className="contact__value">{profile.phone}</span>
          </a>
          <a className="contact__item" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact__label mono">LINKEDIN</span>
            <span className="contact__value">Ver perfil ↗</span>
          </a>
          <a className="contact__item" href={profile.github} target="_blank" rel="noreferrer">
            <span className="contact__label mono">GITHUB</span>
            <span className="contact__value">Ver perfil ↗</span>
          </a>
        </Reveal>

        <Reveal delay={160}>
          <a href={profile.cvPath} download className="btn btn--primary contact__cta">
            Descargar CV
          </a>
        </Reveal>
      </div>
    </section>
  );
}
