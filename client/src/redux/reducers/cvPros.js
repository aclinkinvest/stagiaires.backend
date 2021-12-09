
import {
  FETCH_ALL_CVPROS,
  ADD_NEW_CVPRO,
  UPDATE_CVPRO,
  DELETE_CVPRO,
  START_LOADING,
  END_LOADING,
  FETCH_CVPROS_BY_CANDIDATE, FETCH_CVPRO
} from '../actions/constants'

const cvPros = (state = { isLoading: true, cvPros: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case FETCH_ALL_CVPROS:
        return {
          ...state,
          cvPros: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case FETCH_CVPROS_BY_CANDIDATE:
        return { ...state, cvPros: action.payload };

      case FETCH_CVPRO:
        return { ...state, cvPro: action.payload };
      case ADD_NEW_CVPRO:
        return { ...state, cvPros: [...state.cvPros, action.payload] };
      case UPDATE_CVPRO:
        return { ...state, cvPros: state.cvPros.map((cvPro) => (cvPro._id === action.payload._id ? action.payload : cvPro)) };
      case DELETE_CVPRO:
        return { ...state, cvPros: state.cvPros.filter((cvPro) => cvPro._id !== action.payload) };
      default:
        return state;
    }
  };

  export default cvPros
