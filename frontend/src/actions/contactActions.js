import {
  GET_MESSAGES,
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = (email) => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `http://localhost:8080/user/moderator/findById/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:8080/user/private/deleteById/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    'http://localhost:8080/user/public/create',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};

export const getMessages = (email) => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_MESSAGES,
    payload: res.data
  });
};