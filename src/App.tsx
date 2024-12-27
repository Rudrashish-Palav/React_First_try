import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
  <div>
    <ListGroup items={items} heading="Cities"/>
    <><MyButton></MyButton></>
  </div>
  
  )
}

export default App ;