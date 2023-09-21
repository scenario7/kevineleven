import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AppCard from './components/AppCard';
import AppCarousel from './components/AppCarousel';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="bg-black font-primary flex-col space-y-10 overscroll-none">
      <Header></Header>
      <div className='divide-y divide-gray-900'>
        <HeroSection></HeroSection>
        <SkillsSection></SkillsSection>
        <AppCarousel></AppCarousel>
      </div>
    </div>
  );
}

export default App;
