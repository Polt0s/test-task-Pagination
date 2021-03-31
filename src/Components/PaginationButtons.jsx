import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationButtons = (props) => {
  const classes = useStyles();
  const {
    totalPosts,
    postsPerPage,
    currentPage,
    handleChange,
  } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers.length}
        page={currentPage}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </div>
  );
};

PaginationButtons.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  currentPage: PropTypes.number,
  handleChange: PropTypes.func,
};

export default PaginationButtons;
