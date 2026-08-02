import useStore from "../Store/Store";
export default function FavouriteButton({ book }) {
    const favourites = useStore((state) => state.favourites);
    const toggleFavourite = useStore((state) => state.toggleFavourite);
    const found = favourites.find((b) => b.id === book.id);
    const isFavourite = !!found;
    return (
        <button onClick={() => toggleFavourite(book)}>
            {isFavourite ? "❤️" : "🤍"}
        </button>
    );
}