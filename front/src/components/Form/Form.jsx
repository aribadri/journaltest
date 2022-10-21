import React from 'react';
import Form, { Field } from 'rc-field-form';
import { useState} from 'react'
import axios from 'axios';





const Forma = () => {
    const [data, setData] = useState()
    const [value, setValue] = useState()
    const [serverRes, setServerRes] = useState()
const Input = ({ value = "", ...props }) => <input value={value} {...props} />;
let loginName
function sendData () {
    const headers = {
        'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": 'https://127.0.0.1:3000 '

    
      };
      axios.post(`https://dev.themost.media/admin/login`, {
        login: data.login,
                  password: data.password
      
      }, { headers, withCredentials: 'true', proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 3000,
      
      }, })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        //     console.log(data);
        //    axios({
        //         method: 'POST',
        //         url: 'http://185.251.89.10:3000/admin/login',
        //         data: {
        //           login: data.login,
        //           password: data.password
        //         },
        
        //         withCredentials: true,
        //         credentials: 'include'

                
        
        //       })
        //       .then((response) => {
        //         //   setServerRes(localStorage.setItem('login', response.data[0].name))
        //           console.log(response);
        
        //         })
    }


const getLogout =() => {
    localStorage.clear();

    axios({
        method: 'POST',
        url: 'http://185.251.89.10:3000/admin/logout',
      })
      .then((response) => {

console.log(response);

        })
        setServerRes(null)

    
}


    return (
        <>

        <Form
        onFinish={(values) => {
          setData(values);
        }}
      >
        <Field name="login">
          <Input placeholder="Имя" />
        </Field>
        <Field name="password">
          <Input placeholder="Пароль" />
        </Field>
  
        <button onClick={sendData} >Go</button>
        <button onClick={getLogout}>Exit</button>

      </Form>

      </>

    );
}

export default Forma;
