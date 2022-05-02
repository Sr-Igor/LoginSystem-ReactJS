import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthContext'
import * as C from './style'

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const verifyLogin = async () => {
        if (email && password) {
            const isLogged = await auth.singin(email, password)
            console.log(isLogged)
            if(isLogged){
                navigate('/')
            }else {
                alert('Error área')
            }
        }
    }

    return (
        <C.Container className='flex flex-col justify-center items-center'>
            <div className='section w-56 h-64 bg-slate-900 shadow-lg shadow-blue-500/50 rounded flex flex-col justify-center items-center'>
                <label htmlFor="" className='rounded flex flex-col'>
                    <span className='text-white'>Email:</span>
                    <input type="email"  className='rounded mb-5' onChange={e => setEmail(e.target.value)} value={email}/>
                </label>

                <label htmlFor="" className='flex flex-col mb-5'>
                    <span className='text-white'>Senha:</span>
                    <input type="password" className='rounded' onChange={e => setPassword(e.target.value)} value={password}/>
                </label>
                <button className='text-white text-xl' onClick={verifyLogin}>Entrar</button>
            </div>
        </C.Container>
    )
}