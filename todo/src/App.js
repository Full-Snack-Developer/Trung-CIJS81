import './App.css';
import Textfield from './component/Textfield';
import  Button  from './component/Button';
import Checkbox from './component/Checkbox';

function App() {
  return (
    <div className='Contain'>
      <div className='App'>
        <div className='Textfield'>
          <Textfield />
        </div>
        <div className='Button'>
          <Button/>
        </div>
        <div className='Checkbox'>
          <Checkbox/>
        </div>
        <div className='Text'>
          <p>5 tasks left</p>
        </div>
      </div>
    </div>
  );
}

export default App;
