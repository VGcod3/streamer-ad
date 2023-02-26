import React from 'react';
import { useQuery } from 'react-query';
import StreamerItem from './StreamerItem';
import { Link } from "react-router-dom"

const fetchStreamers = async () => {
    const response = await fetch('https://streamad-a8ca6-default-rtdb.europe-west1.firebasedatabase.app/streamers.json');
    const data = await response.json();
    return data;
};

const StreamersList = () => {
    const { data: streamers, isLoading, error } = useQuery('streamers', fetchStreamers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: { error.message }</div>;
    }

    return (
        <div className="relative z-10 bg-lightBg py-11">
            <div className="max-w-screen-xl py-11 mx-auto flex flex-col">
                <h2 className="font-lato font-bold capitalize text-3xl text-center blue-shadow text-hred py-10">All Streamers</h2>
                <ul className="flex flex-wrap flex-col">
                    { streamers.map((streamer, i) => (
                        i < 6 ?
                            <StreamerItem key={ streamer.id } streamer={ streamer } /> :
                            null
                    )) }
                </ul>

                <Link to={ "/streamers" } className='mx-auto mt-8 px-10 py-4 hover:shadow-hred shadow-lg hover:-translate-y-1 transition-all duration-300 bg-hred rounded hover:text-white text-black'>Explore More</Link>
            </div>

        </div>
    );
};

export default StreamersList;
