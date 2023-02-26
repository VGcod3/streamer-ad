import { Link } from 'react-router-dom'
import bottom from '../assets/bottom.png'

const FirstScreen = () => (
    <div className='relative px-4 max-w-screen-xl mx-auto py-[160px] h-screen'>
        <h1 className="relative z-10 blue-shadow main-title font-lato font-bold lg:text-5xl text-4xl text-white capitalize">
            Find A Streamer
            <br />
            Or content to monetize your stream
        </h1>
        <p className='relative z-10 max-w-[600px] pt-10 text-gray-500 text-md'>
            This platform can help streamers find advertising partners and place ads in their streams. It can include tools to automate the advertising integration process and increase advertising revenue.
        </p>

        <Link to={ "/register" }>
            <button className='mx-auto relative z-10 mt-[50px] px-10 py-4 hover:shadow-hred shadow-lg shadow-gray-800 hover:-translate-y-1 transition-all duration-300 bg-hred rounded hover:text-white text-black'>
                Get Started
            </button>
        </Link>

        <img src={ bottom } alt="bottom" className="bottom absolute bottom-0 mx-auto w-2/3 z-0" />

    </div>
);

export default FirstScreen;