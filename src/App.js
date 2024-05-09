import './App.css';
import './input.css';
import Header from './components/Layouts/Header/Header';
import Footer from './components/Layouts/Footer/Footer';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
