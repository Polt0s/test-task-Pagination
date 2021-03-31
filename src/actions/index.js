export const setRepository = (post) => ({
  type: 'SET_REPOSITORY',
  payload: post,
});

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});

export const changingPostsPerPage = (items, pages, currentPage = 1) => ({
  type: 'CHANGING_POSTS_PER_PAGE',
  payload: {
    items,
    pages,
    currentPage,
  },
});
