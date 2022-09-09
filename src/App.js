import "./App.css";
import Contador from "./components/Contador";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const stock = 10;
  return (
    <div className="App">
      <Contador stock={stock} />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
