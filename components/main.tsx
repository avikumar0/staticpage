import Image from "next/image";

const MainContent = () => {
    return (
        <main className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Exclusive Help For Your UK Assignment</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get Quality Help</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">By Leading UK PhD experts in your topic</p>
                </div>
                <div className="mt-10 flex justify-center items-center">
                    <div className="w-64 md:w-auto">
                        <Image
                            src="/hero_image.png" 
                            alt="Main"
                            width={500} 
                            height={300} 
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a href="#" className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">Get Help Now</a>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
