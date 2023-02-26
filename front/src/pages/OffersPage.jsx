import { useQuery } from 'react-query'
import { Link } from "react-router-dom"

const OffersPage = () => {
    async function getOffers() {
        const response = await fetch('db.json//offers');
        const data = await response.json();
        return data;
    }
    const { isLoading, error, data: offers } = useQuery('offers', getOffers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: { error.message }</div>;
    }

    return (
        <div className="p-6">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Sender ID</th>
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-left">Category</th>
                        <th className="py-3 px-6 text-left">Price</th>
                    </tr>
                </thead>
                <tbody className="text-gray-100 text-sm font-light w-full">
                    { offers.map((offer) => (
                        <tr className="border-b w-full border-gray-200 hover:text-gray-600 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">{ offer.id }</td>
                            <Link to={ `/offer/${offer.id}` } key={ offer.id }>
                                <td className="py-3 px-6 text-left">{ offer.caption }</td>
                            </Link>
                            <td className="py-3 px-6 text-left">
                                <p className='bg-hblue rounded text-center text-white p-1 px-auto mx-auto'>
                                    { offer.category }
                                </p>
                            </td>
                            <td className="py-3 px-6 text-left">${ offer.price }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default OffersPage;
