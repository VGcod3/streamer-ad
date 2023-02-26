import { useQuery } from 'react-query';
import { Link } from "react-router-dom";

function OfferCard({ offer }) {
    return (
        <Link to={ `/offer/${offer.id}` }>
            <div className="rounded p-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-lightBg h-full flex flex-col justify-between align-middle">
                <h2 className="font-bold text-lg mb-2">{ offer.caption }</h2>
                <p className="text-gray-600">Category: <span className='text-white bg-hblue rounded p-1'>{ offer.category }</span></p>
            </div>
        </Link>
    );
}

function OffersList() {
    const { isLoading, error, data } = useQuery('offers', () =>
        fetch('https://streamad-a8ca6-default-rtdb.europe-west1.firebasedatabase.app/offers.json').then((res) => res.json())
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching offers: { error.message }</div>;

    return (

        <div className="bg-darkBg py-11">
            <div className="max-w-screen-xl py-11 mx-auto flex flex-col">
                <h2 className="font-lato font-bold capitalize text-3xl text-center blue-shadow text-hblue py-10">
                    Find an AD offer
                </h2>

                <div className="container mx-auto px-4 mb-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        { data.map((offer, i) => (
                            i < 6 ?
                                <OfferCard key={ offer.id } offer={ offer } />
                                : null
                        )) }
                    </div>
                </div>
                <Link to={ "/offers" } className='mx-auto  mt-8 px-10 py-4 hover:shadow-hblue shadow-lg hover:-translate-y-1 transition-all duration-300 bg-hblue rounded hover:text-white text-black'>Explore More</Link>

            </div>
        </div>


    );
}

export default OffersList;
