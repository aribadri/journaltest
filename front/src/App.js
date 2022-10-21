import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/Main/MainPage";
import SingelPostpage from "./pages/SinglePost/SingelpostPage";
import Admin from "./pages/Admin/Admin";
import { useState, useEffect } from "react";
import axios from "axios"
import Footer from "./components/Footer/Footer";
import useLocalStorage from 'use-local-storage'
import Modal from "./components/Modal/Modal"




function App() {
  // const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  
  //     useEffect(()=>{
  //       const getPosts = async () => {
          
  //         const data = await axios.get('http://185.251.89.10:3000/posts')
  //     console.log(data);
  
  //         setPosts(data)
  //       }
  //       getPosts()
  //     }, [setPosts])





  return (
    <div className="App">
        {modal ? (<Modal setModal={setModal} />) : (
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme}  modal={modal} setModal={setModal}/>}>
          <Route index element={<MainPage theme={theme} setTheme={setTheme} />} />
          <Route path="/post/:id" element={<SingelPostpage/>}/>
        </Route>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
       )}
    </div>
  );
}

export default App;
