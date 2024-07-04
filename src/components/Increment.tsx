import { Button } from "antd"

function Increment(props) {
  return (
    <Button onClick={props.increment}>+</Button>
  )
}

export default Increment