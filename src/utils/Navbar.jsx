import { useState } from 'react';
import webLogo from '../assets/web-logo.png';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50'>
            <nav className="bg-blue-start p-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a href="#inicio" className="flex items-center cursor-pointer">
                                <img src={webLogo} alt="Logo" className="h-8 mr-2" />
                                <h1 className="text-white">Abel Albor</h1>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center justify-center flex-grow">
                            <a href='#info' className="bg-transparent text-white px-4 py-2">
                                Sobre mí
                            </a>
                            <a href='#proyectos' className="bg-transparent text-white px-4 py-2">
                                Proyectos
                            </a>
                            <a href='#experiencia' className="bg-transparent text-white px-4 py-2">
                                Experiencia
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <a href='https://www.linkedin.com/in/abel-a-46a096240/' target="_blank" rel="noopener noreferrer" className='mr-4'>
                                <FaLinkedin size={25} color='white' />
                            </a>
                            <a href='https://github.com/alborgv' target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} color='white' />
                            </a>
                            <div className="md:hidden ml-4">
                                <button onClick={toggleMenu}>
                                    {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:hidden flex flex-col items-center mt-4 transition-all duration-700 ease-in-out ${
                        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <a href='#info' className="bg-transparent text-white px-4 py-2">
                        Sobre mí
                    </a>
                    <a href='#proyectos' className="bg-transparent text-white px-4 py-2">
                        Proyectos
                    </a>
                    <a href='#experiencia' className="bg-transparent text-white px-4 py-2">
                        Experiencia
                    </a>
                </div>
            </nav>
            <hr className='border-blue-400' />
        </div>
    );
}
