import React from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1,
    HeroP
} from './HeroElements';

const HeroSection = () => {

    return (
        <HeroContainer className="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hack Club CUCEK</HeroH1>
                <HeroP>
                    Looking for a tech group accepted worldwide from our college?
                    You just got into the right place.
                </HeroP>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
