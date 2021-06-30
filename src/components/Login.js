import { useState } from 'react'

const Login = ( {onLogin}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        if (!username) {
            alert('Please enter your username')
            return 
        }
        onLogin({ username, password })
            setUsername('')
            setPassword('')
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Username</label>
                <input 
                    type='text' 
                    placeholder=''
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Password</label>
                <input 
                    type='text' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {/* <div className='form-control'>
                <label>Active Crypto</label>
                <input 
                    type='checkbox'
                    checked={active}
                    value={active}
                    onChange={(e) => setActive(e.currentTarget.checked)} 
                />
            </div> */}
            <input type='submit' value='Login to your Account' className='btn btn-block' /> 
        </form>
    )
}



// const Login = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

export default Login
