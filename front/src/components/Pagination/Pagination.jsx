import React from "react";
import styles from "./Pagination.module.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./pagination.css";
import {useState} from 'react';

import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Paginat() {
    const [page, setPage] = useState(1)

        console.log(page);

  // const theme = createTheme({
  //     palette: {
  //       background: {
  //         main: '#fff',
  //       },
  //       text: {
  //         primary: '#173A5E',
  //         secondary: '#46505A',
  //       },
  //       action: {
  //         active: '#001E3C',
  //       },
  //       success: {
  //         dark: '#009688',
  //       },
  //     },
  //   });

  return (
    <div className={styles.paginationContainer}>
      {/* <ThemeProvider theme={theme}> */}
      {/* <Stack spacing={2}> */}
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem className='item'
          color={'red'}
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            onMouseDown={()=>{setPage(item.page)}}
          />
        )}
      />
      {/* </ThemeProvider> */}

      <Stack/>
    </div>
  );
}
