import React from 'react';
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.webp'


const StreamerItem = ({ streamer }) => {
    return (

        <Link to={ `/streamer/${streamer.id}` }>
            <li key={ streamer.id } className='bg-darkBg rounded m-2 pl-6 pr-11 py-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>
                <div className='flex justify-center items-center'>
                    <div className="avatar mr-11 bg-hblue rounded-full p-3">
                        <img src={ avatar } alt="avatar" className='h-[50px] rounded-full mr-0' />
                    </div>

                    <div className="flex-grow flex justify-between items-center">
                        <div>
                            <h2 className="font-bold text-lg transition-all duration-300 hover:text-[1.15em] ">{ streamer.username }</h2>
                            <a href={ `https://${streamer.email}` } className="text-gray-600 transition-all duration-300 hover:text-hred block">{ streamer.email }</a>
                            <a href={ `https://${streamer.twitch}` } className="text-gray-600 transition-all duration-300 hover:text-hred block">{ streamer.twitch }</a>
                        </div>
                        <div>
                            <ul>
                                <li className="text-sm ">
                                    Post:
                                    <span className='text-hred' >{ streamer.prices.post }</span>
                                </li>
                                <li className="text-sm ">
                                    Banner:
                                    <span className='text-hred' >{ streamer.prices.abnner }</span>
                                </li>
                                <li className="text-sm ">
                                    Video:
                                    <span className='text-hred'> { streamer.prices.video }</span>
                                </li>
                                <li className="text-sm ">
                                    Mention:
                                    <span className='text-hred' >{ streamer.prices.mention }</span>
                                </li>
                            </ul>
                        </div >
                    </div >
                </div >
            </li>

        </Link >

    );
}

export default StreamerItem;
