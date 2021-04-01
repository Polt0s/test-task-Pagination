const initState = {
  posts: [],
  currentPage: 1,
  postsPerPage: 5,
  totalCountPost: 100,
};

const apiRepositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_REPOSITORY':
      return {
        ...state,
        posts: action.payload.items,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'CHANGING_POSTS_PER_PAGE':
      return {
        ...state,
        posts: action.payload.items,
        postsPerPage: action.payload.pages,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default apiRepositoryReducer;
