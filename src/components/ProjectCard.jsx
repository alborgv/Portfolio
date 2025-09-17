import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import pythonLogo from '../assets/python-logo.png'
import djangoLogo from '../assets/django-logo.png'
import jsLogo from '../assets/js-logo.png'
import tsLogo from '../assets/ts-logo.png'
import reactLogo from '../assets/react-logo.png'
import tailwindLogo from '../assets/tailwind-logo.png'
import stripeLogo from '../assets/stripe-logo.jpg'
import muiLogo from '../assets/mui-logo.png'

const techLogos = {
    python: pythonLogo,
    django: djangoLogo,
    js: jsLogo,
    ts: tsLogo,
    react: reactLogo,
    tailwind: tailwindLogo,
    stripe: stripeLogo,
    mui: muiLogo
}

const ProjectCard = ({ project }) => {
    const { title, description, image, siteUrl, githubUrl, technologies } = project

    return (
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
                    alt={title}
                    height="140"
                    image={image}
                    sx={{ maxHeight: 160, borderTopLeftRadius: '8px', borderTopRightRadius: '12px' }}
                />
                <hr className='border-blue-400' />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='text-blue-500'>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions className='mb-20'>
                    <Button
                        size="small"
                        sx={{ marginLeft: 0.2, color: '#60a5fa' }}
                        href={siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ir al sitio
                    </Button>
                    <Button
                        size="small"
                        sx={{ color: '#60a5fa' }}
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ir a GitHub
                    </Button>
                </CardActions>

                <div className="absolute bottom-0 left-0 w-full bg-blue-400 p-4 flex justify-around items-center">
                    {technologies.map((tech, index) => (
                        <img
                            key={index}
                            src={techLogos[tech]}
                            alt={`${tech} Logo`}
                            className='w-8 h-8 transition transform hover:scale-125 duration-450'
                        />
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default ProjectCard