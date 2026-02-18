import { business } from '../config/business';

export function StickyCtaBar() {
  return (
    <div className="mobileStickyCta" role="region" aria-label="Quick actions">
      <a className="btn btnPrimary" href={`tel:${business.phone.replace(/\s/g, '')}`}>
        Call
      </a>
      <a className="btn btnGhost" href="#booking">
        Book
      </a>
    </div>
  );
}
