import React, { useEffect } from "react";
import { app } from "../base";
import styled from 'styled-components'


const db = app.firestore();

function Form() {
  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const details = e.target.details.value;
    const resume = e.target.resume.value;
    if (!username || !fileUrl || !details || !resume) {
      return;
    }
    await db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
      details: details,
      resume: resume,
    });
  };

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
    <>
      {/* <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="UserName" />
        <input type="text" name="details" placeholder="Details" />
        <input type="text" name="resume" placeholder="Resume" />
        <button>Submit</button>
      </form> */}
      {/* <FormBody>
        <Divlogin>
          <Divbootbox style={{'min-height':'100vh', 'flex-grow':'1' }} >
            <div class="loginbackground box-background--white padding-top--64">
              <div class="loginbackground-gridContainer">
                <div class="box-root flex-flex" styles="grid-area: top / start / 8 / end;">
                  <div class="box-root" styles="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
                  </div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 4 / 2 / auto / 5;">
                  <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 6 / start / auto / 2;">
                  <div class="box-root box-background--blue800" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 7 / start / auto / 4;">
                  <div class="box-root box-background--blue animationLeftRight" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 8 / 4 / auto / 6;">
                  <div class="box-root box-background--gray100 animationLeftRight tans3s" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 2 / 15 / auto / end;">
                  <div class="box-root box-background--cyan200 animationRightLeft tans4s" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 3 / 14 / auto / end;">
                  <div class="box-root box-background--blue animationRightLeft" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 4 / 17 / auto / 20;">
                  <div class="box-root box-background--gray100 animationRightLeft tans4s" styles="flex-grow: 1;"></div>
                </div>
                <div class="box-root flex-flex" styles="grid-area: 5 / 14 / auto / 17;">
                  <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" styles="flex-grow: 1;"></div>
                </div>
              </div>
            </div>
            <div class="box-root padding-top--24 flex-flex flex-direction--column" styles="flex-grow: 1; z-index: 9;">
              <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                <h1><a href="http://blogs.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
              </div>
              <div class="formbg-outer">
                <div class="formbg">
                  <div class="formbg-inner padding-horizontal--48">
                    <span class="padding-bottom--15">Sign in to your account</span> */}
      <form id="stripe-login" onSubmit={onSubmit}>
        <DivField>
          <FormLabel for="username">User Name</FormLabel>
          <FormInput type="text" name="username" />
        </DivField>
        <DivField>
          <FormLabel for="file">Upload Image</FormLabel>
          <FormInput type="file" name="file" onChange={onFileChange} />
        </DivField>
        <DivField>
          <FormLabel for="details">Details</FormLabel>
          <FormInput type="text" name="details" />
        </DivField>
        <DivField>
          <FormLabel for="resume">Resume</FormLabel>
          <FormInput type="text" name="resume" />
        </DivField>
        <DivField>
          <input type="submit" name="submit" value="Continue" />
        </DivField>
      </form>
      {/* </div>
                </div>
              </div>
            </div>
          </Divbootbox>
        </Divlogin>
      </FormBody> */}
    </>
  );
}

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