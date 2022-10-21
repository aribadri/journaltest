import { style } from "@mui/system";
import React from "react";
import Forma from "../../components/Form/Form";
import styles from "./Admin.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";


const Admin = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  console.log(image, title);

  console.log(value);

    async function sendPost() {
        const headers = {
          'Content-Type': 'application/json',
        };
        axios.post(`https://dev.themost.media/post`, {
            title: title,
            content: value,
            category: {
                categorys: ""
            },
            img_url: image
        
        }, { headers,      withCredentials: true,
            credentials: 'include',})
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
      }
      
    // axios({
    //     credentials: 'include',
    //     method: 'post',
    //     url: 'http://185.251.89.10:3000/post',
    //     data: {
    //         title: title,
    //         content: value,
    //         category: {
    //             categorys: ""
    //         },
    //         img_url: image
    //     }
    //   })
    //   .then((response) => {

    //       console.log(response);

    //     })
  
  return (
    <div className={styles.adminContainer}>
      <Forma />
      <button type="button" className={styles.button} onClick={sendPost}>Отправить</button>
      <label>Название поста</label>
      <input type="text" className={styles.img} onChange={e=>setTitle(e.target.value)} />
      <label>Ссылка на изображение поста</label>
      <input type="text" className={styles.title} onChange={e=>setImage(e.target.value)}/>
      <label>Контент</label>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default Admin;
