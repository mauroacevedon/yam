import HeroSection from './/components/HeroSection'
import NavBar from './Navbar'
import CardColumns from './/components/CardColumns'
import ContactCTA from './/components/ContactCTA'

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardColumns />
      <ContactCTA />
    </div>
  );
}
