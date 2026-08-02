import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const useStore = create(
    persist((set, get) => ({
        favourites: [],
        toggleFavourite: (book) => {
            const currentFavourites = get().favourites;
            const found = currentFavourites.find((b) => b.id === book.id);
            if (found) {
                set({ favourites: currentFavourites.filter((b) => b.id !== book.id) });
            } else {
                set({ favourites: [...currentFavourites, book] });
            }
        },
        booksArray: [],
        isLoading: true,
        fetchBooks: async (realTitles, coverImages) => {
            if (get().booksArray.length > 0) return;
            try {
                const { data } = await axios.get(`https://bookstore-api-six.vercel.app/api/books?amount=20`);
                const shuffledCovers = shuffleArray(coverImages);
                const englishBooks = data.map((book, index) => ({
                    ...book,
                    title: realTitles[index % realTitles.length] ?? book.title,
                    cover: shuffledCovers[index % shuffledCovers.length],
                }));
                set({ booksArray: englishBooks });
            } catch (error) {
                console.log(error);
            } finally {
                set({ isLoading: false });
            }
        },
        deleteBook: (id) => {
            set({ booksArray: get().booksArray.filter((book) => book.id !== id) });
        },
    }),
        {
            name: "bookverse-storage",
            partialize: (state) => ({ favourites: state.favourites }),
        }
    ));

export default useStore;