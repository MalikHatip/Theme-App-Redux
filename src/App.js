import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useSelector } from 'react-redux'


function App() {
  const {dark}=useSelector(state=>state.site)
  return (
    <div className="App">
      <div className={dark?"dark":"light"}>
      <h1 className='h1'>Theme App</h1>
      <Header/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
