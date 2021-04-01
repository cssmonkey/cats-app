import reducer, { initialState } from "./reducers";
import { ACTION_TYPES } from "./actions";
import { Cat } from "./types";

describe("catsListing reducer", () => {
  it(ACTION_TYPES.FETCH_IMAGES, () => {
    const state = reducer(initialState, {
      type: ACTION_TYPES.FETCH_IMAGES,
    });
    expect(state).toEqual(initialState);
  });

  it(ACTION_TYPES.FETCH_IMAGES_ERROR, () => {
    const state = reducer(initialState, {
      type: ACTION_TYPES.FETCH_IMAGES_ERROR,
    });
    expect(state.error).toBe(true);
  });

  it(ACTION_TYPES.FETCH_IMAGES_SUCCESS, () => {
    const catImages: Array<Cat> = [
      {
        url: "/images/cat1.png",
        original_filename: "cat1.png",
      },
      {
        url: "/images/cat2.png",
        original_filename: "cat2.png",
      },
    ];
    const state = reducer(initialState, {
      type: ACTION_TYPES.FETCH_IMAGES_SUCCESS,
      payload: catImages,
    });

    expect(state.error).toBe(false);
    expect(state.catImages).toEqual(catImages);
  });

  it(ACTION_TYPES.CLEAR_IMAGES, () => {
    const stateWithImages = {
      ...initialState,
      catImages: [
        {
          url: "/images/cat1.png",
          original_filename: "cat1.png",
        },
        {
          url: "/images/cat2.png",
          original_filename: "cat2.png",
        },
      ],
    };
    const state = reducer(stateWithImages, {
      type: ACTION_TYPES.CLEAR_IMAGES,
    });
    expect(state.catImages).toBeUndefined();
  });
});
