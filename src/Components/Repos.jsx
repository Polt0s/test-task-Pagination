import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ContainerRepo } from './styles.js';

const Posts = (props) => {
  const { posts, loading } = props;
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {posts.map((post) => (
          <ContainerRepo key={post.id} maxWidth="sm">
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Name: </a>
              {post.name}
            </Box>
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Stars count: </a>
              {post.stargazers_count}
            </Box>
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Forks count: </a>
              {post.forks_count}
            </Box>
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Open issues count: </a>
              {post.name}{post.open_issues_count}
            </Box>
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Last commit: </a>
              {post.updated_at}
            </Box >
            <Box component="div" m={1}>
              <a style={{ fontWeight: 'bold' }}>Repository link: </a>
              <a href={post.html_url} className="repo-link">{post.html_url}</a>
            </Box>
          </ContainerRepo>
        ))}
      </Container>
    </React.Fragment >
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default Posts;
