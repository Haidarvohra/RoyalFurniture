import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import HomeSection from './components/HomeSection';
import About from './components/about/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/products/Product';
import Contact from './components/contacts/Contact';
import './App.css';
const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeSection} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </>
  );
};

export default App;





