import './App.css';
import { useState } from 'react';

function App() {
  const [setEmpleado] =useState("")
  const [numero1, setNumero1] =useState(0)
  const [numero2, setNumero2] =useState(0)

  const resultadoMultiply = Number(numero1) * Number (numero2)

  const addNumber = (event) => {
    setEmpleado(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <legend>Calculadora de Sueldos</legend>
        
      <label>
          <input value={numero1} onChange={(e) => setNumero1(e.target.value)} type="number" placeholder="Número de Empleados"/>
      </label>

      <label>
        <input value={numero2} onChange={(e) => setNumero2(e.target.value)} type="number" placeholder="Sueldo Promedio"/>
      </label>

      <div 
      className="App-link"
      >
        Al año usted gasta en promedio un sueldo de: {resultadoMultiply} 
        </div>
      </header>
    </div>
  );
}

export default App;
