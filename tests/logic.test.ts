import {
  calculateBookingEstimate,
  getFinderResult,
  getMotRecommendation,
  getServiceRecommendation,
  normalizeServicePrefill,
  shouldShowAddons
} from '@/lib/logic';

describe('booking and recommendation logic', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-03-05T10:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('flags MOT as due soon when last test was more than ten months ago', () => {
    const recommendation = getMotRecommendation('2025-04', false, new Date('2026-03-05T10:00:00Z'));

    expect(recommendation.status).toBe('due-soon');
    expect(recommendation.description).toMatch(/likely due soon/i);
  });

  test('returns current MOT status for recent date', () => {
    const recommendation = getMotRecommendation('2026-01', false, new Date('2026-03-05T10:00:00Z'));

    expect(recommendation.status).toBe('current');
    expect(recommendation.description).toMatch(/looks current/i);
  });

  test('returns different service guidance by mileage band', () => {
    expect(getServiceRecommendation('under-30k').price).toBe('from £99');
    expect(getServiceRecommendation('over-100k').description).toMatch(/suspension, exhaust, and high wear items/i);
  });

  test('builds finder result with higher-mileage additional checks', () => {
    const result = getFinderResult('60k-100k', '2025-08', false, new Date('2026-03-05T10:00:00Z'));

    expect(result.service.price).toBe('from £289');
    expect(result.additionalChecks).toHaveLength(3);
  });

  test('reveals add-ons only when repair or other is selected', () => {
    expect(shouldShowAddons(['mot'])).toBe(false);
    expect(shouldShowAddons(['mot', 'repair-other'])).toBe(true);
  });

  test('calculates booking estimate including vehicle dependent repairs', () => {
    const estimate = calculateBookingEstimate(['mot', 'repair-other'], ['air-con-regas']);

    expect(estimate.minimumTotal).toBe(94);
    expect(estimate.label).toMatch(/vehicle-dependent repairs/i);
  });

  test('normalizes prefilled services to known ids only', () => {
    expect(normalizeServicePrefill('mot,full-service,unknown')).toEqual(['mot', 'full-service']);
  });
});
