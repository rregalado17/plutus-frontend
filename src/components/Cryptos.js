import Crypto from './Crypto' 


const Cryptos = ( { cryptos, onDelete, onToggle }) => {
    
    
    return (
        <>
            {cryptos.map((crypto) => (
            <Crypto key={crypto.id} 
            crypto={crypto} 
            onDelete={onDelete} 
            onToggle={onToggle}/>)
            ) 
            }
            
        </>
    )
}

export default Cryptos
