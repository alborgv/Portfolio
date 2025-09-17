import pythonLogo from '../assets/python-logo.png'
import tsLogo from '../assets/ts-logo.png'
import djangoLogo from '../assets/django-logo.png'
import reactLogo from '../assets/react-logo.png'
import tailwindLogo from '../assets/tailwind-logo.png'
import githubLogo from '../assets/github-logo.png'
import gitLogo from '../assets/git-logo.png'
import htmlLogo from '../assets/html-logo.png'
import jsLogo from '../assets/js-logo.png'
import { motion } from "motion/react"

export default function AboutSection() {
    return (

        <section id="info" className='bg-blue-mid p-6 md:p-24'>
            <div className="max-w-2xl flex flex-col mx-auto">

                <motion.span 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-white font-lato text-2xl mt-4 md:text-3xl font-bold'>Sobre mí.
                </motion.span>
                <hr className='mt-2 mb-4' />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-white font-lato flex flex-col'>

                    <span className='mb-2'>
                        Programador especializado especializado en Python y Javascript (Typescript).
                        Tengo experiencia en desarrollo backend con Django Rest Framework y en la
                        creación de API RESTful seguras y robustas. En frontend con React + Typescript
                        implementando diseños modernos y responsivos con TailwindCSS.
                        <br />
                        Manejo sólido de bases de datos, desde su gestión hasta la optimización en
                        grandes volúmenes.
                        
                    </span>
                    <span>
                        Soy capaz de diagnosticar y resolver problemas de software, y tengo habilidad para documentar y comunicar procesos técnicos, colaborando efectivamente con equipos de desarrollo para mejorar aplicaciones y sistemas informáticos.
                    </span>
                </motion.div>

                <div className='mt-6'>
                    <motion.div
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='mb-12'>
                        <span className='text-white font-lato font-bold text-xl'>Educación:</span>
                        <div className='flex items-start mt-3'>
                            <span className='text-white text-5xl'>·</span>
                            <div className='ml-3'>
                                <span className='text-white text-sm font-lato font-bold'>Técnico en Auxiliar en Soporte Técnico en Tecnología</span>
                                <div className='text-gray-400 text-sm mt-1 font-lato'>
                                    Corporación Elyon Yireh de Barranquilla
                                </div>
                                <div className='text-gray-400 text-sm mt-1 font-lato'>
                                    2021-2023
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div>
                        <motion.p 
                        initial={{ opacity: 0, x: -150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className='text-white font-lato font-bold text-xl'>Habilidades</motion.p>
                        <div className='mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6'>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                className='flex flex-col items-center'>
                                <img src={pythonLogo} alt='Python Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>Python</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55 }}
                                className='flex flex-col items-center'>
                                <img src={tsLogo} alt='TypeScript Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>TypeScript</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className='flex flex-col items-center'>
                                <img src={djangoLogo} alt='Django Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>Django</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.85 }}
                                className='flex flex-col items-center'>
                                <img src={reactLogo} alt='React Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>React</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className='flex flex-col items-center'>
                                <img src={tailwindLogo} alt='Tailwind Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>Tailwind</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.15 }}
                                className='flex flex-col items-center'>
                                <img src={githubLogo} alt='GitHub Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>GitHub</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className='flex flex-col items-center'>
                                <img src={gitLogo} alt='Git Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>Git</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.85 }}
                                className='flex flex-col items-center'>
                                <img src={htmlLogo} alt='HTML Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>HTML</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className='flex flex-col items-center'>
                                <img src={jsLogo} alt='MUI Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                <span className='text-white mt-2 text-xs md:text-sm'>Javascript</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}