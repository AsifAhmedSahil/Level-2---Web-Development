import { Provider } from "react-redux"
import store from "./redux/store"
import Todo from "./components/todo"


function App() {


  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  )
}

export default App
