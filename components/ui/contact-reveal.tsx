'use client';

import { Clock3, Mail, MapPin, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { businessInfo, contactDetailsHref, contactQuickActions } from '@/lib/data';

type ContactRevealProps = {
  variant: 'popover' | 'sheet';
  triggerLabel: string;
  className?: string;
};

export function ContactReveal({ variant, triggerLabel, className = '' }: ContactRevealProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (variant !== 'popover') {
        return;
      }

      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    if (variant === 'popover') {
      document.addEventListener('mousedown', handlePointerDown);
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);

      if (variant === 'sheet') {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [open, variant]);

  return (
    <div ref={rootRef} className={variant === 'popover' ? 'relative' : undefined}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={className}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {triggerLabel}
      </button>

      {open && variant === 'popover' ? (
        <div
          id={dialogId}
          role="dialog"
          aria-label="Contact details"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(24rem,calc(100vw-2.5rem))]"
        >
          <ContactPanel variant="popover" onClose={() => setOpen(false)} />
        </div>
      ) : null}

      {open && variant === 'sheet' ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Dismiss contact details"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/45"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-[calc(env(safe-area-inset-bottom)+6.75rem)]">
            <div
              id={dialogId}
              role="dialog"
              aria-modal="true"
              aria-label="Contact details"
              className="pointer-events-auto mx-auto max-w-content"
            >
              <ContactPanel variant="sheet" onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

type ContactPanelProps = {
  variant: 'popover' | 'sheet';
  onClose: () => void;
};

function ContactPanel({ variant, onClose }: ContactPanelProps) {
  const sheet = variant === 'sheet';
  const actionClassName = sheet
    ? 'touch-target inline-flex items-center justify-center rounded-2xl border border-line bg-white px-4 py-3 text-center font-semibold text-ink'
    : 'touch-target inline-flex items-center justify-center rounded-2xl border border-line bg-secondaryBg px-4 py-3 text-center font-semibold text-ink';

  return (
    <div className="rounded-[28px] border border-line bg-white p-5 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Contact</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Reach Midlands AutoCare</h2>
          <p className="mt-3 text-sm text-muted">Phone, email, directions and workshop hours, all in one place.</p>
        </div>
        {sheet ? (
          <button
            type="button"
            aria-label="Close contact details"
            onClick={onClose}
            className="touch-target inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {sheet ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {contactQuickActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noreferrer' : undefined}
              onClick={onClose}
              className={actionClassName}
            >
              {action.title}
            </a>
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={contactDetailsHref} onClick={onClose} className="touch-target inline-flex items-center rounded-2xl bg-accent px-4 py-3 font-semibold text-white shadow-lift">
            Contact page
          </Link>
          {contactQuickActions
            .filter((action) => action.kind !== 'phone')
            .map((action) => (
              <a
                key={action.id}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
                onClick={onClose}
                className={actionClassName}
              >
                {action.title}
              </a>
            ))}
        </div>
      )}

      <div className="mt-5 grid gap-4">
        <div className="rounded-[24px] border border-line bg-secondaryBg p-4">
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Phone</p>
              <p className="mt-2 text-base font-semibold text-ink">{businessInfo.phone}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-line bg-secondaryBg p-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
              <a href={`mailto:${businessInfo.email}`} onClick={onClose} className="mt-2 inline-block text-base font-semibold text-ink">
                {businessInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-line bg-secondaryBg p-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Address</p>
              <p className="mt-2 text-base font-semibold text-ink">{businessInfo.address}</p>
              <a
                href={businessInfo.mapsHref}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
                className="mt-4 inline-flex items-center rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[24px] border border-line bg-secondaryBg p-4">
          <div className="flex items-start gap-3">
            <Clock3 className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Opening hours</p>
              <div className="mt-3 space-y-2 text-sm text-muted">
                {businessInfo.hours.map((entry) => (
                  <p key={entry.label}>
                    <span className="font-semibold text-ink">{entry.label}:</span> {entry.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
