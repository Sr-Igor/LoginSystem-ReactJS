import * as C from './style'
import 'material-icons/iconfont/material-icons.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Auth/AuthContext'


export const Header = () => {

    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const login = () => {
        navigate('/login')
    }

    const handleLogout =  async () => {
        await auth.singout()
        navigate('/')
    }

    return (
        <C.Container className='flex justify-between md:pl-14 md:pr-14 pl-4 pr-4 items-center'>
            <h1 className='text-white md:text-3xl text-sm'>Basic Login System</h1>
            <div className='flex text-white'>
                {!auth.user && 
                    <div className='box flex items-center' onClick={() => login()}>
                        <span className='mr-3'>Login</span>
                        <span className='material-icons'>login</span>
                    </div>               
                }

                {auth.user &&  
                    <>
                        <div className='box flex items-center'>
                            <span className='mr-3' onClick={handleLogout}>Exit</span>
                            <span className='material-icons'>login</span>
                        </div>
                        <div>
                            <Link to={'/user'} className='ml-5'>Página de Usuário</Link>
                        </div>
                    </>
                }                
            </div>
        </C.Container>
    )
}