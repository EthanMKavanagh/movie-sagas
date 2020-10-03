import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIE', fetchMovieSaga);
    yield takeEvery('FETCH_GENRE', fetchGenreSaga);
    yield takeEvery('FETCH_INDIVIDUAL_MOVIE', fetchIndividualMovieSaga);
}

// GET individual move saga
function* fetchIndividualMovieSaga(action) {
    let response = yield axios({
        method: 'GET',
        url: `/api/movie/${action.payload}`
    });

    yield put({
        type: 'SET_MOVIE',
        payload: response.data
    });
}

// GET genres saga
function* fetchGenreSaga(action) {
    let response = yield axios({
        method: 'GET',
        url: '/api/genre'
    });
    yield put({
        type: 'SET_GENRE',
        payload: response.data
    });
}

// GET movies saga
function* fetchMovieSaga(action) {
    let response = yield axios({
        method: 'GET',
        url: '/api/movie'
    });
    yield put({
        type: 'SET_MOVIE',
        payload: response.data
    });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
