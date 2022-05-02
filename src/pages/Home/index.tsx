import * as C from './style'
import { BoxesHome } from '../../components/BoxesHome'

export const Home = () => {
    return (
        <C.Container>
            <h2 className='text-center text-white pt-8 md:text-3xl text-xl'>Example HomePage with boxes</h2>
            <div className='boxesArea flex flex-wrap justify-center w-full p-5'>
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
               <BoxesHome />
            </div>
        </C.Container>
    )
}