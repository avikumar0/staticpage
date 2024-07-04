import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 mt-5">
                            <Image
                                src="/logo.webp" 
                                alt="Logo"
                                width={128}
                                height={128} 
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</Link>
                            <Link href="/experts" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Experts</Link>
                            <Link href="/guarantees" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Guarantees</Link>
                            <Link href="/testimonials" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Testimonials</Link>
                            <Link href="/contact" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button

                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <FaFacebook size={24} />
                        </button>
                        <button

                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <FaLinkedin size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
