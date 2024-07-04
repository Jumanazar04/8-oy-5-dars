import './App.css';
import Home from './components/Home';


function App() {
  const stringProp: string = "Hello, world!";
  const booleanProp: boolean = true;
  const numberProp: number = 42;
  const functionProp = (message: string) => {
    alert(message);
  };

  return (
    <Home
      stringProp={stringProp}
      booleanProp={booleanProp}
      numberProp={numberProp}
      functionProp={functionProp}
    />
  );
}



export default App
