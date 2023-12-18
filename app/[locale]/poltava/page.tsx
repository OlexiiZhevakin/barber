
import About from './section/about/About'
import Contacts from './section/contacts/Contacts'
import Gallery from './section/gallery/Gallery'
import Head from './section/head/Head'
import Masters from './section/masters/Masters'
import { masterData } from './section/masters/data'
import Services from './section/services/Services'
import { useTranslations } from 'next-intl';

const HomePage = () => {
  const t = useTranslations('Masters');

  const masters = masterData.map(master => ({
    ...master,
    name: t(master.id),
  }));

  return (
    <>
      <Head />
      <About />
      <Masters btn={t('btn')} title={t('title')} masters={masters} />
      <Services/>
      <Gallery/>
      <Contacts/>
    </>
  )
}

export default HomePage