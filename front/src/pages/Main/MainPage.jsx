import React from "react";
import styles from "./MainPage.module.css";
import Footer from "../../components/Footer/Footer";
import Postlist from "../../components/Postlist/Postlist";
import { useState, useEffect } from "react";
import axios from "axios";
import Postitem from "../../components/Postitem/Postitem";
import useLocalStorage from "use-local-storage";
import Paginat from "../../components/Pagination/Pagination";

const MainPage = ({ theme, setTheme }) => {
  const [posts, setPosts] = useState([]);
  const [filtredPosts, setFiltredPosts] = useState(posts);
  const [mode, setMode] = useState("White mode");

  useEffect(() => {
    const getPosts = async () => {
      const data = await axios.get("https://dev.themost.media/posts");
      console.log(data);
      setFiltredPosts(data.data);
      setPosts(data);
    };
    getPosts();
  }, []);
  console.log(posts);
  const getFiltred = (type) => {
    if (posts) {
      if (type === "all") {
        setFiltredPosts(posts.data);
      } else {
        let newPosts = [...posts.data].filter(
          (post) => post.id === 2 || post.id === 1
        );
        setFiltredPosts(newPosts);
      }
    }
  };

  let isFirstModeChange = true;
  const changeMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    // isFirstModeChange ? setMode('White mode') : setMode('Black mode')
    // isFirstModeChange = !isFirstModeChange
    setTheme(newTheme);
  };
  return (
    <>
      <div className={styles.container} data-theme={theme}>
        <div className={styles.vector1}></div>
        <div className={styles.vector2}></div>
        <div className={styles.vector3}></div>
        <div className={styles.vector4}></div>

        <div className={styles.titleSection}>
          <div className={styles.title}>Журнал</div>
          <div
            className={
              mode === "White mode"
                ? styles.orangeCircle
                : styles.orangeCircleWhiteMode
            }
          ></div>
          <div className={styles.arrowDown}></div>
          <div className={styles.fbLogo}></div>
          <div className={styles.instLogo}></div>
          <div className={styles.footerTextLogo}>TMMG, 2021</div>
          <div className={styles.whiteMode} onClick={() => changeMode()}>
            {theme === "light" ? "Dark mode" : "White mode"}
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.categoryContainer}>
            <div className={styles.category} onClick={() => getFiltred("all")}>
              Все
            </div>
            <div className={styles.category} onClick={() => getFiltred("dm")}>
              Digital Marketing
            </div>
            <div
              className={styles.category}
              onClick={() => getFiltred("brand")}
            >
              Branding
            </div>
            <div className={styles.category} onClick={() => getFiltred("wd")}>
              Web Design
            </div>
            <div className={styles.category} onClick={() => getFiltred("mark")}>
              Marketing{" "}
            </div>
            <div className={styles.category} onClick={() => getFiltred("cons")}>
              Consulting
            </div>
            <div className={styles.category} onClick={() => getFiltred("app")}>
              Apps
            </div>
            <div
              className={styles.category}
              onClick={() => getFiltred("creat")}
            >
              Creative
            </div>
            <div className={styles.category} onClick={() => getFiltred("pr")}>
              PR/Events
            </div>
            <div className={styles.category} onClick={() => getFiltred("dev")}>
              Development
            </div>
            <div className={styles.category} onClick={() => getFiltred("ar")}>
              AR
            </div>
          </div>

          {posts && <Postlist posts={filtredPosts} theme={theme} />}
          <Paginat />
          <Footer theme={theme} />
        </div>
      </div>
      <div className={styles.mobileContainer} data-theme={theme}>
        <div className={styles.mobileTitleSection}>
          <div className={styles.circleContainer}></div>

          <div className={styles.mobileTitle}>Журнал</div>
          <div className={styles.mobileOrangeCircle}></div>
          <div className={styles.mobileArrowDown}></div>

          <div
            className={styles.mobileWhiteMode}
            onClick={() => changeMode()}
          ></div>
        </div>
        <div className={styles.mobileContentSection}>
          <div className={styles.slider}>
            <div className={styles.mobileCategoryContainer}>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("all")}
              >
                Все
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("dm")}
              >
                Digital Marketing
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("brand")}
              >
                Branding
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("wd")}
              >
                Web Design
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("mark")}
              >
                Marketing{" "}
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("cons")}
              >
                Consulting
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("app")}
              >
                Apps
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("creat")}
              >
                Creative
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("pr")}
              >
                PR/Events
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("dev")}
              >
                Development
              </div>
              <div
                className={styles.mobileCategory}
                onClick={() => getFiltred("ar")}
              >
                AR
              </div>
            </div>
          </div>

          {posts && <Postlist posts={filtredPosts} />}
        </div>
      </div>
    </>
  );
};

export default MainPage;
