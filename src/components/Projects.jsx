import { projects } from "../data/content";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <Reveal>
          <div className="section-kicker mono">04 · Proyectos</div>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-lead">
            Una muestra de sistemas que he desarrollado, con foco en arquitectura, backend y aplicación real.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.name} delay={i * 90} className="project-card">
              <div className="project-card__top">
                <h3 className="project-card__name">{project.name}</h3>
                <span className="project-card__index mono">0{i + 1}</span>
              </div>
              <p className="project-card__desc">{project.description}</p>
              {project.stack.length > 0 && (
                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="mono">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="project-card__links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
                    Código ↗
                  </a>
                ) : (
                  <span className="project-card__link project-card__link--disabled">Código privado</span>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
                    Demo ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
