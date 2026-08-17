export default function WaveDivider({ flip = false }) {
  return (
    <div className={flip ? "rotate-180" : ""}>
      <svg viewBox="0 0 1200 60" className="w-full h-10 md:h-14" preserveAspectRatio="none">
        <path
          d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z"
          fill="var(--sand)"
        />
      </svg>
    </div>
  );
}