import { FaTimes } from 'react-icons/fa'

const Crypto = ( {crypto} ) => {
    return (
        <div className='crypto'>
            <h3>{crypto.name} <FaTimes style={{color: 'red', cursor: 'pointer' }} /> </h3>
            <p>{crypto.price}</p>
        </div>
    )
}

export default Crypto
