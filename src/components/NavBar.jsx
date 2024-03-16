import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * need to bring ccs file into solve some issues and add effects/animation 
 * 
 */


export default function NavBar() {


useEffect(() => {
  WebFont.load({
    google: {
      families: ['Ojuju', 'Open Sans', 'Roboto'] 
    }
  });
}, []);



  return (
    <div style={{
        display: 'flex',
        paddingLeft: 30,
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'flex-start',
        height: '3.5vh',
        width: '100%',
        borderBottom: '1px lightgrey solid',
        backgroundColor: '#244456',
        fontFamily: 'Ojuju',
        fontSize: 22,
        color: 'skyblue',
        
     
    }}>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="/">Home</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="leadership">Leadership Experience</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="education">Education</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="contact">Contact</Link>

        <p style={{ backgroundColor: '#244456', position: 'absolute', left: '51%', fontSize: 30, top: '0%'}}>Dr. Len Hightower Executive Coaching</p>
    </div>
  )
}
