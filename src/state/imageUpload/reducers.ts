import { ImageUploadActions, ACTION_TYPES } from "./actions";

export interface ImageUploadState {
  loading: boolean;
  error: boolean;
}

export const initialState: ImageUploadState = {
  loading: false,
  error: false,
};

export default function imageUploadReducer(
  state = initialState,
  action: ImageUploadActions
): ImageUploadState {
  switch (action.type) {
    case ACTION_TYPES.UPLOAD:
      return { ...initialState, loading: true };
    case ACTION_TYPES.UPLOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ACTION_TYPES.UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}
