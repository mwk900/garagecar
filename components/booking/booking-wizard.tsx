'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { bookingAddons, bookingServiceOptions, bookingTimePreferences } from '@/lib/data';
import { calculateBookingEstimate, formatBookingDate, normalizeServicePrefill, shouldShowAddons } from '@/lib/logic';
import type { BookingDraft } from '@/lib/types';
import { DemoNote } from '@/components/ui/demo-note';

const emptyDraft: BookingDraft = {
  services: [],
  addons: [],
  reg: '',
  make: '',
  model: '',
  name: '',
  phone: '',
  email: '',
  dropOffDate: '',
  timePreference: '',
  notes: ''
};

function toggleSelection(items: string[], item: string) {
  return items.includes(item) ? items.filter((entry) => entry !== item) : [...items, item];
}

export function BookingWizard() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [draft, setDraft] = useState<BookingDraft>(emptyDraft);

  useEffect(() => {
    const nextServices = normalizeServicePrefill(searchParams?.get('services') ?? undefined);

    if (!nextServices.length) {
      return;
    }

    setDraft((current) => ({
      ...current,
      services: nextServices,
      addons: nextServices.includes('repair-other') ? current.addons : []
    }));
  }, [searchParams]);

  const showAddons = shouldShowAddons(draft.services);
  const estimate = useMemo(() => calculateBookingEstimate(draft.services, draft.addons), [draft.addons, draft.services]);

  const selectedServices = [...bookingServiceOptions, ...bookingAddons].filter(
    (item) => draft.services.includes(item.id) || draft.addons.includes(item.id)
  );

  const progress = `${step} of 3`;

  const validateDetails = () => {
    if (!draft.services.length) {
      setMessage('Choose at least one service to continue.');
      setStep(1);
      return false;
    }

    if (!draft.make || !draft.name || !draft.phone || !draft.email || !draft.dropOffDate || !draft.timePreference) {
      setMessage('Please complete the make, name, phone, email, date and drop off fields.');
      return false;
    }

    setMessage('');
    return true;
  };

  return (
    <div className="card-surface rounded-[32px] p-5 md:p-6">
      {submitted ? (
        <div className="space-y-5">
          <div className="rounded-[28px] bg-successSoft p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-success">Request sent</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Booking request received</h3>
            <p className="mt-3 text-base text-muted">
              We will confirm your slot by phone or text within 2 hours.
            </p>
          </div>

          <div className="grid gap-3 rounded-[28px] border border-line bg-secondaryBg p-5 text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">Services:</span>{' '}
              {selectedServices.map((service) => service.label).join(', ')}
            </p>
            <p>
              <span className="font-semibold text-ink">Estimated cost:</span> {estimate.label}
            </p>
            <p>
              <span className="font-semibold text-ink">Preferred drop off:</span>{' '}
              {formatBookingDate(draft.dropOffDate)}, {draft.timePreference}
            </p>
          </div>

          <DemoNote>Demo form only. No live workshop slot has been created.</DemoNote>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Step {progress}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Book online in 60 seconds</h3>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondaryBg md:max-w-[16rem]">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {message ? <p className="mt-4 text-sm font-medium text-warning">{message}</p> : null}

          {step === 1 ? (
            <div className="mt-5">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {bookingServiceOptions.map((service) => {
                    const selected = draft.services.includes(service.id);

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setDraft((current) => {
                            const services = toggleSelection(current.services, service.id);

                            return {
                              ...current,
                              services,
                              addons: services.includes('repair-other') ? current.addons : []
                            };
                          });
                        }}
                        className={`touch-target rounded-[24px] border px-4 py-4 text-left transition ${
                          selected
                            ? 'border-accent bg-accent text-white shadow-lift'
                            : 'border-line bg-white text-ink hover:border-accent/30 hover:bg-accentSoft'
                        }`}
                      >
                        <span className="block font-semibold">{service.label}</span>
                        <span className={`mt-2 block text-sm ${selected ? 'text-white/80' : 'text-muted'}`}>
                          {service.priceLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {showAddons ? (
                  <div className="mt-5 rounded-[28px] border border-line bg-secondaryBg p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                      Common add-ons for repair or other
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {bookingAddons.map((addon) => {
                        const selected = draft.addons.includes(addon.id);

                        return (
                          <button
                            key={addon.id}
                            type="button"
                            onClick={() =>
                              setDraft((current) => ({
                                ...current,
                                addons: toggleSelection(current.addons, addon.id)
                              }))
                            }
                            className={`touch-target rounded-full border px-4 py-3 text-sm font-semibold transition ${
                              selected
                                ? 'border-accent bg-accent text-white'
                                : 'border-line bg-white text-ink hover:border-accent/30 hover:bg-accentSoft'
                            }`}
                          >
                            {addon.label} · {addon.priceLabel}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : null}

                <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-muted">Multi-select is enabled, so you can request MOT plus service or add-on work together.</p>
                  <button
                    type="button"
                    onClick={() => {
                      if (!draft.services.length) {
                        setMessage('Choose at least one service to continue.');
                        return;
                      }

                      setMessage('');
                      setStep(2);
                    }}
                    className="touch-target inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift"
                  >
                    Continue to details
                  </button>
                </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mt-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-ink">
                    Vehicle reg <span className="font-normal text-muted">(optional)</span>
                    <input
                      value={draft.reg}
                      onChange={(event) => setDraft((current) => ({ ...current, reg: event.target.value.toUpperCase() }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Make
                    <input
                      value={draft.make}
                      onChange={(event) => setDraft((current) => ({ ...current, make: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Model
                    <input
                      placeholder="Any / not sure"
                      value={draft.model}
                      onChange={(event) => setDraft((current) => ({ ...current, model: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Name
                    <input
                      value={draft.name}
                      onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Phone
                    <input
                      type="tel"
                      value={draft.phone}
                      onChange={(event) => setDraft((current) => ({ ...current, phone: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Email
                    <input
                      type="email"
                      value={draft.email}
                      onChange={(event) => setDraft((current) => ({ ...current, email: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Preferred drop off date
                    <input
                      type="date"
                      value={draft.dropOffDate}
                      onChange={(event) => setDraft((current) => ({ ...current, dropOffDate: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    />
                  </label>
                  <label className="text-sm font-semibold text-ink">
                    Drop off time preference
                    <select
                      value={draft.timePreference}
                      onChange={(event) => setDraft((current) => ({ ...current, timePreference: event.target.value }))}
                      className="touch-target mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                    >
                      <option value="">Choose one</option>
                      {bookingTimePreferences.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-4 block text-sm font-semibold text-ink">
                  Notes <span className="font-normal text-muted">(optional)</span>
                  <textarea
                    rows={4}
                    value={draft.notes}
                    onChange={(event) => setDraft((current) => ({ ...current, notes: event.target.value }))}
                    className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-accent"
                  />
                </label>

                <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="touch-target inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 font-semibold text-ink"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (validateDetails()) {
                        setStep(3);
                      }
                    }}
                    className="touch-target inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift"
                  >
                    Review request
                  </button>
                </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="mt-5 space-y-5">
                <div className="rounded-[28px] border border-line bg-secondaryBg p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Summary</p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Selected services</p>
                      <ul className="mt-2 space-y-2 text-sm text-ink">
                        {selectedServices.map((service) => (
                          <li key={service.id}>{service.label}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Estimated cost</p>
                      <p className="mt-2 font-display text-2xl font-semibold text-ink">{estimate.label}</p>
                      <p className="mt-2 text-sm text-muted">{estimate.note}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 text-sm text-muted md:grid-cols-2">
                    <p>
                      <span className="font-semibold text-ink">Drop off:</span>{' '}
                      {formatBookingDate(draft.dropOffDate)}, {draft.timePreference}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">Contact:</span> {draft.name}, {draft.phone}
                    </p>
                  </div>
                </div>

                <DemoNote>Demo booking flow. We do not send this request to a live garage system.</DemoNote>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="touch-target inline-flex items-center justify-center rounded-2xl border border-line px-5 py-3 font-semibold text-ink"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (validateDetails()) {
                        setSubmitted(true);
                      }
                    }}
                    className="touch-target inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift"
                  >
                    Confirm booking request
                  </button>
                </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
