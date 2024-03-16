import './ProfileCard.css'
import WebFont from 'webfontloader'
import { useEffect } from 'react';


export default function ProfileCard() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Ojuju', 'Open Sans', 'Roboto', ] 
          }
        });
      }, []);


  return (
    <p className="profileCard">
        <p className='name'> Dr. Len Hightower <br /> Execcutive Coaching </p>
     
    </p>
  )
}
