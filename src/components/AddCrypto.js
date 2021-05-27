const AddCrypto = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Crypto</label>
                <input type='text' placeholder='Create Crypto' />
            </div>
            <div className='form-control form-control-check'>
                <label>Price</label>
                <input type='text' placeholder='Crypto Cost per Coin' />
            </div>
            <div className='form-control'>
                <label>Active Crypto</label>
                <input type='checkbox'/>
            </div>
        
            <input type='submit' value='Create Crypto' className='btn btn-block' /> 
            
        </form>
    )
}

export default AddCrypto
