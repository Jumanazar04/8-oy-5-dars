import { Button } from "antd";
import React from "react";

interface CountProps {
    decrement: () => number;
}

const Decrement: React.FC<CountProps> = (props) => {
  return (
    <Button onClick={props.decrement}>
        -
    </Button>
  );
}

export default Decrement;
