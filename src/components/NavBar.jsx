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
        opacity: .9
    }}>
        <Link style={{ color : 'skyblue'}} to="/">Home</Link>
        <Link  style={{ color : 'skyblue'}} to="leadership">Leadership</Link>
        <Link style={{ color : 'skyblue'}} to="contact">Contact</Link>
        <Link style={{ color : 'skyblue'}} to="education">Education</Link>
        <span>Media</span>
        <span>Resources</span>
        <span>Search</span>
    </div>
  )
}
