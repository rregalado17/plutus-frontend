const crypto = ( {crypto} ) => {
    return (
        <div className='crypto'>
            <h3>{crypto.name}</h3>
            <p>{crypto.price}</p>
        </div>
    )
}

export default crypto
