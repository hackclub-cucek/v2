import React from 'react';
import { Buttonfollow, Buttonmsg, Divcontainer, Divcover, Divprofilename, I, Imgprofile, Pabout } from './ResumeElements';
import {
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';


const Resumecard = () => {

    return (
        <Divcontainer>
            <Divcover>
                <Imgprofile src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
            </Divcover>
            <Divprofilename>Beni Smith</Divprofilename>
            <Pabout>User Interface Designer and front-end developer
            </Pabout>
            <Buttonmsg>Message</Buttonmsg>
            <Buttonfollow>Following</Buttonfollow>
            <div>
                <I><FaInstagram /></I>
                <I><FaTwitter /></I>
                <I><FaGithub /></I>
                <I><FaLinkedin /></I>
            </div>
        </Divcontainer>
    )
}

export default Resumecard
