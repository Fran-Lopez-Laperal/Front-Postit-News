import './App.css'

function App() {

  const compis = ['Fran 👦🏻 💻', 'Lupe 👩🏻 💻', 'Inés 👩🏼 💻', 'Jose 👦🏻 💻']

  return (
    <div className="App">
      <h1>Vamos a darle caña a esto compisssss!!!</h1>
      {compis.map((compi, index) => (
        <ul key={index} style={{listStyle:'none' }}>
          <li>{compi}</li>
        </ul>
      ))}

      <h2>Recoradad:</h2>
     <h3>Siempre pull antes de trabajar</h3>
     <h3>Trabaja desde tu propia rama, nunca desde Main</h3>
     <h3>Y sobre todo, vamos a aprender!!!!</h3>
    </div>
  )
}

export default App
