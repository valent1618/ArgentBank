import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

const initialState = {
  token: null,
  firstName: null,
  lastName: null,
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      return;
    },
    logout: () => {
      return initialState;
    },
    update: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      return;
    },
  },
});

export const { login, logout, update } = actions;
export default reducer;

const BASE_URL_API = 'http://localhost:3001/api/v1/';

export function signUp(e, store, navigate) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  const firstName = capitalizeFirstLetter(e.target[2].value);
  const lastName = capitalizeFirstLetter(e.target[3].value);
  const connect = e.target[4].checked;
  const submitButton = document.getElementsByClassName('sign-up-button')[0];
  const errorText = document.getElementsByClassName('errorText')[0];

  // Reset animation
  submitButton.style.animation = '';

  axios
    .post(`${BASE_URL_API}user/signup`, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    })
    .then(() => {
      if (connect) {
        axios
          .post(`${BASE_URL_API}user/login`, {
            email: email,
            password: password,
          })
          .then((response) => {
            // Add Bearer for API
            const token = `Bearer ${response.data.body.token}`;
            store.dispatch(login(token));
          })
          .catch((error) => {
            console.log('Error for Login in signUp =>', error);
          });
      } else {
        localStorage.username = email;
        navigate('/sign-in');
      }
    })
    .catch(() => {
      localStorage.username = email;
      submitButton.classList.add('errorButton');
      submitButton.style.animation =
        'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
      errorText.classList.remove('hide');
    });
}

export function Login(e, store) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  const remember = e.target[2].checked;
  const submitButton = document.getElementsByClassName('sign-in-button')[0];
  const errorText = document.getElementsByClassName('errorText')[0];

  // Reset animation
  submitButton.style.animation = '';

  // Store field values when 'Remember me' is checked
  if (remember) {
    localStorage.username = email;
    localStorage.remember = true;
  } else {
    delete localStorage.username;
    delete localStorage.remember;
  }

  axios
    .post(`${BASE_URL_API}user/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      // Add Bearer for API
      const token = `Bearer ${response.data.body.token}`;
      store.dispatch(login(token));
    })
    .catch(() => {
      submitButton.classList.add('errorButton');
      submitButton.style.animation =
        'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
      errorText.classList.remove('hide');
    });
}

export function getUser(store, token) {
  axios
    .post(
      `${BASE_URL_API}user/profile`,
      {},
      {
        headers: { authorization: token },
      }
    )
    .then((response) => {
      const body = response.data.body;
      const payload = { firstName: body.firstName, lastName: body.lastName };
      store.dispatch(update(payload));
    })
    .catch((error) => {
      console.log('Error with getUser =>', error);
    });
}

export function updateUser(store, token, setEdit) {
  const first = document.getElementById('first-name');
  const last = document.getElementById('last-name');
  const saveButton = document.getElementById('saveButton');
  const errorText = document.getElementsByClassName('errorText')[0];

  const isValid = first.checkValidity() && last.checkValidity();

  const firstName = capitalizeFirstLetter(first.value);
  const lastName = capitalizeFirstLetter(last.value);

  if (isValid) {
    axios
      .put(
        `${BASE_URL_API}user/profile`,
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: { authorization: token },
        }
      )
      .then((response) => {
        const body = response.data.body;
        const payload = { firstName: body.firstName, lastName: body.lastName };
        store.dispatch(update(payload));
        setEdit(false);
      })
      .catch((error) => {
        console.log('Error with updateUser =>', error);
      });
  } else {
    saveButton.classList.add('errorButton');
    saveButton.style.animation =
      'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both';
    errorText.classList.remove('hide');
  }
}
