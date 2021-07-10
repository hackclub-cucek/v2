import React, { useState } from "react";
import { app } from "../base";
import styled from 'styled-components'
import { Link } from "react-router-dom";


const db = app.firestore();

function Form() {
  const [isloading, setloading] = useState(false);

  const [username, setUsername] = useState('');
  const [details, setDetails] = useState('');
  const [resume, setResume] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const [fileUrl, setFileUrl] = React.useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };
  const django = 
  { 
    name: username, 
    avatar: fileUrl, 
    details: details, 
    resume: resume,
    instagram: instagram,
    twitter: twitter,
    github: github,
    linkedin: linkedin
  }
  const onSubmit = async (e) => {
    setloading(true);

    if (!username || !fileUrl || !details || !resume) {
      return;
    }
    await db.collection("users").doc(username).set({
      django
    });

    setUsername('');
    setDetails('');
    setFileUrl('');
    setResume('');
    setInstagram('');
    setTwitter('');
    setGithub('');
    setLinkedin('');
    setloading(false);
  };

  return (
    <>
      <FormBody>
        <Divlogin>
          <Divbootbox style={{ 'min-height': '100vh', 'flex-grow': '1' }} >
            <DivLoginBackGround>
              <DivLoginBackgroundGridContainer>
                <DivBoxRootFlex1 style={{ 'grid-area': 'top / start / 8 / end' }}>
                  <DivBoxRoot2 style={{ 'background-image': 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', 'flex-grow': '1' }}>
                  </DivBoxRoot2>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '4 / 2 / auto / 5' }}>
                  <Div1 style={{ 'flex-grow': '1' }}></Div1>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '6 / start / auto / 2' }}>
                  <Div2 style={{ 'flex-grow': '1' }}></Div2>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '7 / start / auto / 4' }}>
                  <Div3 style={{ 'flex-grow': '1' }}></Div3>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '8 / 4 / auto / 6' }}>
                  <Div4 style={{ 'flex-grow': '1' }}></Div4>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '2 / 15 / auto / end' }}>
                  <Div5 style={{ 'flex-grow': '1' }}></Div5>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '3 / 14 / auto / end' }}>
                  <Div6 style={{ 'flex-grow': '1' }}></Div6>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '4 / 17 / auto / 20' }}>
                  <Div7 style={{ 'flex-grow': '1' }}></Div7>
                </DivBoxRootFlex1>
                <DivBoxRootFlex1 style={{ 'grid-area': '5 / 14 / auto / 17' }}>
                  <Div8 style={{ 'flex-grow': '1' }}></Div8>
                </DivBoxRootFlex1>
              </DivLoginBackgroundGridContainer>
            </DivLoginBackGround>
            <DivBoxRoot style={{ 'flex-grow': '1', 'z-index': '9' }}>
              <DivBoxRootFlex>
                <H1><LinkR to='/'>Resume Form</LinkR></H1>
              </DivBoxRootFlex>
              <div>
                <DivFormbg>
                  <DivFormbgInner>
                    <Span>Submit your Resume</Span>
                    <div>
                      <DivField>
                        <FormLabel for="username">User Name</FormLabel>
                        <FormInput type="text" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="file">Upload Image</FormLabel>
                        <FormInput type="file" name="file" onChange={onFileChange} />
                      </DivField>
                      <DivField>
                        <FormLabel for="details">Details</FormLabel>
                        <FormInput type="text" name="details" 
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="resume">Resume</FormLabel>
                        <FormInput type="text" name="resume" 
                        onChange={(e) => setResume(e.target.value)}
                        value={resume}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="instagram">Instagram</FormLabel>
                        <FormInput type="text" name="instagram" 
                        onChange={(e) => setInstagram(e.target.value)}
                        value={instagram}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="twitter">Twitter</FormLabel>
                        <FormInput type="text" name="twitter" 
                        onChange={(e) => setTwitter(e.target.value)}
                        value={twitter}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="github">GitHub</FormLabel>
                        <FormInput type="text" name="github" 
                        onChange={(e) => setGithub(e.target.value)}
                        value={github}
                        />
                      </DivField>
                      <DivField>
                        <FormLabel for="linkedin">Linkedin</FormLabel>
                        <FormInput type="text" name="linkedin" 
                        onChange={(e) => setLinkedin(e.target.value)}
                        value={linkedin}
                        />
                      </DivField>
                      <DivField1>
                        {!isloading &&
                          <SubmitInput 
                          type="submit" 
                          name="submit" 
                          value="Submit" 
                          onClick={onSubmit}
                          />
                        }
                        {isloading &&
                          <SubmitInput 
                          type="submit" 
                          name="submit" 
                          value="Submiting......" 
                          disabled
                          />
                        }
                      </DivField1>
                    </div>
                  </DivFormbgInner>
                </DivFormbg>
              </div>
            </DivBoxRoot>
          </Divbootbox>
        </Divlogin>
      </FormBody>
    </>
  );
}

const Div8 = styled.div`
  box-sizing: border-box;
  box-shadow: inset 0 0 0 2px #e3e8ee;
  animation: animationRightLeft 2s ease-in-out infinite;
  @keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
animation: animationLeftRight 3s ease-in-out infinite;

`;

const Div7 = styled.div`
  box-sizing: border-box;
  background-color: #e3e8ee;
  animation: animationRightLeft 2s ease-in-out infinite;
  @keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
animation: animationLeftRight 4s ease-in-out infinite;
`;

const Div6 = styled.div`
  box-sizing: border-box;
  background-color: #5469d4;
  animation: animationRightLeft 2s ease-in-out infinite;
  @keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
`;

const Div5 = styled.div`
  box-sizing: border-box;
  background-color: #7fd3ed;
  animation: animationRightLeft 2s ease-in-out infinite;
  @keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
animation: animationLeftRight 4s ease-in-out infinite;

`;

const Div4 = styled.div`
  box-sizing: border-box;
  background-color: #e3e8ee;
  animation: animationLeftRight 2s ease-in-out infinite;
  @keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
animation: animationLeftRight 3s ease-in-out infinite;

`;

const Div3 = styled.div`
  box-sizing: border-box;
  background-color: #5469d4;
  animation: animationLeftRight 2s ease-in-out infinite;
  @keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
`;

const Div2 = styled.div`
  box-sizing: border-box;
  background-color: #212d63;
`;

const Div1 = styled.div`
box-sizing: border-box;
box-shadow: inset 0 0 0 2px #e3e8ee;
animation: animationLeftRight 2s ease-in-out infinite;
@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
animation: animationLeftRight 3s ease-in-out infinite;

`;

const DivBoxRoot2 = styled.div`
  box-sizing: border-box;
`;

const DivBoxRootFlex1 = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const DivLoginBackgroundGridContainer = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)(16) [left-gutter] 1fr [end];
    grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
    -ms-grid-rows: [top] 1fr [top-gutter] (64px)(8) [bottom-gutter] 1fr [bottom];
    grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
    justify-content: center;
    margin: 0 -2%;
    transform: rotate(-12deg) skew(-12deg);
`;

const DivField1 = styled.div`
  padding-bottom: 24px;

`;

const LinkR = styled(Link)`
  color: #5469d4;
  text-decoration: unset;
`;

const SubmitInput = styled.input`
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    background-color: rgb(84, 105, 212);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, 
                rgb(84, 105, 212) 0px 0px 0px 1px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(0, 0, 0, 0) 0px 0px 0px 0px, 
                rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`;

const Span = styled.span`
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
  padding-bottom: 15px;
`;

const H1 = styled.h1`
  letter-spacing: -1px;
`;

const DivBoxRootFlex = styled.div`
  box-sizing: border-box;
  padding-top: 48px;
  padding-bottom: 24px;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
`;

const FormBody = styled.body`
    min-height: 100%;
    background-color: #ffffff;
`;

const Divlogin = styled.div`
    background: #fff;
    display: flex;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`;

const Divbootbox = styled.div`
    box-sizing: border-box;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
`;

const DivLoginBackGround = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #ffffff;
  padding-top: 64px;
`;

const DivFormbg = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

const DivFormbgInner = styled.div`
  padding: 48px;
`;

const DivBoxRoot = styled.div`
  box-sizing: border-box;
  padding-top: 24px;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const FormInput = styled.input`
 font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  display: block;
`;

const DivField = styled.div`
  padding-bottom: 24px;
`;

export default Form;