import { createStore,
  applyMiddleware,
  compose,
  StoreEnhancerStoreCreator } from 'redux';
const thunk = require('redux-thunk').default;
import {RootReducer} from '../_reducres/root.reducer';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default () => {
  return finalCreateStore(RootReducer);
}
