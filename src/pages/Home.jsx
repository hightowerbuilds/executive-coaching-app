import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import OpeningSection from "../components/OpeningSection";

export default function Home() {
  return (
    <div style={{
        height: '100vh',
        width: '100%',
        margin: 0,
        backgroundColor: '#242424',
          
    }}>

    <NavBar />
    <OpeningSection />
    <ProfileCard />
    <Footer />
    </div>
  )
}
