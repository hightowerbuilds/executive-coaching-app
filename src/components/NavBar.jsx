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
        justifyContent: 'space-around',
        height: '3.5vh',
        width: '100%',
        borderBottom: '1px lightgrey solid',
        backgroundColor: '#244456',
        fontFamily: 'Ojuju',
        fontSize: 22,
        color: 'skyblue',
        paddingTop: 6,
     
    }}>
        <Link style={{ color : 'skyblue', backgroundColor: '#244456'}} to="/">Home</Link>
        <Link style={{ color : 'skyblue', backgroundColor: '#244456'}} to="leadership">Leadership</Link>
        <Link style={{ color : 'skyblue', backgroundColor: '#244456'}} to="contact">Contact</Link>
        <Link style={{ color : 'skyblue', backgroundColor: '#244456'}} to="education">Education</Link>
        <span style={{ color : 'skyblue', backgroundColor: '#244456'}}>Media</span>
        <span style={{ color : 'skyblue', backgroundColor: '#244456'}}>Resources</span>
        <span style={{ color : 'skyblue', backgroundColor: '#244456'}}>Search</span>
    </div>
  )
}
