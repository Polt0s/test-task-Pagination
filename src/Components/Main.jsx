import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import getApiRepository from '../requestServer/requestApiRepository.js';
import Pagination from './Pagination.jsx';
import { setCurrentPage, changingPostsPerPage } from '../actions/index.js';
import Posts from './Repos.jsx';
import { Footer, TextHead } from './styles.js';

const NUMBER_OF_PAGE = [5, 10, 25, 50, 100];

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.repository.posts);
  const currentPage = useSelector((state) => state.repository.currentPage);
  const postsPerPage = useSelector((state) => state.repository.postsPerPage);
  const totalCountPost = useSelector((state) => state.repository.totalCountPost);

  useEffect(() => {
    dispatch(getApiRepository(totalCountPost, currentPage));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (value) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box style={TextHead} component="div" m={1}>
          <p>Total count: {totalCountPost}</p>
        </Box>
        <Box style={TextHead} component="div" m={1}>
          <p>How many elements to show per page</p>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            {NUMBER_OF_PAGE.map((item) => (
              <Button
                key={item}
                onClick={(() => dispatch(changingPostsPerPage(posts, item)))}>{item}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <Box component="div" m={1}>
          <Posts posts={currentPosts} />
        </Box>
        <Box component="div" m={1}>
          <Pagination
            count={posts.length}
            page={postsPerPage}
            defaultPage={currentPage}
            onChange={handleChange}
          />
        </Box>
        <Box component="div" m={1}>
          <div style={Footer}>
            <a>Created by </a>
            <a href="https://github.com/Polt0s" className="target: _black">Stepan Gnezdilov</a>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
