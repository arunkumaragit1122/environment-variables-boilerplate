import "./App.css";

function App() {
  return (
    <div className="App">
      {/* -----------------------------USAGE------------------------------------------------- */}
      <h1>{process.env.REACT_APP_NAME}</h1>
      {/* -----------------------------WE CAN USE ENVIRONMENT VARIABLE ANY WHERE IN THE APP----------------------------------- */}
    </div>
  );
}

export default App;
