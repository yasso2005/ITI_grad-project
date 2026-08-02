import useStore from "../store/store";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

export default function Favourites() {
    const favourites = useStore((state) => state.favourites);
    if (favourites.length === 0) {
        return<div className="max-w-6xl mx-auto p-6 mt-8"><p className="text-center my-10 mt-10">No favourites yet.</p></div> ;
    }
    return (
        <div className="max-w-6xl mx-auto p-6 mt-8">
            <h1 className="text-3xl font-bold text-center my-6">Favourites</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {favourites.map((book) => (
                    <div key={book.id} className="relative rounded-lg p-4 bg-[#fdfaf3] shadow-sm">
                        <FavouriteButton book={book} />
                        <div className="text-center">
                            <img src={book.cover} alt={book.title} className="aspect-square object-cover" />
                            <h2 className="font-bold">{book.title}</h2>
                            <p className="text-sm text-gray-600">{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}