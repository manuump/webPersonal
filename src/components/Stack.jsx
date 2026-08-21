import { stack } from "../data/content";
import Reveal from "./Reveal";
import "./Stack.css";

export default function Stack() {
  return (
    <section id="stack" className="section stack">
      <div className="section-inner">
        <Reveal>
          <div className="section-kicker mono">05 · Stack tecnológico</div>
          <h2 className="section-title">Tecnologías</h2>
        </Reveal>

        <div className="stack__grid">
          {stack.map((group, i) => (
            <Reveal as="div" key={group.group} delay={i * 60} className="stack__group">
              <h3 className="stack__group-title mono">{group.group}</h3>
              <div className="stack__tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
