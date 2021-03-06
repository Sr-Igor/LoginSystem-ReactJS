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
        <C.Container className='flex justify-between md:pl-14 md:pr-14 pl-2 pr-4 items-center'>
            <h1 className='text-white md:text-3xl text-sm'>Basic Login System</h1>
            <div className='flex text-white'>
                {!auth.user && 
                    <div className='box flex items-center cursor-pointer' onClick={() => login()}>
                        <span className='mr-3'>Login</span>
                        <span className='material-icons'>login</span>
                    </div>               
                }

                {auth.user &&  
                    <>
                        <div className='box flex items-center cursor-pointer'>
                            <span className='mr-3 ml-1 text-xs' onClick={handleLogout}>Exit</span>
                            <span className='material-icons text-xs'>login</span>
                        </div>
                        <div>
                            <Link to={'/user'} className='ml-5 text-xs text-center'>Página de Usuário</Link>
                        </div>
                    </>
                }                
            </div>
        </C.Container>
    )
}