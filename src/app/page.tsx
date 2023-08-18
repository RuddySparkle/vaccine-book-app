import styles from './page.module.css'
import Card from '../../Components/Card'
import Banner from '../../Components/Banner'


export default function Home() {
  return (
    <main>
      <title>Vaccine Book App</title>
      <Banner/>
      <center style={{margin: "30px"}}>
        <Card/>
      </center>
    </main>
  )
}
