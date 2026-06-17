import { useEffect, useState } from 'react';
import i18nNext, { i18Event } from '../i18n/i18';

export function useI18nLoader() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onLoaded = () => setLoading(false);
    const onFailed = (msg:string) => {
      setError(msg || 'Failed to load translations');
      setLoading(false);
    };

    i18Event.addListener('loaded', onLoaded)
    i18Event.addListener('loadFailed', onFailed);

    // Check if i18n is already initialized
    if (i18nNext.isInitialized) setLoading(false);

    return () => {
      i18Event.removeAllListeners('loaded')
      i18Event.removeAllListeners('loadFailed')
    };
  }, []);

  return { loading, error };
}
