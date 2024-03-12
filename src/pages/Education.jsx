import HomeNav from '../components/HomeNav'
import './Education.css'
import eagle from '../images/DSC_0112.jpeg'

export default function Education() {
  return (

    <div className="pageEd">
       <HomeNav />

    
    <h2 className='eduHeading'>Education</h2>
    
      <img className='eagleImage' src={eagle} alt="eagle" />
    </div>
  )
}
