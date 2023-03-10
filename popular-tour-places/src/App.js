import Header from './components/Header/Header';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import './App.scss'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
