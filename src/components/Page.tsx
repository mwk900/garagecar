import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { setMetaTag } from '../utils/meta';

const defaultSeo = {
  title: 'Trusted Local Garage in Nottingham | Midlands AutoCare',
  description:
    'Midlands AutoCare is a Nottingham local garage for MOT, servicing, repairs, tyres, brakes and diagnostics. Call now or book a same-day appointment.'
};

interface Props {
  metaKey: 'home' | 'about' | 'services' | 'blog' | 'contact';
  children: React.ReactNode;
}

export function Page({ children }: Props) {
  useEffect(() => {
    document.title = defaultSeo.title;
    setMetaTag('description', defaultSeo.description);
    setMetaTag('og:title', defaultSeo.title, true);
    setMetaTag('og:description', defaultSeo.description, true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
