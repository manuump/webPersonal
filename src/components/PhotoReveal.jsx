import { useEffect, useRef, useState } from "react";
import "./PhotoReveal.css";

const PIXEL_SIZE = 26;

export default function PhotoReveal({ src, alt }) {
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ratio = img.naturalHeight / img.naturalWidth;
      canvas.width = PIXEL_SIZE;
      canvas.height = Math.round(PIXEL_SIZE * ratio);
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      setReady(true);
    };
    return () => {
      cancelled = true;
    };
  }, [src]);

  const percent = revealed ? 100 : 0;

  return (
    <div className={`photo-reveal ${revealed ? "photo-reveal--revealed" : ""}`}>
      <span className="photo-reveal__tag mono">
        <span className="photo-reveal__tag-dot" />
        {revealed ? "SUBJECT: VERIFIED" : "SUBJECT: ENCRYPTED"}
      </span>

      <div className="photo-reveal__frame">
        <img className="photo-reveal__real" src={src} alt={alt} />
        <canvas
          ref={canvasRef}
          className="photo-reveal__pixel"
          style={{ clipPath: `inset(${percent}% 0 0 0)` }}
          aria-hidden="true"
        />
        <span className="photo-reveal__scanline" style={{ top: `${percent}%` }} aria-hidden="true" />
        <span className="photo-reveal__corner photo-reveal__corner--tl" aria-hidden="true" />
        <span className="photo-reveal__corner photo-reveal__corner--tr" aria-hidden="true" />
        <span className="photo-reveal__corner photo-reveal__corner--bl" aria-hidden="true" />
        <span className="photo-reveal__corner photo-reveal__corner--br" aria-hidden="true" />
      </div>

      <button
        type="button"
        className="photo-reveal__btn mono"
        onClick={() => setRevealed((v) => !v)}
        disabled={!ready}
      >
        {revealed ? "RE-ENCRYPT" : "DECRYPT"}
      </button>
    </div>
  );
}
