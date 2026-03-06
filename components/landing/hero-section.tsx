'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { heroPriceCards, trustBadges, workshopPhotos } from '@/lib/data';

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % workshopPhotos.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-shell overflow-hidden pb-8 pt-8 lg:pt-12">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="fade-up">
            <p className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
              Nottingham MOT centre and independent garage
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.04] text-ink">
              Straight answers. Solid work.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Independent MOT centre and garage in Nottingham. Fair prices, no upselling, work you can trust.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {heroPriceCards.map((card) => (
                <article
                  key={card.id}
                  className="card-surface flex flex-col justify-between rounded-[30px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{card.title}</p>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <p className="font-display text-[clamp(1.25rem,3vw,2rem)] font-bold leading-none text-[var(--price)]">
                        {card.price}
                      </p>
                      {card.badge ? (
                        <span className="rounded-full bg-successSoft px-3 py-1 text-xs font-semibold text-success">
                          {card.badge}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <Link
                    href={card.href}
                    className={`touch-target mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-center font-semibold transition duration-300 hover:scale-[1.02] ${
                      card.id === 'mot'
                        ? 'bg-accent text-white hover:bg-accentHover'
                        : 'border border-[#1e293b] bg-transparent text-[#1e293b] hover:bg-[#1e293b] hover:text-white'
                    }`}
                  >
                    {card.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${
                    badge.tone === 'success'
                      ? 'border-success/20 bg-successSoft text-success'
                      : 'border-line bg-white text-muted'
                  }`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden fade-in lg:block">
            <div className="card-surface overflow-hidden rounded-[36px] p-3">
              <div className="relative h-[32rem] w-full overflow-hidden rounded-[28px]">
                {workshopPhotos.map((photo, index) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    priority={index === 0}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
