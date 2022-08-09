import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './navigation/navigator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
