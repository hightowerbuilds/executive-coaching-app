
export default function NavBar() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '5vh',
        width: '100%',
        borderBottom: '3px lightgrey solid',
        backgroundColor: '#244456',
        fontFamily: 'monospace',
        fontSize: 22,
        color: 'skyblue',
        paddingTop: 15,
        opacity: .9
    }}>
        <span>Home</span>
        <span>Letter to Leaders</span>
        <span>Contact</span>
        <span>Education</span>
        <span>Media</span>
        <span>Resources</span>
        <span>Search</span>
    </div>
  )
}
