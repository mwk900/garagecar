'use client';

import Image from 'next/image';
import { useState } from 'react';
import { workshopPhotos } from '@/lib/data';

export function WorkshopStrip() {
  const [paused, setPaused] = useState(false);
  const loopedPhotos = [...workshopPhotos, ...workshopPhotos];

  return (
    <section className="section-shell pt-0">
      <div className="section-inner">
        <div
          role="button"
          tabIndex={0}
          aria-pressed={paused}
          aria-label={paused ? 'Resume workshop photo strip' : 'Pause workshop photo strip'}
          className="overflow-hidden rounded-[32px] border border-line bg-white py-4"
          onClick={() => setPaused((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setPaused((current) => !current);
            }
          }}
        >
          <div className="photo-track flex w-max gap-4 px-4" data-paused={paused}>
            {loopedPhotos.map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                className="relative min-w-[270px] overflow-hidden rounded-[24px] md:min-w-[360px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 360px, 270px"
                  className="h-[220px] w-full object-cover md:h-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
