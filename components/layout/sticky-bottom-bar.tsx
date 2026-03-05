import Link from 'next/link';
import { ContactReveal } from '@/components/ui/contact-reveal';

export function StickyBottomBar() {
  return (
    <div
      role="region"
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/90 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <div className="mx-auto grid max-w-content grid-cols-2 gap-3 px-5 pt-3">
        <Link
          href="/booking"
          className="touch-target inline-flex items-center justify-center rounded-2xl bg-accent px-4 py-3 text-center font-semibold text-white shadow-lift"
        >
          Book MOT/Service
        </Link>
        <ContactReveal
          variant="sheet"
          triggerLabel="Contact"
          className="touch-target inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-center font-semibold text-ink"
        />
      </div>
    </div>
  );
}
