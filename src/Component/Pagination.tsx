import classes from "*.module.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  pre: {
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    // alignItems: "center",
    height: "42px",
    width: "92px",
    borderRadius: "50px",
    marginRight: "5px",
    marginTop: "-200px",
    border: "none",
    marginLeft: "800px",
  },
  next: {
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    height: "42px",
    width: "92px",
    borderRadius: "50px",
    marginLeft: "5px",
    marginTop: "-200px",
    border: "none",
  },
}));

function Pagination({ showPerPage, onPaginationChange }: any) {
  const [counter, setCounter] = useState(1);
  const onButtonClick = (type: any) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    }
  };
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const classes = useStyles();
  return (
    <>
      <div className="btns">
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
