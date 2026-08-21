import { education, goal } from "../data/content";
import Reveal from "./Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner education__grid">
        <Reveal className="education__col">
          <div className="section-kicker mono">06 · Formación</div>
          <h2 className="section-title">{education.degree}</h2>
          <p className="education__meta mono">
            {education.school} · {education.period}
          </p>
          <p className="education__desc">{education.description}</p>
        </Reveal>

        <Reveal delay={100} className="goal-card">
          <span className="goal-card__tag mono">OBJETIVO_PROFESIONAL</span>
          <p className="goal-card__text">{goal}</p>
        </Reveal>
      </div>
    </section>
  );
}
