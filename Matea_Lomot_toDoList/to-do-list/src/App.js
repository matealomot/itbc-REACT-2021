import './App.css';
import NovaToDoLista from "./components/Lista";
//Ima par bagova koja nisam jos uvek uspela da resim, a treba i bonus za loal storage da dodam

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do list</h1>
      </header>

      <NovaToDoLista/>
    </div>
  );
}

export default App;
