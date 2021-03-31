const initState = {
  posts: [],
  loading: false,
  currentPage: 1,
  postsPerPage: 10,
  totalCountPost: 100,
};

const apiRepositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_REPOSITORY':
      console.log(action.payload);
      return {
        ...state,
        posts: action.payload.items,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default apiRepositoryReducer;
