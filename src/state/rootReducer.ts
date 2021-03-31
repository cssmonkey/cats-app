import { combineReducers } from "redux";

import imageUpload from "./imageUpload/reducers";

const rootReducer = combineReducers({
  imageUpload,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
