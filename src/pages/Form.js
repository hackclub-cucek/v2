import React, { useEffect } from "react";
import { app } from "../base";

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
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="UserName" />
        <input type="text" name="details" placeholder="Details" />
        <input type="text" name="resume" placeholder="Resume" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;