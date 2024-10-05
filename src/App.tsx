import './App.css';
import './style.css';
import logo from './logo.svg';
import { InputUC } from './components/Input_u_с';
import { InputUF } from './components/Input_u_f';

function App() {
  const functionalApproach = "Функциональный подход";
  const oopApproach = "ООП подход";
  const logot = <img src={logo} className="App-logo" alt="logo" />
  const logor = <img src={logo} className="App-logor" alt="logor" />
  const defaultStr = "https://catfact.ninja/fact";

  return (
    <div className="App">
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */
      <><div className="oopApproach">
          <h1>{logot}{oopApproach}</h1>
          <InputUC textToShow={defaultStr}/>
        </div>
        <div className="functionalApproach">
          <h1>{logor}{functionalApproach}</h1>
          <InputUF />
        </div></>
      }
    </div>
  );
}

export default App;
