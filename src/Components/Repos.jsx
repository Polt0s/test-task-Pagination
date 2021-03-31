import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './styles.css';

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
          <Box key={post.id} component="div" m={2}>
            <Box component="div" m={1}>Name: {post.name}</Box>
            <Box component="div" m={1}>Stars count: {post.stargazers_count}</Box>
            <Box component="div" m={1}>Forks count: {post.forks_count}</Box>
            <Box component="div" m={1}>Open issues count: {post.open_issues_count}</Box>
            <Box component="div" m={1}>Last commit: {post.updated_at}</Box>
            <a href={post.html_url} className="repo-link">Repository link: {post.html_url}</a>
          </Box>
        ))}
      </Container>
    </React.Fragment>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export default Posts;
