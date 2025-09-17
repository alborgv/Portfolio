import { RiArrowDownWideLine } from "react-icons/ri"
import { ReactTyped } from "react-typed"
import hojaDeVida from '../assets/1HOJADEVIDA.pdf'
import { motion } from "motion/react"

const HeroSection = () => {
    return (
        <section id="inicio" className='flex flex-col items-center bg-gradient-to-r from-blue-start to-blue-end pt-44 pb-72 md:p-20 w-full'>
            <div className='flex flex-col items-center mt-40 mb-48 w-full md:w-4/5 lg:w-2/3 xl:1/2'>
                <ReactTyped 
                    className='font-lato text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white'
                    strings={["¡HOLA, SOY ABEL ALBOR!"]} 
                    typeSpeed={60} 
                />
                <motion.span 
                    
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='font-bold text-sm md:text-3xl font-lato items-center text-blue-400 mt-2'>
                    DESARROLLADOR FULLSTACK
                </motion.span>

                <motion.button
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    href={hojaDeVida}
                    download="HOJA DE VIDA AA.pdf"
                    className="
                    bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 px-3 md:px-6 py-2 md:py-3 mt-4 font-lato font-semibold rounded-xl 
                    text-white border border-blue-400 hover:border-blue-300
                    "
                >
                    Descargar CV
                </motion.button>
            </div>
            
            <RiArrowDownWideLine
                size={50}
                style={{
                    marginTop: '-20px',
                    color: 'white',
                    animation: 'float 2s ease-in-out infinite'
                }}
                className="relative"
            />
            
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}

export default HeroSection