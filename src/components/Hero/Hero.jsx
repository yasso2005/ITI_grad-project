import { Link } from "react-router-dom";
import heroImage from "../../assets/408068416317029264.png";
export default function Hero() { 
    return (
        <>
            <section className="relative w-full bg-[#4A3728] py-16 px-4 flex justify-center">
                <div className="relative w-full md:w-1/2">
                    <img
                        src={heroImage}
                        className="w-full rounded-xl shadow-lg"
                        alt="Cozy reading nook"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-center px-4 gap-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                            Welcome, Reader.
                        </h1>
                        <p className="text-white text-base sm:text-lg">
                            A quiet corner of the internet for book lovers.
                        </p>
                        <p className="text-white/80 italic text-sm sm:text-base">
                            "There is no friend as loyal as a book."
                        </p>
                        <Link
                            to="/home"
                            className="px-6 py-3 bg-[#C97B2E] text-[#5C4A3D] rounded-md hover:bg-[#f6e5be] inline-block">
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
} 
