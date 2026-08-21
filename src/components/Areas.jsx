import { areas } from "../data/content";
import Reveal from "./Reveal";
import "./Areas.css";

export default function Areas() {
  return (
    <section id="areas" className="section areas">
      <div className="section-inner">
        <Reveal>
          <div className="section-kicker mono">03 · Áreas profesionales</div>
          <h2 className="section-title">Dónde aporto valor</h2>
          <p className="section-lead">
            Mi perfil principal evoluciona hacia IT y ciberseguridad. El desarrollo de software es una
            competencia adicional que complementa esa base técnica.
          </p>
        </Reveal>

        <div className="areas__grid">
          {areas.map((area, i) => (
            <Reveal as="article" key={area.id} delay={i * 90} className={`area-card area-card--${area.id}`}>
              <div className="area-card__head">
                <span className="area-card__status mono">{area.status}</span>
                <h3 className="area-card__title">{area.label}</h3>
              </div>
              <ul className="area-card__list">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
