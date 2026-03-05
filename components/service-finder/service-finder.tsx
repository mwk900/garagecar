'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { mileageBands } from '@/lib/data';
import { buildBookingHref, getFinderResult } from '@/lib/logic';
import type { MileageBand } from '@/lib/types';
import { DemoNote } from '@/components/ui/demo-note';
import { SectionHeading } from '@/components/ui/section-heading';

export function ServiceFinder() {
  const [lastMotMonth, setLastMotMonth] = useState('');
  const [notSure, setNotSure] = useState(false);
  const [mileageBand, setMileageBand] = useState<MileageBand | null>(null);

  const result = useMemo(() => {
    if (!mileageBand) {
      return null;
    }

    return getFinderResult(mileageBand, lastMotMonth || null, notSure);
  }, [lastMotMonth, mileageBand, notSure]);

  return (
    <section className="section-shell" id="service-finder">
      <div className="section-inner">
        <div className="card-surface p-6 md:p-8">
          <SectionHeading
            eyebrow="Signature tool"
            title="Not sure what your car needs?"
            description="Answer two quick questions."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-line bg-secondaryBg p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Step 1</p>
                <label className="mt-4 block text-sm font-semibold text-ink" htmlFor="last-mot">
                  Last MOT
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <input
                    id="last-mot"
                    type="month"
                    value={lastMotMonth}
                    onChange={(event) => {
                      setLastMotMonth(event.target.value);
                      setNotSure(false);
                    }}
                    disabled={notSure}
                    className="touch-target rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none ring-0 transition focus:border-accent"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setNotSure((current) => !current);
                      setLastMotMonth('');
                    }}
                    className={`touch-target rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      notSure ? 'border-accent bg-accent text-white' : 'border-line bg-white text-ink'
                    }`}
                  >
                    Not sure / no MOT
                  </button>
                </div>
              </div>

              <div className="rounded-[28px] border border-line bg-secondaryBg p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Step 2</p>
                <p className="mt-4 text-sm font-semibold text-ink">Approximate mileage</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {mileageBands.map((band) => (
                    <button
                      key={band.id}
                      type="button"
                      onClick={() => setMileageBand(band.id)}
                      className={`touch-target rounded-2xl border px-4 py-3 text-left text-base font-semibold transition ${
                        mileageBand === band.id
                          ? 'border-accent bg-accent text-white shadow-lift'
                          : 'border-line bg-white text-ink hover:border-accent/30 hover:bg-accentSoft'
                      }`}
                    >
                      {band.label}
                    </button>
                  ))}
                </div>
              </div>

              <DemoNote>
                Demo tool only. Recommendations are a helpful guide and not a live workshop inspection.
              </DemoNote>
            </div>

            <div>
              {result ? (
                <div className="space-y-4">
                    <div className="card-surface rounded-[28px] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{result.mot.title}</p>
                      <p className="mt-3 text-lg font-semibold text-ink">{result.mot.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accentSoft px-3 py-2 text-sm font-semibold text-accent">
                          {result.mot.price}
                        </span>
                        <Link
                          href={buildBookingHref(result.mot.bookingIds)}
                          className="touch-target inline-flex items-center rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white"
                        >
                          {result.mot.ctaLabel}
                        </Link>
                      </div>
                    </div>

                    <div className="card-surface rounded-[28px] p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                        {result.service.title}
                      </p>
                      <p className="mt-3 text-base text-muted">{result.service.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accentSoft px-3 py-2 text-sm font-semibold text-accent">
                          {result.service.price}
                        </span>
                        <Link
                          href={buildBookingHref(result.service.bookingIds)}
                          className="touch-target inline-flex items-center rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink"
                        >
                          {result.service.ctaLabel}
                        </Link>
                      </div>
                    </div>

                    {result.additionalChecks.length ? (
                      <div className="card-surface rounded-[28px] p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                          Additional checks worth considering
                        </p>
                        <div className="mt-4 grid gap-3">
                          {result.additionalChecks.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-line bg-secondaryBg p-4">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <p className="font-semibold text-ink">{item.title}</p>
                                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                                </div>
                                <span className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-ink">
                                  {item.price}
                                </span>
                              </div>
                              <Link
                                href={buildBookingHref(item.bookingIds)}
                                className="touch-target mt-4 inline-flex items-center rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink"
                              >
                                {item.ctaLabel}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => {
                        setLastMotMonth('');
                        setNotSure(false);
                        setMileageBand(null);
                      }}
                      className="touch-target inline-flex items-center rounded-full px-1 py-2 text-sm font-semibold text-accent"
                    >
                      Start over
                    </button>
                </div>
              ) : (
                  <div className="card-surface flex min-h-[22rem] items-center justify-center rounded-[28px] border-dashed p-6 text-center">
                    <div>
                      <p className="font-display text-2xl font-semibold text-ink">Pick your mileage to see a recommendation</p>
                      <p className="mt-3 text-base text-muted">
                        We will tailor the MOT advice, service suggestion and higher-mileage checks based on your answers.
                      </p>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
