import Cabecalho from "./componentes/Cabecalho";
import BemVindo from "./componentes/BemVindo";
import Footer from "./componentes/Footer";
import './App.css'

// E usa ele dentro do App:

function App() {
  return (
    <div>
      <Cabecalho
    
      />
      <BemVindo nomeUsuario="turma iteam" totalHabitos={5} />
      <Footer />
    </div>
  );
}

export default App