import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        justifyContent: 'flex-start',
        height: '3.5vh',
        width: '100%',
        borderBottom: '1px lightgrey solid',
        backgroundColor: '#244456',
        fontFamily: 'Ojuju',
        fontSize: 22,
        color: 'skyblue',
        padding: 3,
     
    }}>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="/">Home</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="leadership">Leadership</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="contact">Contact</Link>
        <Link style={{ marginRight: 5, color : 'skyblue', backgroundColor: '#244456'}} to="education">Education</Link>
   
    </div>
  )
}
