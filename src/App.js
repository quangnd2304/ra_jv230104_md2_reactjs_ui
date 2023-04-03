import logo from './logo.svg';
import './App.css';
import Slider from './components/bootstrap/Slider';
import Products from './components/bootstrap/Products';
import WebMenu from './components/ant/WebMenu';
import ComboBoxMui from './components/mui/ComboboxMui';

function App() {
  return (
    <div className="App">
      {/* <Slider />
      <div className='listProduct'>
        <Products />
        <Products />
        <Products />
      </div> */}
      {/* <WebMenu /> */}
      <ComboBoxMui />
    </div>
  );
}

export default App;
