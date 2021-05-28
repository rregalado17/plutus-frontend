import { useState } from 'react'



const AddCrypto = ( {onAdd}) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [active, setActive] = useState(false) 

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please name your crypto')
            return 
        }

        onAdd({ name, price, active })
            setName('')
            setPrice('')
            setActive('')
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Crypto</label>
                <input 
                    type='text' 
                    placeholder='Create Crypto'
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Price</label>
                <input 
                    type='text' 
                    placeholder='Crypto Cost per Coin' 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Active Crypto</label>
                <input 
                    type='checkbox'
                    checked={active}
                    value={active}
                    onChange={(e) => setActive(e.currentTarget.checked)} 
                />
            </div>
        
            <input type='submit' value='Create Crypto' className='btn btn-block' /> 
            
        </form>
    )
}

export default AddCrypto
