
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const {count} = useAppSelector((state)=> state.counter)

  const dispatch = useAppDispatch()

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 bg-slate-50 rounded-md p-10">
        <button onClick={()=>dispatch(incrementByValue(5))} className="px-3 py-2 mr-4 bg-green-500 text-white font-bold rounded-md text-xl">Increment</button>
        <button onClick={()=>dispatch(increment())} className="px-3 py-2 bg-green-500 text-white font-bold rounded-md text-xl">Increment</button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="px-3 py-2 bg-red-500 text-white font-bold rounded-md text-xl">Decrement</button>
      </div>
    </div>
  );
}

export default App;
