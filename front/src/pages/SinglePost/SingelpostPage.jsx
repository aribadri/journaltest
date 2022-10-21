import React from 'react';
import Footer from '../../components/Footer/Footer';
import Cosmic from 'cosmicjs'
import {useState, useEffect} from 'react'
import styles from './SinglePost.module.css' 
// import { htmlToJsx } from "html-to-jsx-transform";
import HTML2JSX from "convert-html-to-jsx"




const SingelPostpage = () => {
    const [page, setPage] = useState()
    const api = Cosmic();
    const bucket = api.bucket({
        slug: 'tmmg-tmmg',
  read_key: '6nP20X2gTL8CrEY2lNZxSg1c2UEMLubGSNX3Cz9SBXgJGCbDqT'
      });
    //   useEffect(() => {
         
          const app = async () => {
            const data = await bucket.objects.find({
                type: 'pages',
                slug: 'arian'
              })
              .props('slug,title,content');
              const posts = data.objects

              setPage(posts[0].content)
            }
            app()
        // }, []);

console.log(page);

    return (
        <div className={styles.container}>
            {page &&
<HTML2JSX className={styles.jsx} innerHTML={page} />
            }
{/* <Footer /> */}

        </div>
    );
}

export default SingelPostpage;
