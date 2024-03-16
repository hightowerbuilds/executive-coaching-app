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
    <div className="profileCard">
        <p className='name'> Dr. Len Hightower </p>
    </div>
  )
}
