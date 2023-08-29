import styles from './page.module.css'
import Card from '../Components/Card'
import Banner from '../Components/Banner'


export default function Home() {
  return (
    <main>
      <title>Vaccine Book App</title>
      <Banner/>
      <div className='m-[30px] flex flex-row content-around justify-around flex-wrap'>
        <Card hospitalName='Chulalongkorn Hospital' imgSrc='/image/chula.jpg'/>
        <Card hospitalName='Rajavithi Hospital' imgSrc='/image/rajavithi.jpg'/>
        <Card hospitalName='Thammasat University Hospital' imgSrc='/image/thammasat.jpg'/>
      </div>
    </main>
  )
}
