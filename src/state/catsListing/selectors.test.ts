import store from "../store";
import { getCatImages, getCatListingError } from "./selectors";

const getState = (catsListingSlice = {}) => {
  const appState = store.getState();
  return {
    ...appState,
    catsListing: {
      ...appState.catsListing,
      ...catsListingSlice,
    },
  };
};

describe("catsListing selectors", () => {
  it("getCatImages", () => {
    const catImages = [
      {
        url: "/images/cat1.png",
        original_filename: "cat1.png",
      },
      {
        url: "/images/cat2.png",
        original_filename: "cat2.png",
      },
    ];
    const state = getState({
      catImages,
    });

    expect(getCatImages(state)).toBe(catImages);
  });

  it("getCatListingError", () => {
    const state = getState({
      error: true,
    });

    expect(getCatListingError(state)).toBe(true);
  });
});
