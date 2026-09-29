type FooterWaveProps = {
  className?: string;
};

export function FooterWave({ className }: FooterWaveProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 1440 420" preserveAspectRatio="none" className={className}>
      <path
        d="M0,150 C260,90 480,190 720,140 C960,95 1200,180 1440,120 L1440,420 L0,420 Z"
        fill="#2a5bb0"
        opacity="0.85"
      />
      <path
        d="M0,220 C240,150 460,260 720,205 C1000,150 1240,250 1440,190 L1440,420 L0,420 Z"
        fill="#0a2559"
      />
      <path
        d="M0,210 C240,140 460,250 720,195 C1000,140 1240,240 1440,180 L1440,190 C1240,250 1000,150 720,205 C460,260 240,150 0,220 Z"
        fill="#ffffff"
      />
      <path
        d="M0,196 C240,126 460,236 720,181 C1000,126 1240,226 1440,166 L1440,180 C1240,240 1000,140 720,195 C460,250 240,140 0,210 Z"
        fill="#c8102e"
      />
    </svg>
  );
}
