import {
  Card,
  Box,
  Typography,
  Grid,
  Container,
  CardContent,
} from "@mui/material";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Data from "../data1.json";
function App() {
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = ( start, end ) => {
    setPagination({ start: start, end: end });
    console.log(start,end);
  };

  return (
    <div className="App">
      <Container component={Box} py={3}>
        <Grid container spacing={2}>
          {Data.slice(pagination.start, pagination.end).map((post) => (
            <Grid item sm={3}>
              <Card key={post.id} style={{ height: 250 }}>
                <CardContent>
                  <Typography variant="h6">
                    {post.id}. {post.title}
                  </Typography>
                  <img src={post.images[1].src} alt="image" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            count={10}
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
