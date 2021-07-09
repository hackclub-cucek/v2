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
                    <Divcontainer key={user.name}>
                        <Divcover>
                            <Imgprofile src={user.avatar} alt={user.name}  />
                        </Divcover>
                        <Divprofilename>{user.name}</Divprofilename>
                        <Pabout>{user.details}</Pabout>
                        <a src={user.resume}><Buttonfollow>Resume</Buttonfollow></a>
                        <div>
                            <I><FaInstagram /></I>
                            <I><FaTwitter /></I>
                            <I><FaGithub /></I>
                            <I><FaLinkedin /></I>
                        </div>
                        <br />
                    </Divcontainer>
                );
            })}
        </SectionContainer>

    )
}

export default Resumecard
