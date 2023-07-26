import Banner from '../components/Banner/Banner'
import MyDate from '../components/MyDate/MyDate'
import Skills from '../components/Skills/Skills'
import Curriculum from '../components/Curriculum/Curriculum'
import Proyectos from '../components/Proyectos/Proyectos'
import Inbox from '../components/inbox/inbox'
import CustomNavbar from '../components/CustomNavbar/CustomNavbar'
import './Root.css'

const Root = () => {
  return (
    <div className='root'>
      <CustomNavbar/>
      <Banner/>
      <MyDate/>
      <Skills/>
      <Curriculum/>
      <Proyectos/>
      <Inbox/>
    </div>
  )
}

export default Root
