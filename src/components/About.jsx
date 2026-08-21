import { about } from "../data/content";
import Reveal from "./Reveal";
import PhotoReveal from "./PhotoReveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner about__grid">
        <div className="about__col">
          <Reveal>
            <div className="section-kicker mono">01 · Sobre mí</div>
            <h2 className="section-title">Perfil profesional</h2>
          </Reveal>
          <Reveal delay={80} className="about__text">
            <p>{about}</p>
          </Reveal>
        </div>

        <Reveal delay={120} className="about__photo">
          <PhotoReveal src="/1751153462863.jpg" alt="Manuel Martínez Pegalajar" />
        </Reveal>
      </div>
    </section>
  );
}
