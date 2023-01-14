import './App.css';
import About from './components/organisms/about';
import Cards from './components/organisms/cards';
import Footer from './components/organisms/footer';
import Header from './components/organisms/header-assignment';
import Plans from './components/organisms/plans';
import Top from './components/organisms/top';
import NewsAndEvents from './components/templates/NewsAndEvents';

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Cards />
      <NewsAndEvents />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
