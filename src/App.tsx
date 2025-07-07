
import Addtodo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"
const App = () => {
  return (
    <main>

      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <Addtodo/>
      <Todos />

      
    </main>
  )
}

export default App
