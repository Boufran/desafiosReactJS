import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <ItemListContainer texto="Desafio 7" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
