import React from "react";
import styles from "./Postitem.module.css";
import { Outlet, Link } from "react-router-dom";

export default function Postitem({ post, index, theme }) {
  console.log(post);
  return (
    <Link className={styles.mobileLinks} to={`/post/${post.id}`}>
      <div className={styles.mobilePostitem} data-theme={theme}>
        <img
          src={"/images/m1.png"}
          className={styles.postPicture}
          alt={"picture"}
        />

        <div className={styles.postTag}>{post.title}</div>
        <div className={styles.postTitle}>{post.title}</div>
      </div>
    </Link>
  );
}
