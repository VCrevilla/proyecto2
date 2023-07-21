import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03compConCss from './component/C03compConCss';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01componente></C01componente>
      
      <h2>Componente 2</h2>
      <C02contador></C02contador>

      <h3>Componente 3</h3>
      <C03contador></C03contador>
    </div>
  );
}

export default App;
