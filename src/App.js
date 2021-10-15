import './assets/style/App.css';
import Header from './assets/components/Header';
import Navigation from './assets/components/Navigation';
import Hero from './assets/components/Hero';
import Menu from './assets/components/Menu';
import Location from './assets/components/Location';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div id="App" className="container-fluid p-0">
      <Header />
      <Navigation />
      <Hero />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
