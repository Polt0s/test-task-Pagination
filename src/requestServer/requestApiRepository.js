import axios from 'axios';
import { setRepository } from '../actions/index.js';

const getApiRepository = (totalCountPost, currentPage) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E100&sort=stars&per_page=${totalCountPost}&page=${currentPage}`,
    );
    dispatch(setRepository(response.data));
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

export default getApiRepository;
