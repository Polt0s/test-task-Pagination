/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './pagination.css';

const Pagination = (props) => {
  const {
    count,
    page,
    defaultPage,
    onChange,
  } = props;

  const pageCount = Math.ceil(count / page);
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination">
      {pages.map((item) => (
        <div href={null} key={item}
          onClick={() => onChange(item)}
          className={item === defaultPage ? 'active' : 'page-item'}>
          {item}
        </div>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pagination;