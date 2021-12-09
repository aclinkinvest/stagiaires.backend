
import { FETCH_ALL, ADD_NEW, UPDATE, DELETE, FETCH_CVPRO, START_LOADING, END_LOADING, FETCH_OFFERS_BY_COMPANY } from '../actions/constants'

const offers = (state = { isLoading: true, offers: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case FETCH_ALL:
        return {
          ...state,
          offers: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
      case FETCH_OFFERS_BY_COMPANY:
        return { ...state, offers: action.payload };

      case FETCH_CVPRO:
        return { ...state, offer: action.payload };
      case ADD_NEW:
        return { ...state, offers: [...state.offers, action.payload] };
      case UPDATE:
        return { ...state, offers: state.offers.map((offer) => (offer._id === action.payload._id ? action.payload : offer)) };
      case DELETE:
        return { ...state, offers: state.offers.filter((offer) => offer._id !== action.payload) };
      default:
        return state;
    }
  };

  export default offers

