
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../store/store";

const coverImages = Object.values(
    import.meta.glob('../../assets/BookCover/*.{jpg,jpeg,png}', { eager: true, import: "default" })
);

const realTitles = [
    "The Silent Orchard", "Whispers of the Northern Wind", "A Thousand Quiet Mornings",
    "The Cartographer's Daughter", "Beneath the Iron Sky", "Letters from the Last Lighthouse",
    "The Clockmaker's Secret", "Ashes of the Summer Fields", "The River That Remembers",
    "Shadows Over Ravenwood", "The Glassblower's Apprentice", "Echoes in the Stone House",
    "The Wanderer's Almanac", "Songs for a Distant Shore", "The Paper Lantern",
    "Fire on the Mountain Road", "The Keeper of Forgotten Maps", "A Garden of Broken Clocks",
    "The Midnight Ferry", "Winter at Blackthorn Manor", "The Salt-Stained Journal",
    "A House of Quiet Rooms", "The Last Astronomer", "Fields of Amber Grass",
    "The Bookseller of Elm Street", "Voices Beneath the Waves", "The Copper Compass",
    "A Season of Falling Leaves", "The Hollow Bell", "Marigold and Ash",
    "The Painter's Last Canvas", "Stars Over the Harbor", "The Forgotten Violinist",
    "A Map of Unmarked Roads", "The Widow's Garden", "Threads of the Old Loom",
    "The Storm Before Spring", "A Letter Never Sent", "The Silver Fox Inn",
    "Beneath the Willow Bridge", "The Lighthouse Keeper's Diary", "A Winter's Reckoning",
    "The Traveling Apothecary", "Fields Beyond the Fence", "The Last Train to Ashford",
    "A Quiet Kind of Courage", "The Bells of Thornwood", "Echo of the Old Mill",
    "The Gardener's Confession", "A Promise Made in Autumn", "The Nightingale's Return",
    "Beyond the Copper Hills", "The Innkeeper's Daughter", "A Fable of Frost and Fire",
    "The Weaver's Last Thread", "Songs from the Salt Marsh", "The Orchard at Midnight",
    "A Cartographer's Regret", "The Hidden Constellation", "Rain Over Millbrook",
    "The Locksmith's Riddle", "A Song for the Quiet Hours", "The Watchmaker's Daughter",
    "Beneath a Borrowed Sky", "The Last Harvest Moon", "A Whisper in the Archives",
    "The Ferryman's Promise", "Autumn in the Old Quarter", "The Gatekeeper's Secret",
    "A Field Guide to Vanishing", "The Bookbinder's Apprentice", "Whistling Past the Churchyard",
    "The Cartwright Legacy", "A Letter from the Highlands", "The Silent Cartomancer",
    "Beneath the Iron Bridge", "The Last Lantern of Autumn", "A Quiet Corner of the World",
    "The Stonemason's Daughter", "Whispers Along the Coastline", "The Forgotten Almanac",
    "A Season Without Rain", "The Tailor's Last Stitch", "Songs of the Salt Road",
    "The Hollow Orchard", "A Map Without Borders", "The Quiet Astronomer",
    "Beneath the Harvest Moon", "The Innkeeper's Secret", "A Winter Without End",
    "The Cobbler's Last Pair", "Whistling Wind at Dusk", "The Forgotten Lighthouse",
    "A Song of Salt and Stone", "The Old Mill's Last Turn", "Fields Beneath a Pale Moon",
    "The Wanderer's Last Letter", "A Quiet Place to Fall", "The Vanishing Cartographer",
];

export default function Home() {
    const booksArray = useStore((state) => state.booksArray);
    const isLoading = useStore((state) => state.isLoading);
    const fetchBooks = useStore((state) => state.fetchBooks);
    const deleteBook = useStore((state) => state.deleteBook);
    const favourites = useStore((state) => state.favourites);
    const toggleFavourite = useStore((state) => state.toggleFavourite);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchBooks(realTitles, coverImages);
    }, []);

    function handleDeleteBook(id) {
        deleteBook(id);
        const favouriteBook = favourites.find((b) => b.id === id);
        if (favouriteBook) {
            toggleFavourite(favouriteBook);
        
        }
    }
    
        const filteredBooks = booksArray.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
            
        );

        return (
            <>
                <div className="max-w-6xl mx-auto p-6 bg-[#f7f0e4] mt-8">
                    <h1 className="text-3xl font-bold text-center my-6">Bookverse</h1>
                    <div className="flex justify-center mb-6">
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-[#fdfaf3]"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {isLoading ? (
                        <p className="text-center my-10 col-span-full"> kindly Wait  
                        Great Things Takes Time 
                        </p>
                    ) : filteredBooks.length === 0 ? (
                        <p className="text-center my-10 col-span-full">Sorry The Book you're searching for does't exist.
                        Try Again.</p>
                    ) : (
                        filteredBooks.map((book) => (
                            <BookBox key={book.id} book={book} onDelete={() => handleDeleteBook(book.id)} />
                        ))
                    )}
                </div>
                </div>
            </>
        );
    }

    function BookBox({ book, onDelete }) {
        return (
            <>
                <div key={book.id} className=" relative rounded-lg p-4 bg-[#fdfaf3] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
                    <div className="absolute bottom-3 right-3 z-10">
                        <DeleteButton onDelete={onDelete} />
                    </div>
                    <div className="absolute bottom-3 left-3 z-10">
                        <FavouriteButton book={book} />
                    </div>
                
                    <div className="book text-center">
                        <p className="w-full rounded mb-3">{book.title}</p>
                        <img src={book.cover} alt={book.title} className="w-text-sm aspect-square object-cover text-gray-600 " />
                        <h2 className="font-bold">{book.title}</h2>
                        <p className="text-sm text-gray-600">{book.author}</p>
                    </div>
                </div>
            </>
        );
    }
