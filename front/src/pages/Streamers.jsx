import React from 'react';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";


const StreamersPage = () => {
    const { data, status } = useQuery('streamers', async () => {
        const response = await fetch('streamers.json');
        if (!response.ok) {
            throw new Error('Failed to fetch streamers');
        }
        return response.json();
    });

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error fetching streamers</div>;
    }

    return (
        <div className="p-4 bg-darkBg rounded">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Twitch
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Prices
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Available
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-lightBg divide-y divide-gray-200">
                    { data.map((streamer) => (
                        <tr key={ streamer.username } className='border-gray-200 hover:text-gray-600 hover:bg-gray-100'>
                            <Link to={ `/streamer/${streamer.id}` }>
                                <td className="px-6 py-12 font-bold hover:text-hblue whitespace-nowrap text-lg h-full text-center my-auto">{ streamer.username }</td>
                            </Link>
                            <td className="px-6 py-4 whitespace-nowrap">{ streamer.email }</td>
                            <td className="px-6 py-4 whitespace-nowrap">{ streamer.twitch }</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <ul className="list-inside list-none">
                                    { Object.entries(streamer.prices).map(([service, price]) => (
                                        <li key={ service }>
                                            service :
                                            {
                                                <span className='text-hred'>{ price }</span>
                                            }
                                            {/* { `${service}: $${price}` } */ }
                                        </li>
                                    )) }
                                </ul>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <ul className="list-disc list-inside">
                                    { streamer?.available?.map((dates) => (
                                        <li key={ dates.join('-') }>{ `${dates[0]} - ${dates[1]}` }</li>
                                    )) }
                                </ul>
                            </td>

                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
};

export default StreamersPage;
