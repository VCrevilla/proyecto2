import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C06matriz from './component/C06matriz';
import C05operadorTernario from './component/C05operadorTernario';
import C04variable from './component/C04variable';
import C03contador from './component/C03contador';
import C02contador from './component/C02contador';



function App() {
  return (
    <div>
      
      <h1>componente 06</h1>
      <C06matriz/>
      <h1>componente 05</h1>
      <C05operadorTernario/>
      <h1>componente 04</h1>
      <C04variable/>
      <h1>componente 03</h1>
      <C03contador/>
      <h1>componente 02</h1>
      <C02contador/>
      <h1>componente 1</h1>
      <C01componente/>
      
      
      


    </div>
  );
}

export default App;
