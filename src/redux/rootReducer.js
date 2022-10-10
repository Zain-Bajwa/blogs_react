import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { Reducer } from "../components/logic/slice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  reducerName: Reducer,
});
export { rootPersistConfig, rootReducer };
