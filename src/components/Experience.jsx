import { experience } from "../data/content";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <Reveal>
          <div className="section-kicker mono">02 · Trayectoria</div>
          <h2 className="section-title">Experiencia</h2>
          <p className="section-lead">
            Registro cronológico de mi actividad profesional en IT, ciberseguridad y desarrollo.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal as="article" key={job.company} delay={i * 90} className="timeline__item">
              <div className="timeline__marker">
                <span className={`timeline__dot ${job.current ? "timeline__dot--current" : ""}`} />
                {i !== experience.length - 1 && <span className="timeline__line" />}
              </div>

              <div className="timeline__card">
                <div className="timeline__meta mono">
                  <span className="timeline__period">{job.period}</span>
                  {job.current && <span className="timeline__badge">EN CURSO</span>}
                </div>
                <h3 className="timeline__company">{job.company}</h3>
                <p className="timeline__role">{job.role}</p>
                <ul className="timeline__items">
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
