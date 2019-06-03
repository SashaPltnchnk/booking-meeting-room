import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'
import createSaga from 'redux-saga'
import rootSaga from './sagas'
import { requestsPromiseMiddleware } from 'redux-saga-requests'
import thunk from 'redux-thunk';
import eventsReducer from './reducers/events'
import authReducer from './reducers/auth'
import roomsReducer from './reducers/room'
import colorReducer from './reducers/color'
// import { save, load } from "redux-localstorage-simple"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({diff: true, collapsed: true})
const saga = createSaga()

const rootReducer = combineReducers({
    events: eventsReducer,
    auth: authReducer,
    room: roomsReducer,
    color: colorReducer
});

/*
    Saving to LocalStorage is achieved using Redux 
    middleware. The 'save' method is called by Redux 
    each time an action is handled by your reducer.
*/    
const createStoreWithMiddleware 
    = composeEnhancers(
        applyMiddleware(thunk, 
                        requestsPromiseMiddleware(), 
                        saga, 
                        logger, 
                        // save()
                        )
    )(createStore)
    
    
/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/  
const store = createStoreWithMiddleware(
    rootReducer,    
    // load() // Loading done here
)    

// const store = createStore(reducer, composeEnhancers(
//     applyMiddleware(thunk, requestsPromiseMiddleware(), saga, logger)
// ));

saga.run(rootSaga)

export default store