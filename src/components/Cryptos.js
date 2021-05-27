import Crypto from './Crypto' 


const Cryptos = ( { cryptos, onDelete }) => {
    
    
    return (
        <>
            {cryptos.map((crypto) => (
            <Crypto key={crypto.id} crypto={crypto} onDelete={onDelete}/>)
            ) 
            }
            
        </>
    )
}

export default Cryptos
