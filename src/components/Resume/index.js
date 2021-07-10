import React, { useEffect } from 'react';
import { Buttonfollow, Divcontainer, Divcover, Divprofilename, I, Imgprofile, Pabout, SectionContainer } from './ResumeElements';
import {
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { app } from "../../base";

const db = app.firestore();


const Resumecard = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersCollection = await db.collection("users").get();
            setUsers(
                usersCollection.docs.map((doc) => {
                    return doc.data();
                })
            );
        };
        fetchUsers();
    }, []);

    return (
        <SectionContainer>
            {users.map((user) => {
                return (
                    <Divcontainer key={user.django.name}>
                        <Divcover>
                            <Imgprofile src={user.django.avatar} alt={user.name}  />
                        </Divcover>
                        <Divprofilename>{user.django.name}</Divprofilename>
                        <Pabout>{user.django.details}</Pabout>
                        <a href={user.django.resume}><Buttonfollow>Resume</Buttonfollow></a>
                        <div>
                            <a href={user.django.instagram}><I><FaInstagram /></I></a>
                            <a href={user.django.twitter}><I><FaTwitter /></I></a>
                            <a href={user.django.github}><I><FaGithub /></I></a>
                            <a href={user.django.linkedin}><I><FaLinkedin /></I></a>
                        </div>
                        <br />
                    </Divcontainer>
                );
            })}
        </SectionContainer>

    )
}

export default Resumecard
