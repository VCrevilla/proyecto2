import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03contador from './component/C03contador';
import C04variable from './component/C04variable';
import C05operadorTernario from './component/C05operadorTernario';
import C06matriz from './component/C06matriz';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01componente></C01componente>
      
      <h1>Componente 2</h1>
      <C02contador></C02contador>

      <h1>Componente 3</h1>
      <C03contador></C03contador>

      <h1>Componente 4</h1>
      <C04variable></C04variable>

      <h1>Componente 5</h1>
      <C05operadorTernario></C05operadorTernario>

      <h1>Componente 6</h1>
      <C06matriz/>


    </div>
  );
}

export default App;
