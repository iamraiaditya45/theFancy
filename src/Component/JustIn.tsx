import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Image1 from '../Images/1.png';
import Image2 from '../Images/image2.jpg';
import Image3 from '../Images/image3.jpg';
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommitIcon from '@mui/icons-material/Commit';
import {  Button } from "@mui/material";
import Drop from "./itemDropdown"
// const isFavourite = () => (true);
const useStyles = makeStyles(() => ({
  cardContainer:{
display:"flex",
justifyContent:"space-around",
marginTop:"50px",
  },
  card: {
    width: 500,
    height:600,
  },
  imgStyle:{
    display: 'block',
    height: '600px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '-200px',
    position: 'relative',
    width:"500px"
  },
  secondLine:{
"&.css-1uwgr7b-MuiTypography-root":{
  fontWeight:"bold",
}
  },
  btn:{
    float:"left",
    width:"120px",
    "&.css-1rwt2y5-MuiButtonBase-root-MuiButton-root":{
borderRadius:"20px",
border:"1px solid black",
color:"black",
display:"flex",
justifyContent:"space-between",
width:"120px",
height:"43px"

    },
  },
  top:{
    display:"flex",
    justifyContent:"space-around",
    marginTop:"20px",
    // marginLeft:"30px"
  }
}));


function BeerCard() {
    const classes = useStyles();
    const [over, setOver] = React.useState(false);
  return (
    <>
    <div className={classes.top}>
            <Button variant="outlined" className={classes.btn}>
          <CommitIcon />
          <Typography  align="center"  component="h2">
            FILTER
          </Typography>
        </Button>
        <Typography  align="center"  variant="h6">
            52 PRODUCTS
          </Typography>
          <Drop/>
          </div>
    <div className={classes.cardContainer}>

      <Card className={classes.card}>
      <div
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
         <img
          src={over ? Image1 : Image2}
          alt="arrow"
          className={classes.imgStyle}
        />
    </div>   

    {/* <img className={classes.imgStyle} src={Image1} /> */}

                <CardContent>
          <Typography gutterBottom align="center"  component="h2">
            MISSETE
          </Typography>
          <Typography component="p" className={classes.secondLine} align="center">
            Napkins in Natural-Hand Marbled Fringe
          </Typography>
          <Typography gutterBottom align="center"  component="h2">
            $30
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={classes.card}>
    <img className={classes.imgStyle} src={Image2}  />
    
                <CardContent>
          <Typography gutterBottom align="center"  component="h2">
            MISSETE
          </Typography>
          <Typography component="p" className={classes.secondLine} align="center">
            Napkins in Natural-Hand Marbled Fringe
          </Typography>
          <Typography gutterBottom align="center"  component="h2">
            $30
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <Card className={classes.card}>
    <img className={classes.imgStyle} src={Image1} />
                <CardContent>
          <Typography gutterBottom align="center"  component="h2">
            MISSETE
          </Typography>
          <Typography component="p" className={classes.secondLine} align="center">
            Napkins in Natural-Hand Marbled Fringe
          </Typography>
          <Typography gutterBottom align="center"  component="h2">
            $30
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
     
    </div>
    </>
  );
}
export default BeerCard;
