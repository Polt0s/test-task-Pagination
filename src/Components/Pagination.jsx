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
  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) {
    return (
      <div className="pagination">
        <div className="disabled">
          Previous
        </div>
        <div key={1}
          className="active">
          1
      </div>
        <div className="disabled">
          Next
        </div>
      </div>
    );
  }

  return (
    <div className="pagination">
      <div
        onClick={defaultPage === 1 ? null : () => onChange(defaultPage - 1)}
        className={defaultPage === 1 ? 'disabled' : 'page-item'}>
        Previous
        </div>
      {pages.map((item) => (
        <div key={item}
          onClick={() => onChange(item)}
          className={item === defaultPage ? 'active' : 'page-item'}>
          {item}
        </div>
      ))}
      <div
        onClick={defaultPage >= pageCount ? null : () => onChange(defaultPage + 1)}
        className={defaultPage >= pageCount ? 'disabled' : 'page-item'}>
        Next
        </div>
    </div >
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pagination;
