import ProjectCard from './ProjectCard'
import prestamosImg from '../assets/prestamos.png'
import easywingsImg from '../assets/easywings.png'
import wmerchImg from '../assets/wmerch.png'
import { motion } from "motion/react"

const projectsData = [
    
    {
        title: "WMerch Demo",
        description: "Tienda demo de la WMerch, con diseño alterno y con integración de Stripe para pagos. (No es un sitio oficial).",
        image: wmerchImg,
        siteUrl: "https://wmerch-project.up.railway.app/",
        githubUrl: "https://github.com/alborgv/wmerch-django-react-typescript",
        technologies: ['python', 'django', 'ts', 'react', 'tailwind', 'stripe']
    },
    {
        title: "Easywings",
        description: "Venta de curso de trading con diseño moderno y simulación de pasarela de pagos. (No es un sitio oficial).",
        image: easywingsImg,
        siteUrl: "https://easywings.up.railway.app/",
        githubUrl: "https://github.com/alborgv/trading-course-fullstack",
        technologies: ['python', 'django', 'ts', 'react', 'tailwind', 'stripe']
    },
    {
        title: "Prestamos Fullstack",
        description: "Aplicación administrativa sobre el manejo de préstamos, facilitando la planificación, seguimiento y evaluación de las prestaciones.",
        image: prestamosImg,
        siteUrl: "https://prestaciones-frontend.vercel.app/",
        githubUrl: "https://github.com/alborgv/PrestamosFullstack",
        technologies: ['python', 'django', 'js', 'react', 'tailwind', 'mui']
    }
]

const ProjectsSection = () => {
    return (
        <section id='proyectos' className='bg-gradient-to-r from-blue-start to-blue-end p-6 md:p-24'>
            <div>
                <div>
                    <span className='text-white text-2xl font-lato font-bold flex justify-center'>
                        Mis proyectos
                    </span>
                </div>
                
                <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
                    {projectsData.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: index + 1 * -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: index * 0.3 }}
                        >
                            <ProjectCard key={index} project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection