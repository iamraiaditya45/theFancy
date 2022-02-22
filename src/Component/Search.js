import React from "react";
import Data from "../data1.json";
import { makeStyles } from "@mui/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Appbar from "./Appbar1";
import Appba2 from "./Appbar2";
import Footer from "./Footer";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";
import Just from "./JustIn";
import Pagination from "./Pagination";
const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "100px",
  },
  card: {
    width: 500,
    height: 600,
  },
  cardDiv: {
    width: 500,
    height: 450,
    marginTop: "150px",
    marginLeft: "30px",
  },
  imgStyle: {
    display: "block",
    height: "450px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "-200px",
    position: "relative",
    width: "400px",
  },
  secondLine: {
    "&.css-1uwgr7b-MuiTypography-root": {
      fontWeight: "bold",
    },
  },
  btn: {
    float: "left",
    width: "120px",
    borderRadius: "20px",
    border: "1px solid grey",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    height: "48px",
    backgroundColor: "white",
    fontWeight: "bold",
    padding: "13px",
  },
  top: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  input: {
    position: "absolute",
    top: "170px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1800,
    height: 150,
    border: "none",
    boxShadow: "1px 1px 1px 1px #DCDCDC	",
    paddingLeft: "50px",
    fontSize: "30px",
    outline: "none",
  },
  box: {
    width: "1900px",
    backgroundColor: "red",
  },
  searchBtn: {
    padding: "12px",
    fontSize: "13px",
    textTransform: "uppercase",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    height: "50px",
    width: "92px",
    borderRadius: " 0px 50px 50px 0px",
    marginLeft: "-5px",
    marginTop: "25px",
    border: "1 px grey",
    overflow: "none",
  },
  inputSearchPage: {
    height: "44px",
    fontSize: "20px",
    border: "2px solid grey",
    marginTop: "25px",
    marginLeft: "60px",
    overflow: "auto",
  },
  searchDiv: {
    display: "flex",
    marginTop: "10px",
    marginBottom: "50px",
    marginLeft: "60px",
  },
  searchText: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "30px",
    marginLeft: "150px",
    marginBottom: "50px",
    "&.css-ahj2mt-MuiTypography-root": {
      fontSize: "35px",
      fontWeight: "bold",
      marginTop: "30px",
      marginLeft: "120px",
      width: "300px",
    },
  },
  hr: {
    marginBottom: "50px",
    width: "1600px",
  },
}));

const Search = () => {
  const [filter, setFilter] = React.useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = Data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showPerPage, setShowPerPage] = React.useState(3);

  const [pagination, setPagination] = React.useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
    console.log(start, end);
    console.log(dataSearch);
  };
  const classes = useStyles();
  return (
    <>
      <Appbar />
      <Appba2
      filter={filter}
      dataSearch={dataSearch}
      />
      <div>
        <Typography className={classes.searchText}>Search</Typography>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <input
            className={classes.input}
            type="text"
            placeholder="Search"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </Modal>
        <div className={classes.searchDiv}>
          <input
            className={classes.inputSearchPage}
            type="text"
            placeholder="Search"
            value={filter}
            onChange={searchText.bind(this)}
          />
          <button className={classes.searchBtn}>
            <SearchIcon onClick={handleOpen}>Open modal</SearchIcon>
          </button>
        </div>
      </div>
      <hr className={classes.hr}></hr>

      {filter === "" ? (
        <Just />
      ) : (
        <div>
          <div>
            {dataSearch.length === 0 ? (
              <h1 className={classes.searchText}>No Item found...</h1>
            ) : (
              <h1 className={classes.searchText}>
                {dataSearch.length} Results
              </h1>
            )}
          </div>
          <div className={classes.cardContainer}>
            {dataSearch
              .slice(pagination.start, pagination.end)
              .map((item, index) => {
                return (
                  <>
                    <div className={classes.cardDiv}>
                      <img
                        src={item.image}
                        className={classes.imgStyle}
                        alt="1"
                      />
                      <CardContent>
                        <Typography gutterBottom align="center" component="h2">
                          {item.category}
                        </Typography>
                        <Typography
                          component="p"
                          className={classes.secondLine}
                          align="center"
                        >
                          {item.title}
                        </Typography>
                        <Typography gutterBottom align="center" component="h2">
                          $30
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </div>
                  </>
                );
              })}
          </div>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            count={10}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Search;
