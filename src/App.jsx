import './App.css'
import Form from './component/Form'
import Logo from './component/Logo'
import Packinglist from './component/Packinglist'
import Stats from './component/Stats'

function App() {
  
 
const initialItems = [
  // { id: 1, description: "Passports", quantity: 2, packed: false },
  // { id: 2, description: "Socks", quantity: 12, packed: true },
  // { id: 2, description: "jug", quantity: 20, packed: true },
];

  return (
    <>
    <Logo/>
    <Form/>
    <Packinglist initialItems={initialItems}/>
    <Stats/>

   
    </>
  )
}

export default App
