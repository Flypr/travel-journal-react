import Header from './components/Header/Header'
import Card from './components/Card/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      {...item} />
    )
  })

  return (
    <div>
      <Header />
      <section className="travel-list">
        <div className="container">
          {cards}
        </div>
      </section>
    </div>
  )
}

export default App
