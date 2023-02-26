
import bottom from '../assets/bottom.png'
import top from '../assets/top.png'

import { Link } from 'react-router-dom'
const MainPage = () => {
    return (
        <>
            <div className="relative bg-darkBg h-screen pt-11">
                <div className='relavite z-10 flex align-middle pt-11 justify-center flex-col'>
                    <h1 className='relative text-center z-10 text-6xl my-auto text-hblue font-bold blue-shadow'> <span className='text-hred'>404</span>  Error</h1>
                    <Link to={ '/' } className='px-2 py-6 mx-auto my-11 w-[250px] relative text-center z-10 text-xl text-hblue font-bold bg-hred rounded box-shadow'>GO TO MAIN</Link>
                </div>
                <img src={ bottom } alt="bottom" className="bottom absolute bottom-0 mx-auto w-2/3 z-0" />
            </div>
            <img src={ top } alt="top" className="top absolute top-0 right-0  h-screen z-0" />
        </>


    )
}

export default MainPage;