import Crypto from './Crypto' 


const Cryptos = ( { cryptos }) => {
    
    
    return (
        <>
            {cryptos.map((crypto) => (
            <Crypto key={crypto.id} crypto={crypto}/>)
            ) 
            }
            
        </>
    )
}

export default Cryptos
