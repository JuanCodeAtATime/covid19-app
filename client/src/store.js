import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const middleware = [thunk];

//Line 15 and 16 (col 90-99) added to fix rendering issue on non-Chrome browsers
const store = createStore(
    compose(
        applyMiddleware(...middleware),
        window.navigator.userAgent.includes('Chrome') ?
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    )
);
export default store;