import { useEffect, useRef, useState } from "react";
import "./TerminalPanel.css";

const SCRIPT = [
  { text: "whoami", type: "cmd" },
  { text: "manuel.martinez@it-security", type: "out" },
  { text: "systemctl status support-desk.service", type: "cmd" },
  { text: "● support-desk.service — active (running)", type: "out-ok" },
  { text: "curl -s api/status/manuel", type: "cmd" },
  { text: "{", type: "out" },
  { text: '  "status": "employed",', type: "out" },
  { text: '  "location": "Jaén, ES",', type: "out" },
  { text: '  "open_to_opportunities": true,', type: "out" },
  { text: '  "remote": true,', type: "out" },
  { text: '  "hybrid": true,', type: "out" },
  { text: '  "last_update": "2026-08"', type: "out" },
  { text: "}", type: "out" },
  { text: "SECURITY_STATUS: ACTIVE", type: "status" },
  { text: "ACCESS_GRANTED", type: "status-accent" },
];

export default function TerminalPanel() {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(SCRIPT);
      return undefined;
    }

    setLines([]);
    setCurrent("");
    let cancelled = false;
    let lineIndex = 0;

    const typeLine = (index) => {
      if (cancelled || index >= SCRIPT.length) return;
      const { text, type } = SCRIPT[index];
      let charIndex = 0;

      const step = () => {
        if (cancelled) return;
        charIndex += 1;
        setCurrent(text.slice(0, charIndex));
        if (charIndex < text.length) {
          setTimeout(step, type === "cmd" ? 32 : 14);
        } else {
          setLines((prev) => [...prev, { text, type }]);
          setCurrent("");
          setTimeout(() => typeLine(index + 1), type === "cmd" ? 240 : 420);
        }
      };
      step();
    };

    const start = setTimeout(() => typeLine(lineIndex), 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, current]);

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title mono">soc-session — zsh</span>
      </div>
      <div className="terminal__body mono" ref={containerRef}>
        {lines.map((line, i) => (
          <div key={i} className={`terminal__line terminal__line--${line.type}`}>
            {line.type === "cmd" && <span className="terminal__prompt">$&nbsp;</span>}
            {line.text}
          </div>
        ))}
        {current && (
          <div
            className={`terminal__line terminal__line--${
              SCRIPT[lines.length]?.type ?? "out"
            }`}
          >
            {SCRIPT[lines.length]?.type === "cmd" && <span className="terminal__prompt">$&nbsp;</span>}
            {current}
            <span className="terminal__cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
