import Message from './Message'

function App(){

  const name = "Rudrashish"
  if (name){
    return <h1>Hello {name}</h1>;
  }
  return <div><Message/></div>;
}

export default App ;