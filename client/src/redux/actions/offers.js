import * as api from '../../api'

import { /*ADD_NEW_OFFER, UPDATE_OFFER, DELETE_OFFER,*/ FETCH_OFFERS_BY_COMPANY, FETCH_OFFER, ALL_OFFERS, START_LOADING, END_LOADING } from './constants'


export const getOffer = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchOffer(id);
      dispatch({ type: FETCH_OFFER, payload: { client: data } });

    } catch (error) {
      console.log(error);
    }
  };

export const getAllOffers = (id) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchOffer(id);
      dispatch({ type: FETCH_OFFER, payload: { client: data } });

    } catch (error) {
      console.log(error);
    }
  };


export const fetchOffersByCompany =(searchQuery) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING })
    const  { data: { data } } = await api.fetchOffersByCompany(searchQuery)
      
      dispatch({ type: FETCH_OFFERS_BY_COMPANY, payload: data });
      dispatch({ type: END_LOADING })
    } catch (error) {
      console.log(error.response)
      
    }
  }

/*

export const createOffer =(client, openSnackbar) => async (dispatch) => {

    try {
        const { data } = await api.addOffer(client)
        dispatch({ type: ADD_NEW_OFFER, payload: data })
        openSnackbar("Customer added successfully")

    } catch (error) {
        console.log(error)
    }
}


export const updateOffer =(id, client, openSnackbar) => async (dispatch) => {

    const { data } = await api.updateOffer(id, client)
    dispatch({ type: UPDATE_OFFER, payload: data })
    openSnackbar("Customer updated successfully")
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteOffer =(id, openSnackbar) => async (dispatch) => {
    try {
        await api.deleteOffer(id)

        dispatch({type: DELETE_OFFER, payload: id})
        openSnackbar("Customer deleted successfully")
    } catch (error) {
        console.log(error)
    }
}*/
