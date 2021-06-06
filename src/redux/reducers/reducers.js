import { FETCH_START, FETCH_SUCCESS, FECH_FAIL } from '../actions/actions';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
} 

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {loading: false, error: null, data: action.payload }
    case FECH_FAIL: 
      return { loading: false, data: null, error: action.payload }
    default:
      state;
  }
}

export default reducer;
