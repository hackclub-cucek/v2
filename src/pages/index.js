import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection1 from '../components/InfoSection1';
import InfoSection2 from '../components/InfoSection2';
import {homeObjFour ,homeObjThree ,homeObjTwo ,homeObjOne, homeObjFive} from '../Data/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection3 from '../components/InfoSection3';
import InfoSection4 from '../components/InfoSection4';
import InfoSection5 from '../components/InfoSection5';


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
            <InfoSection4 {...homeObjFour}/>
            <InfoSection5 {...homeObjFive}/>
            <Footer />
        </>
    )
}

export default Home
