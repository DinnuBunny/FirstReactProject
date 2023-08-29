// import {Route} from 'react-router-dom'
import Header from './component/Header'
import ApiCalls from './ApiCalls';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <h1>Hello World!
      <br />
      Hello My Friend How are you?
      </h1>
      <ApiCalls />
    </div>
    </>
  );
}

export default App;
