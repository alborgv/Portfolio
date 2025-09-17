import { useState } from 'react'
import prestamosImg from './assets/prestamos.png'

import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ExpierenceSection from './components/ExpierenceSection'
import Footer from './components/Footer'

import { RiArrowDownWideLine } from "react-icons/ri";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import { ReactTyped } from "react-typed"

import './App.css'

import Navbar from './utils/Navbar'

function App() {

    return (
        <>

            <Navbar />
            <div>
                <HeroSection />
                <AboutSection />
                <ProjectSection />
                <ExpierenceSection />
                <Footer />
            </div>
        </>
    )
}

export default App
