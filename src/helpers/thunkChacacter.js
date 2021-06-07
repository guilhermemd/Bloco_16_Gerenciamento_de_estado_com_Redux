import { fetchFailure, fetchStart, fetchSucess } from '../redux/actions/actions';
import charAPI from '../services/charAPI';

function thunkCharacter(name) {
  return (dispatch) => {
    dispatch(fetchStart());
    return charAPI(name)
      .then(
        (character) => dispatch(fetchSucess(character)),
        (error) => dispatch(fetchFailure(error.message)),
      );
  };
};

export default thunkCharacter;