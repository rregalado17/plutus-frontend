import { useState } from 'react'
import Header from './components/Header'
import Cryptos from './components/Cryptos'



function App() {

  const [cryptos, setCryptos] = useState([
    {
        id: 1,
        name: "Bitcoin",
        price: "$10",
        active: true,
    },
    {
        id: 2,
        name: "Ethereum",
        price: "$5",
        active: true,
    },
    {
        id: 3,
        name: "Dogecoin",
        price: "$1",
        active: true,
    }
])


  return (
    <div className="container">
      <Header />
      <Cryptos cryptos={cryptos} />
    </div>
  );
}

export default App;
