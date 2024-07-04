

interface Prop_1 {
  stringProp: string;
  booleanProp: boolean;
  numberProp: number;
  functionProp: (message: string) => void;
}

const Home: React.FC<Prop_1> = (props) => {
  return (
    <div>
      <p>String Prop: {props.stringProp}</p>
      <p>Boolean Prop: {props.booleanProp ? "True" : "False"}</p>
      <p>Number Prop: {props.numberProp}</p>
      <button onClick={() => props.functionProp("Button clicked!")}>Click me</button>
    </div>
  );
}

export default Home