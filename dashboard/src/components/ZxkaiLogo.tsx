interface ZxkaiLogoProps {
  className?: string;
}

export function ZxkaiLogo({ className = '' }: ZxkaiLogoProps) {
  return (
    <span className={`zxkai-logo ${className}`.trim()} role="img" aria-label="Zxkai">
      <span className="zxkai-logo-fallback" aria-hidden="true" />
      <img src="/zxkai-logo.png" alt="" onError={event => (event.currentTarget.hidden = true)} />
    </span>
  );
}