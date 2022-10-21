import React from "react";
import Postitem from "../Postitem/Postitem";
import styles from "./Postlist.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Postlist = ({ posts, theme }) => {
  if (posts.length > 0) {
    console.log("posts:", posts[0].id);
  }

  return (
    <>
      {posts.length > 0 && (
        <div className={styles.postlistContainer}>
        <>
          <Link to={`/post/${posts[0].id}`}>
            <div className={styles.firstPostContainer}>


              {posts[0]?.id && (<img  src={'/images/m1.png'} alt={`post${posts[0].id}`} className={styles.firstPostPhoto} />)}
              <div className={styles.postTag}>{posts[0]?.title}</div>
              <div className={styles.postTitle}>{posts[0]?.title}</div>
            </div>
          </Link>


          <Link to={`/post/${posts[1]?.id}`}>
            <div className={styles.secondPostContainer}>

             {posts[1]?.id &&  (<img src={`/images/m${posts[0].id}.png`}  alt={`post${posts[1].id}`} className={styles.secondPostPhoto}/>)}
              <div className={styles.postTag}>{posts[1]?.title}</div>
              <div className={styles.postTitle}>{posts[1]?.title}</div>
            </div>
          </Link>
          <Link to={`/post/${posts[2]?.id}`}>
            <div className={styles.thirdPostContainer}>
            {posts[2]?.id &&  (<img src={`/images/m${posts[0].id}.png`}  alt={`post${posts[2].id}`} className={styles.trirdPostPhoto}/>)}

            <div className={styles.postTag}>{posts[2]?.title}</div>
              <div className={styles.postTitle}>{posts[2]?.title}</div>
            </div>
          </Link>

          <Link to={`/post/${posts[2]?.id}`}>
            <div className={styles.fourthPostContainer}>
            {posts[2]?.id &&  (<img src={`/images/m${posts[0].id}.png`}  alt={`post${posts[2].id}`} className={styles.trirdPostPhoto}/>)}

            <div className={styles.postTag}>{posts[2]?.title}</div>
              <div className={styles.postTitle}>{posts[2]?.title}</div>
            </div>
          </Link>

          <Link to={`/post/${posts[2]?.id}`}>
            <div className={styles.fivthPostContainer}>
            {posts[2]?.id &&  (<img src={`/images/m${posts[0].id}.png`}  alt={`post${posts[2].id}`} className={styles.fivthPostPhoto}/>)}

              <div className={styles.postTag}>{posts[2]?.title}</div>
              <div className={styles.postTitle}>{posts[2]?.title}</div>
            </div>
          </Link>

          <Link to={`/post/${posts[2]?.id}`}>
            <div className={styles.sixthPostContainer}>
            {posts[2]?.id &&  (<img src={`/images/m${posts[0].id}.png`}  alt={`post${posts[2].id}`} className={styles.sixthPostPhoto}/>)}

            <div className={styles.postTag}>{posts[2]?.title}</div>
              <div className={styles.postTitle}>{posts[2]?.title}</div>
            </div>
          </Link>


        </>

         </div>
      )}
      <div className={styles.mobliePostList}>
      {posts.length > 0 && (
          posts.map(post => <Postitem key={post.id} post={post}  theme={theme}/>))}
<Footer/>
      </div>
    </>
  );
};

export default Postlist;
