import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const {count} = useSelector((state)=> state.counter)

  const dispatch = useDispatch()

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 bg-slate-50 rounded-md p-10">
        <button onClick={()=>dispatch(increment())} className="px-3 py-2 bg-green-500 text-white font-bold rounded-md text-xl">Increment</button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="px-3 py-2 bg-red-500 text-white font-bold rounded-md text-xl">Decrement</button>
      </div>
    </div>
  );
}

export default App;
