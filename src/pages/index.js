import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection1 from '../components/InfoSection1';
import InfoSection2 from '../components/InfoSection2';
import {homeObjOne} from '../Data/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjTwo } from '../Data/Data';
import InfoSection3 from '../components/InfoSection3';
import { homeObjThree } from '../Data/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection1 {...homeObjOne}/>
            <InfoSection2 {...homeObjTwo}/>
            <InfoSection3 {...homeObjThree}/>
            {/* <InfoSection {...homeObjFour}/> */}
            <Footer />
        </>
    )
}

export default Home
