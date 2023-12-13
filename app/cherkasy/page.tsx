
import About from './section/about/About'
import Contacts from './section/contacts/Contacts'
import Gallery from './section/gallery/Gallery'
import Head from './section/head/Head'
import Masters from './section/masters/Masters'
import Services from './section/services/Services'

const HomePage = () => {
  return (
    <>
      <Head />
      <About />
      <Masters/>
      <Services/>
      <Gallery/>
      <Contacts/>
    </>
  )
}

export default HomePage