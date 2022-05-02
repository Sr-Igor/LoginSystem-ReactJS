import * as C from './style'
import 'material-icons/iconfont/material-icons.css';

export const User = () => {
    return(
        <C.Container>
            <div className='s-left flex flex-col justify-center items-center h-full'>
                <div className='profileArea text-white mb-10 flex justify-center items-center'>
                    <span className='material-icons'>account_circle</span>
                    <span className='ml-5'>Olá, Usuário</span>
                </div>
                <div className='text-white text-4xl text-center'>User Area For Logged Users</div>
            </div>
        </C.Container>
    )
}