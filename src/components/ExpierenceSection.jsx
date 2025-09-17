import { motion } from "motion/react"

export default function ExperienceSection() {
    return (
        <section id='experiencia' className='bg-blue-mid p-6 md:p-24'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl flex flex-col mx-auto">
                <span className='text-white font-lato text-xl md:text-2xl font-bold'>
                    Experiencia laboral.
                </span>
                <hr className='mt-2'/>
                
                <span className='text-gray-300 font-lato mt-2 text-sm md:text-md'>
                    Corporación Elyon Yireh de Barranquilla | Junio 2023 - Julio 2024
                </span>
                <span className='text-gray-300 font-lato font-bold text-sm md:text-md'>
                    Programador junior
                </span>
            
                <ul className='text-gray-300 font-lato mt-4 list-disc list-inside text-sm md:text-md'>
                    <li>Desarrollo de una aplicación web full-stack, abarcando el backend con Django Rest Framework y el frontend con ReactJS, para la gestión de datos estudiantiles.</li>
                    <li>Diseño moderno e interactivo para el frontend con TailwindCSS.</li>
                    <li>Creación de herramientas adicionales con Python para gestionar las actualizaciones de la aplicación.</li>
                    <li>Manejo de bases de datos utilizando MySQL y Excel.</li>
                </ul>
            </motion.div>
        </section>
    )
}