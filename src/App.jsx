import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const cards = data.map(
    card => {
      return (<Card 
        {...card}
      />)
    }
  )

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  )
}

export default App
