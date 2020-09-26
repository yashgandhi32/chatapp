import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { messageReducer } from '../reducers/messages';
import initSocket from '../socket/socket';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const setupStore = () => {

  return initSocket().then(({ send, receive }) => {
    const store = createStore(
      messageReducer,
      composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument( send ))),
    );

    receive(store.dispatch);
    return store;
  });
};

export default setupStore;