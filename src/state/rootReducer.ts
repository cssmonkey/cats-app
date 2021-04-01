import { combineReducers } from "redux";

import imageUpload from "./imageUpload/reducers";
import catsListing from "./catsListing/reducers";

const rootReducer = combineReducers({
  imageUpload,
  catsListing,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
