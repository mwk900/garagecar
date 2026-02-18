interface StickyCtaBarProps {
  phone: string;
}

export function StickyCtaBar({ phone }: StickyCtaBarProps) {
  return (
    <div className="stickyCta" role="region" aria-label="Quick contact actions">
      <a className="btn btnPrimary" href={`tel:${phone.replace(/\s/g, '')}`}>
        Call
      </a>
      <a className="btn btnSecondary" href="#booking">
        Book
      </a>
    </div>
  );
}
