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
    </div>
  )
}

export default App
