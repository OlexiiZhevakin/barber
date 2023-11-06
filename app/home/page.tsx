
import About from './section/about/About'
import Head from './section/head/Head'
import Masters from './section/masters/Masters'
import Rules from './section/rules/Rules'
import Services from './section/services/Services'

const HomePage = () => {
  return (
    <>
      <Head />
      <About />
      <Masters/>
      <Services/>
      <Rules/>
    </>
  )
}

export default HomePage