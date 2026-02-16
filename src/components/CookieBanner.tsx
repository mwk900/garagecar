import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useTranslation } from '../hooks/useSiteContext';

export function CookieBanner() {
  const [consent, setConsent] = useLocalStorageState<'accepted' | 'rejected' | null>('cookie-consent', null);
  const t = useTranslation();

  if (consent) return null;

  return (
    <aside className="cookieBanner" role="dialog" aria-live="polite">
      <p>{t.common.cookieText}</p>
      <div>
        <button className="btn btnSecondary" onClick={() => setConsent('rejected')}>
          {t.common.cookieReject}
        </button>
        <button className="btn btnPrimary" onClick={() => setConsent('accepted')}>
          {t.common.cookieAccept}
        </button>
      </div>
    </aside>
  );
}
