import React, { useState } from 'react';
import Footer from '../components/Footer';
import Resumecard from '../components/Resume';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Resume = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Resumecard />
            <Footer />
        </>
    )
}

export default Resume
