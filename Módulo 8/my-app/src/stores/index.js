import {createStore} from 'redux';
import reducer from '../reducer'


// A createStore recebe como parametro a nossa função reducer
const store = createStore(reducer);

export default store;