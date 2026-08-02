import Hero from "../Hero/Hero";
export default function AboutSection() {
    return (
        <>
            <Hero />
            <div className="w-full py-16 px-4 bg-[#F7F1E5] flex flex-col items-center justify-center text-center rounded-xl ">
                <h2 className="text-3xl font-bold text-[#2B1B12] mb-4">About Bookverse</h2>
                <p className="max-w-2xl text-lg text-[#5C4A3D]">
                    Hello There!
                    Thank you for visiting my humble website .
                    I created this website for the book lovers like myself who can't always have their books with them at all times .
                    This is a cozy corner for us to read and enjoy our shared hobby which is reading .
                    Hope you enjoy your visit .
                </p>
            </div>
        </>
    );
}