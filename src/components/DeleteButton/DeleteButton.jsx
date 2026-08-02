export default function DeleteButton({ onDelete }) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete();
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="Delete book"
            className="inline-flex items-center justify-center rounded-full w-8 h-8 bg-white hover:bg-red-50 text-gray-500 hover:text-red-600 border border-[#D8D3C0] shadow-xs focus:outline-none focus:ring-4 focus:ring-red-200 transition-colors"
        >
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    fillRule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
}
