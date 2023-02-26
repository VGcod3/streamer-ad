import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import top from '../assets/top.png'


import CommentField from '../components/CommentField'

const OfferPage = () => {
    const { offerID } = useParams();

    const { isLoading, isError, data: offerData } = useQuery(
        ['offer', offerID],
        async () => {
            const response = await fetch(`https://streamad-a8ca6-default-rtdb.europe-west1.firebasedatabase.app/offers.json`);
            const data = await response.json();
            const offer = data.find(offer => offer.id == offerID)
            console.log(offer);
            return offer;
        }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading offer</div>;
    }

    return (
        <>
            <div className='w-full relative z-10  bg-transparent'>
                <div className="relative z-10 px-4 max-w-screen-xl mx-auto pt-[50px]">
                    <div className='flex w-full relative z-10'>
                        <div className='w-1/2 sm:w-full my-3'>
                            <h2 className="font-bold text-2xl m-0">What to do</h2>
                            <p>{ offerData.caption }</p>
                        </div>
                        <div claassName='w-1/2 sm:w-full my-3'>

                            <h2 className="font-bold inline text-2xl ">Category</h2>
                            <p className=' inline rounded mx-3 bg-hblue p-1'>{ offerData.category }</p>
                        </div>
                    </div>


                    <h2 className="font-bold text-2xl mt-6">Fee</h2>
                    <p className='text-hred'>${ offerData.price }</p>

                    <h2 className="font-bold text-2xl mt-6">Other information</h2>
                    <p>{ offerData.description }</p>

                    <h2 className="font-bold text-2xl mt-6">Quearions and comments</h2>
                    <CommentField />
                </div>

            </div>
            <img src={ top } alt="top" className="top h-screen absolute top-0 right-0 z-0" />
        </>

    );
};

export default OfferPage;
