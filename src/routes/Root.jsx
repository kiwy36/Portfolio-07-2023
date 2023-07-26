import Banner from '../components/Banner/Banner'
import MyDate from '../components/MyDate/MyDate'
import Curriculum from '../components/Curriculum/Curriculum'
import Proyectos from '../components/Proyectos/Proyectos'
import Inbox from '../components/Inbox/Inbox'
import CustomNavbar from '../components/CustomNavbar/CustomNavbar'
import './Root.css'

const Root = () => {
  return (
    <div className='root'>
      <CustomNavbar/>
      <Banner/>
      <MyDate/>
      <Curriculum/>
      <Proyectos/>
      <Inbox/>
    </div>
  )
}

export default Root
