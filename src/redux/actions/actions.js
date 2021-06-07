export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchSucess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchFailure = (payload) => ({
  type: FETCH_FAILURE,
  payload,
});
