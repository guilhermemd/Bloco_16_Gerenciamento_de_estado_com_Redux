import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from '../actions/actions';

const INITIAL_STATE = {
  loading: false,
  error: null,
  character: '',
} 

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return {loading: false, character: action.payload[0], error: null }
    case FETCH_FAILURE: 
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

export default reducer;
