import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "../reducer/rootReducer";
import createLogger from "redux-logger";

export const history = createBrowserHistory();

const preloadedState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    middleware.push(createLogger);
    enhancers.push(devToolsExtension());
  }
}

const combinedReducers = combineReducers({
  router: connectRouter(history),
  rootReducer
});

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const configureStore = createStore(
  combinedReducers,
  preloadedState,
  composedEnhancers
);

export default configureStore;
