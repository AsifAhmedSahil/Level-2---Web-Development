function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 bg-slate-50 rounded-md p-10">
        <button className="px-3 py-2 bg-green-500 text-white font-bold rounded-md text-xl">Increment</button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-3 py-2 bg-red-500 text-white font-bold rounded-md text-xl">Decrement</button>
      </div>
    </div>
  );
}

export default App;
