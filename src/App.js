import "./App.css";
import Contador from "./components/Contador";

function App() {
  const stock = 10;
  return (
    <div className="App">
      <Contador stock={stock} />
    </div>
  );
}

export default App;
