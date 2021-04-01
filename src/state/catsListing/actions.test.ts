import { ACTION_TYPES, fetchImages, fetchImagesError, clearImages } from "./actions";

describe("catsListing actions", () => {
  it("fetchImages action", () => {
    const result = fetchImages();
    expect(result).toEqual({ type: ACTION_TYPES.FETCH_IMAGES });
  });
  it("fetchImages error action", () => {
    const result = fetchImagesError();
    expect(result).toEqual({ type: ACTION_TYPES.FETCH_IMAGES_ERROR });
  });
  it("clearImages action", () => {
    const result = clearImages();
    expect(result).toEqual({ type: ACTION_TYPES.CLEAR_IMAGES });
  });
});
