import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import getApiRepository from '../requestServer/requestApiRepository.js';
import PaginationButtons from './PaginationButtons.jsx';
import { setCurrentPage } from '../actions/index.js';
import Posts from './Repos.jsx';

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.repository.posts);
  const loading = useSelector((state) => state.repository.loading);
  const currentPage = useSelector((state) => state.repository.currentPage);
  const postsPerPage = useSelector((state) => state.repository.postsPerPage);
  const totalCountPost = useSelector((state) => state.repository.totalCountPost);

  // useEffect(() => {
  //   dispatch(getApiRepository(currentPage, perPage));
  // }, [currentPage]);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  // const [totalCountPost] = useState(100);

  useEffect(() => {
    dispatch(getApiRepository(totalCountPost, currentPage));
    // .then((response) => {
    //   setPosts(response.items);
    //   setLoading(false);
    // });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    event.preventDefault();
    dispatch(setCurrentPage(value));
    // setCurrentPage(value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="div" m={1}>
          <p>total count: 0</p>
        </Box>
        <Box component="div" m={1}>
          <p>How many pages to show</p>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>10</Button>
            <Button>50</Button>
            <Button>100</Button>
          </ButtonGroup>
        </Box>
        <Box component="div" m={1}>
          <Posts posts={currentPosts} loading={loading} />
        </Box>
        <Box component="div" m={1}>
          <PaginationButtons
            totalPosts={totalCountPost}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            handleChange={handleChange}
          />
        </Box>
        <Box component="div" m={1}>
          <a>подпись</a>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
