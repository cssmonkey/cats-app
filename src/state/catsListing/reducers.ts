import { CatsListingActions, ACTION_TYPES } from "./actions";
import { Cat } from "./types";

export interface CatsListingState {
  error: boolean;
  catImages?: Array<Cat>;
}

export const initialState: CatsListingState = {
  error: false,
};

export default function imageUploadReducer(
  state = initialState,
  action: CatsListingActions
): CatsListingState {
  switch (action.type) {
    case ACTION_TYPES.FETCH_IMAGES:
      return initialState;
    case ACTION_TYPES.FETCH_IMAGES_ERROR:
      return {
        ...state,
        error: true,
      };
    case ACTION_TYPES.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        catImages: action.payload,
        error: false,
      };
    case ACTION_TYPES.CLEAR_IMAGES:
      return {
        ...state,
        catImages: undefined,
      };
    default:
      return state;
  }
}
