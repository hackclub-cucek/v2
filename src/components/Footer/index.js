import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { 
    FooterContainer, 
    FooterLink, 
    FooterLinkItems, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkTitle, 
    FooterWrap, 
    SocialIconLink, 
    SocialLogo, 
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements';
import { 
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaYoutube,
    FaLinkedin
 } from 'react-icons/fa';

 const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/gallery">How it works</FooterLink>
                                    <FooterLink to="/gallery">contact us</FooterLink>
                                    <FooterLink to="/gallery">join us</FooterLink>
                                    <FooterLink to="/gallery">Terms of Services</FooterLink>      
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/gallery">How it works</FooterLink>
                                    <FooterLink to="/gallery">contact us</FooterLink>
                                    <FooterLink to="/gallery">join us</FooterLink>
                                    <FooterLink to="/gallery">Terms of Services</FooterLink>      
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/gallery">How it works</FooterLink>
                                    <FooterLink to="/gallery">contact us</FooterLink>
                                    <FooterLink to="/gallery">join us</FooterLink>
                                    <FooterLink to="/gallery">Terms of Services</FooterLink>      
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/gallery">How it works</FooterLink>
                                    <FooterLink to="/gallery">contact us</FooterLink>
                                    <FooterLink to="/gallery">join us</FooterLink>
                                    <FooterLink to="/gallery">Terms of Services</FooterLink>      
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                j4ck
                            </SocialLogo>
                            <WebsiteRights>Hack Club CUCEK ©️ {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                            <SocialIconLink href="https://www.instagram.com/hackclubcucek/" target="_blank" rel="noreferrer"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/hackclubcucek" target="_blank" rel="noreferrer"
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UClkbYSxkA7kATU6JQx00d3g/videos" target="_blank" rel="noreferrer"
                            aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/hackclub-cucek" target="_blank" rel="noreferrer"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/company/hackclubcucek/" target="_blank" rel="noreferrer"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer> 
        </>
    )
}

export default Footer
