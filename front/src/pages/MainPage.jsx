import FirstScreen from "../components/FirstScreen";
import StreamersList from "../components/StreamersList"
import OffersList from "../components/OffersList"
import top from '../assets/top.png'



const MainPage = () => {
    return (
        <div className="w-full bg-darkBg h-full">
            <FirstScreen />

            <StreamersList />

            <OffersList />

            <img src={ top } alt="top" className="top absolute top-0 right-0 z-0" />

        </div >
    )
}

export default MainPage;