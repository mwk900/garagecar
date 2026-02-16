import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from '../hooks/useSiteContext';
import { setMetaTag } from '../utils/meta';

interface Props {
  metaKey: 'home' | 'about' | 'services' | 'blog' | 'contact';
  children: React.ReactNode;
}

export function Page({ metaKey, children }: Props) {
  const t = useTranslation();

  useEffect(() => {
    const seo = t.seo[metaKey];
    document.title = seo.title;
    setMetaTag('description', seo.description);
    setMetaTag('og:title', seo.title, true);
    setMetaTag('og:description', seo.description, true);
  }, [metaKey, t]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
