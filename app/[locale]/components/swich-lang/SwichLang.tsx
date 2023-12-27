'use client'

// import { usePathname, useRouter } from 'next-intl/client';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import styles from './SwichLang.module.scss';
import { useLocale } from 'next-intl';


const SwichLang = () => {
  const locales = ['uk', 'en'] as const;
  const { Link, useRouter, usePathname } = createSharedPathnamesNavigation({ locales });
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className={styles.links}>
      <Link className={`${styles.link} ${locale === 'uk' ? styles.active : ''}`} href={pathname} locale="uk" onClick={() => handleLocaleChange('uk')}>
        ua
      </Link>
      <Link className={`${styles.link} ${locale === 'en' ? styles.active : ''}`} href={pathname} locale="en" onClick={() => handleLocaleChange('en')}>
        en
      </Link>
    </div>
  );
};

export default SwichLang;