import { useEffect, useState } from "react"
import { Route } from "react-router"
import "./App.css"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Exchange } from "./containers/Exchange/Exchange"
import { Home } from "./containers/Home/Home"

function App() {
  const [data, setData] = useState()
  const [curr, setCurr] = useState({})

  async function getData() {
    fetch(
      "http://data.fixer.io/api/latest?access_key=fe7fa76c1970b273113968bfb271b258"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setCurr(data.rates)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route
        path="/home"
        render={(props) => <Home curr={curr} setCurr={setCurr} />}
      />
      <Route path="/exchange" render={(props) => <Exchange curr={curr} />} />

      <Footer />
    </div>
  )
}

export default App
