import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
import reducer from 'reducers';

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'Mountain',
      realtime: true,
    })
  );

  return createStore(reducer, enhancer);
}
