import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import avatar from '../assets/avatar.webp';
import top from '../assets/top.png';

import CommentField from '../components/CommentField';

const StreamerPage = () => {
    const { streamerID } = useParams();
    const [streamerData, setStreamerData] = useState(null);


    useEffect(() => {
        const fetchStreamerData = async () => {
            try {
                const response = await fetch('db.json/streamers');
                const data = await response.json();
                const streamer = data.find(streamer => streamer.id == streamerID)
                console.log(streamer);
                setStreamerData(streamer);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStreamerData();
    }, [streamerID]);

    return (
        <div className="w-full z-10  bg-darkBg">
            <div className="relative px-4 max-w-screen-xl mx-auto pt-[100px]">
                { streamerData ? (
                    <>
                        <div className='flex align-middle justify-start'>
                            <div className="relative z-10 avatar w-auto h-auto mr-11 bg-hblue rounded-full p-3">
                                <img src={ avatar } alt="avatar" className='h-[150px] rounded-full mr-0' />
                            </div>
                            <h1 className="relative h-max my-auto z-10 blue-shadow font-lato font-bold lg:text-5xl text-4xl text-hblue capitalize">
                                { streamerData.username }
                            </h1>
                        </div>

                        <h2 className='relative z-10 text-gray-100 mt-4 text-3xl'>Contacts</h2>
                        <a href={ `https://${streamerData.email} ` } className="relative block z-10 text-gray-400 pt-2">{ streamerData.email }</a>
                        <a href={ `https://${streamerData.twitch}` } className="relative block z-10 text-gray-400 pt-2">{ streamerData.twitch }</a>

                        <div className="mt-11 relative z-10 h-auto flex flex-col md:flex-row">
                            <div className="w-full md:w-2/3 md:pr-8">
                                <h2 className="text-gray-100 mt-4 text-3xl">Available</h2>
                                { streamerData.available.map((datum, i) => (
                                    <div className='flex justify-between md:mr-12'>
                                        <p className="text-gray-200 mt-4 text-center" >
                                            From { <span className='font-bold'> { datum[0] }</span> }
                                        </p>
                                        <p className="text-gray-200 mt-4 text-center">
                                            To { <span className='font-bold'> { datum[1] }</span> }
                                        </p>
                                    </div>

                                )) }
                            </div>
                            <div className="w-full md:w-1/3 mt-8 md:mt-0">
                                <h2 className="text-gray-100 mt-4 text-3xl">Prices</h2>
                                <div className="grid grid-cols-2 gap-2 ">
                                    { Object.entries(streamerData.prices).map((datum) => (
                                        <>
                                            <span className="text-gray-200">{ `${datum[0]}:` }</span>
                                            <span className="text-hblue font-bold">{ `$${datum[1]}` }</span>
                                        </>
                                    )) }
                                </div>
                            </div>
                        </div>



                        {/* <img src={ bottom } alt="bottom" className="bottom absolute bottom-0 mx-auto w-2/3 z-0" /> */ }
                    </>

                ) : (
                    <p>Loading...</p>
                ) }
                <CommentField />
            </div>
            <img src={ top } alt="top" className="top absolute top-0 right-0 h-screen z-0" />
        </div >
    );
};

export default StreamerPage;
