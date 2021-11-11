import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';
import Footer from './components/Footer';
import ImageUpload from './ImageUpload';
import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Input } from "@mui/material";

function App() {
  
  const [posts, setPosts] = useState([]);
  // const [open, setOpen] = useState(false);
  const [opensignin, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);


   // Modal styling :
   const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  
  useEffect(() => {
    // Responding on every auth change :
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //If user  login :
        console.log(authUser);
        setUser(authUser);
      } else {
        //If User log out or user not available:
        setUser(null);
      }
    });
    return () => {
      // Cleanup before performing another task :
      unsubscribe();
    };
    // dependencies
  }, []);

  useEffect(() => {
    // collecting data from database:
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      )
    );
  }, []);

  // LogIn logic :
  const SignIn = (event) => {
    event.preventDefault();
    // signIn with auth module :
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  };
  return (
    <div className="App">
      <Modal
        className="app__modal"
        open={opensignin}
        onClose={() => setOpenSignIn(false)}
      >
        <Box sx={style}>
          <div id="modal-modal-title" variant="h6" component="h2">
            <form className="app__signup">
              <Input
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                onClick={SignIn}
                style={{
                  backgroundColor: "lightpink",
                  marginTop: "20px",
                  color: "#000",
                }}
              >
                logIn
              </Button>
            </form>
          </div>
        </Box>
      </Modal>


      <Header setOpenSignIn={setOpenSignIn}/>
      <ImageUpload />
      <About />
      <Skill />
      <Project posts={posts}/>
      <Footer />
    </div>
  );
}

export default App;
