import reducer, { initialState } from "./reducers";
import { ACTION_TYPES } from "./actions";

describe("ImageUpload reducer", () => {
  it(ACTION_TYPES.UPLOAD, () => {
    const state = reducer(initialState, {
      type: ACTION_TYPES.UPLOAD,
      image: { file: new File([""], "filename") },
      onSuccessCallback: jest.fn(),
    });
    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
  });

  it(ACTION_TYPES.UPLOAD_SUCCESS, () => {
    const state = reducer(initialState, {
      type: ACTION_TYPES.UPLOAD_SUCCESS,
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
  });

  it(ACTION_TYPES.UPLOAD_ERROR, () => {
    const state = reducer(initialState, {
      type: ACTION_TYPES.UPLOAD_ERROR,
    });
    expect(state.loading).toBe(false);
    expect(state.error).toBe(true);
  });
});
