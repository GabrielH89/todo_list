import TodoList from "./components/todoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
