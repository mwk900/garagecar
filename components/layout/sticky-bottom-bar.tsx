import Link from 'next/link';
import { ContactReveal } from '@/components/ui/contact-reveal';

export function StickyBottomBar() {
  return (
    <div
      role="region"
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 bg-[#0f172a] md:hidden"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <div className="mx-auto flex max-w-content gap-3 px-5 pt-3">
        <Link
          href="/booking"
          className="touch-target inline-flex flex-1 items-center justify-center rounded-2xl bg-accent py-3 text-center font-semibold text-white"
        >
          Book MOT/Service
        </Link>
        <div className="flex-1">
          <ContactReveal
            variant="sheet"
            triggerLabel="Contact"
            className="touch-target inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 py-3 text-center font-semibold text-white"
          />
        </div>
      </div>
    </div>
  );
}
