import { useState } from 'react'
import pythonLogo from './assets/python-logo.png'
import jsLogo from './assets/js-logo.png'
import djangoLogo from './assets/django-logo.png'
import reactLogo from './assets/react-logo.png'
import tailwindLogo from './assets/tailwind-logo.png'
import githubLogo from './assets/github-logo.png'
import gitLogo from './assets/git-logo.png'
import htmlLogo from './assets/html-logo.png'
import viteLogo from './assets/vite-logo.png'
import muiLogo from './assets/mui-logo.png'
import prestamosImg from './assets/prestamos.png'

import hojaDeVida from './assets/HOJA DE VIDA AA.pdf'

import { RiArrowDownWideLine } from "react-icons/ri";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import { ReactTyped } from "react-typed"

import './App.css'

import Navbar from './utils/Navbar'

function App() {

    return (
        <>
            <Navbar />
            {/* <div>
                <section id="inicio" className='flex flex-col items-center bg-gradient-to-r from-blue-start to-blue-end p-6 md:p-24 w-full'>
                    <div className='flex flex-col items-center mt-20 md:mt-40 mb-24 md:mb-48 w-full md:w-3/4 lg:w-2/3 xl:1/2'> */}
            <div>
                <section id="inicio" className='flex flex-col items-center bg-gradient-to-r from-blue-start to-blue-end pt-44 pb-72 md:p-20 w-full'>
                    <div className='flex flex-col items-center mt-40 mb-48 w-full md:w-4/5 lg:w-2/3 xl:1/2'>
                        <ReactTyped className='font-lato text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white'
                            strings={["¡HOLA, SOY ABEL ALBOR!"]} 
                            typeSpeed={60} />
                        <span className='font-bold text-sm md:text-3xl font-lato items-center text-blue-400'>DESARROLLADOR FULLSTACK</span>
      
                        <Button
                            size="small"
                            sx={{
                                marginTop: 2,
                                color: '#f9fafb',
                                border: '1px solid #fff',   
                                backgroundColor: '#60a5fa', 
                                '&:hover': {
                                    backgroundColor: '#3b79db',
                                },
                            }}
                            href={hojaDeVida}
                            download="HOJA DE VIDA AA.pdf"
                            >

                            Descargar CV
                        </Button>
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
                                0% {
                                    transform: translateY(0);
                                }
                                50% {
                                    transform: translateY(-10px);
                                }
                                100% {
                                    transform: translateY(0);
                                }
                            }
                        `}</style>
            </section >


                <section id="info" className='bg-blue-mid p-6 md:p-24'>
                    <div className="max-w-2xl flex flex-col mx-auto">

                        <span className='text-white font-lato text-2xl mt-4 md:text-3xl font-bold'>Sobre mí.</span>
                        <hr className='mt-2 mb-4'/>
                        <div className='text-white font-lato flex flex-col'>

                            <span className='mb-2'>
                                Programador Junior especializado en desarrollo de software con Python. Tengo experiencia en desarrollo backend con Django y en la creación de API RESTful con Django Rest Framework. En frontend, manejo React y diseño con TailwindCSS y MaterialUI, lo que me permite crear interfaces de usuario interactivas y responsivas. También tengo sólidos conocimientos en gestión y optimización de bases de datos SQL.    
                            </span>
                            <span>
                            Soy capaz de diagnosticar y resolver problemas de software, y tengo habilidad para documentar y comunicar procesos técnicos, colaborando efectivamente con equipos de desarrollo para mejorar aplicaciones y sistemas informáticos.
                            </span>
                        </div>

                        <div className='mt-6'>
                            <div className='mb-12'>
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
                            </div>

                            <div>
                                <span className='text-white font-lato font-bold text-xl'>Habilidades</span>
                                <div className='mt-8 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6'>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={pythonLogo} alt='Python Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>Python</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={jsLogo} alt='JavaScript Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>JavaScript</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={djangoLogo} alt='Django Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>Django</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={reactLogo} alt='React Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>React</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={tailwindLogo} alt='Tailwind Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>Tailwind</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={githubLogo} alt='GitHub Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>GitHub</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={gitLogo} alt='Git Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>Git</span>
                                    </div>
                                    
                                    <div className='flex flex-col items-center'>
                                        <img src={htmlLogo} alt='HTML Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>HTML</span>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <img src={muiLogo} alt='MUI Logo' className='w-8 h-8 md:w-12 md:h-12' />
                                        <span className='text-white mt-2 text-xs md:text-sm'>Material UI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='proyectos' className='bg-gradient-to-r from-blue-start to-blue-end p-6 md:p-24'>
                    <div>
                        <div>
                            <span className='text-white text-2xl font-lato font-bold flex justify-center'>Mis proyectos</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
                            
                            <div className='transition transform hover:scale-105 duration-450 mb-10 md:mb-0 md:mr-10'>
                                <Card sx={{ 
                                    maxWidth: 345, 
                                    backgroundColor: '#1f2937',
                                    color: '#f9fafb',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <CardMedia
                                        component="img"
                                        alt="Prestamos Fullstack"
                                        height="140"
                                        image={prestamosImg}
                                        sx={{ maxHeight: 160, borderTopLeftRadius: '8px', borderTopRightRadius: '12px' }}
                                    />
                                    <hr className='border-blue-400'/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='text-blue-500'>
                                            Prestamos Fullstack
                                        </Typography>
                                        <Typography variant="body2">
                                            Aplicación que simplifica la administración de servicios y beneficios, facilitando la planificación, seguimiento y evaluación de las prestaciones. Está diseñada para ofrecer una gestión eficiente y organizada.
                                        </Typography>
                                    </CardContent>
                                    <CardActions className='mb-20'>
                                        
                                    <Button
                                        size="small"
                                        sx={{ marginLeft: 0.2, color: '#60a5fa' }}
                                        href="https://prestaciones-frontend.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ir al sitio
                                    </Button>
                                    <Button
                                        size="small"
                                        sx={{ color: '#60a5fa' }}
                                        href="https://github.com/alborgv/PrestamosFullstack"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ir a GitHub
                                    </Button>
                                    </CardActions>
                                    <div className="absolute bottom-0 left-0 w-full bg-blue-400 p-4 flex justify-around items-center">
                                        <img src={pythonLogo} alt='Python Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                        <img src={djangoLogo} alt='Django Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                        <img src={reactLogo} alt='React Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                        <img src={tailwindLogo} alt='Tailwind Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                        <img src={viteLogo} alt='Vite Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                        <img src={muiLogo} alt='Vite Logo' className='w-8 h-8 transition transform hover:scale-125 duration-450' />
                                    </div>
                                </Card>
                            </div>
{/*                             
                            <div className='ml-10'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="GAFA"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        GAFA
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section id='experiencia' className='bg-blue-mid p-6 md:p-24'>
                    <div className="max-w-2xl flex flex-col mx-auto">
                        <span className='text-white font-lato text-xl md:text-2xl font-bold'>Experiencia laboral.</span>
                        <hr className='mt-2 mb-4'/>
                        <span className='text-gray-300 font-lato mt-2 text-sm md:text-md '>Corporación Elyon Yireh de Barranquilla | Junio 2023 - Julio 2024</span>
                        <span className='text-gray-300 font-lato font-bold text-sm md:text-md'>Programador junior</span>
                    
                        <ul className='text-gray-300 font-lato mt-4 list-disc list-inside text-sm md:text-md'>
                            <li>Desarrollo de una aplicación web full-stack, abarcando el backend con Django Rest Framework y el frontend con ReactJS, para la gestión de datos estudiantiles.</li>
                            <li>Diseño moderno e interactivo para el frontend con TailwindCSS.</li>
                            <li>Creación de herramientas adicionales con Python para gestionar las actualizaciones de la aplicación.</li>
                            <li>Manejo de bases de datos utilizando MySQL y Excel.</li>
                        </ul>
                    </div>
                </section>
                <footer className='bg-gradient-to-r from-blue-start to-blue-end p-6 text-center text-white'>
                    <div className='max-w-xl mx-auto'>
                        <p className='text-sm'>© 2024 Abel Albor. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
