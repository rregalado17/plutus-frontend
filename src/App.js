import { useState } from 'react'
import Header from './components/Header'
import Cryptos from './components/Cryptos'
import AddCrypto from './components/AddCrypto'


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

  const deleteCrypto = (id) => {
    setCryptos(cryptos.filter((crypto) => crypto.id !== id) )
  }

  const toggleActive = (id) => {
    setCryptos(cryptos.map((crypto) => crypto.id == id ? 
    {...crypto, active: !crypto.active } : crypto ))
  }

  return (
    <div className="container">
      <Header />
      <Cryptos cryptos={cryptos} onDelete={deleteCrypto} onToggle={toggleActive}  />
      <AddCrypto/>
    </div>
  );
}

export default App;
