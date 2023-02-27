import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import Form  from './component/Form';

function App() {
  return (
    <div className="App">
      <div className='Main'>
        <div className='Left'>
          <Sidebar/>
        </div>
        <div className='Right'>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
