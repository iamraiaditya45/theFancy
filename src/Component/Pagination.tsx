// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// export default function CustomIcons() {
//   return (
//     <Stack spacing={10}>
//       <Pagination
//         count={3}
//         renderItem={(item) => (
//           <PaginationItem
//             components={{ previous: ArrowBackIcon }}
//             {...item}
//           />
//         )}
//       />
//     </Stack>
//   );
// }

import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  },
  pre: {
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    // alignItems: "center",
    height: "38px",
    width: "92px",
    borderRadius: "50px",
    // marginRight: "5px",
    // marginTop: "-200px",
    border: "none",
    // marginLeft: "800px",
  },
  next: {
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    height: "38px",
    width: "92px",
    borderRadius: "50px",
    // marginLeft: "5px",
    // marginTop: "-200px",
    border: "none",
  },
}));

function Pagination({ showPerPage, onPaginationChange }: any) {
  const [counter, setCounter] = useState(1);
  // const onButtonClick = (type: any) => {
  //   if (type === "prev") {
  //     if (counter === 1) {
  //       setCounter(1);
  //     } else {
  //       setCounter(counter - 1);
  //     }
  //   }
  // };
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <button className={classes.pre} onClick={() => setCounter(counter - 1)}>
          Previous
        </button>
        <button
          className={classes.next}
          onClick={() => setCounter(counter + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;


