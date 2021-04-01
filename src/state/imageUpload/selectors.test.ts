import store from "../store";
import { getImageUploading, getImageUploadError } from "./selectors";

const getState = (imageUploadSlice = {}) => {
  const appState = store.getState();
  return {
    ...appState,
    imageUpload: {
      ...appState.imageUpload,
      ...imageUploadSlice,
    },
  };
};

describe("imageUpload selectors", () => {
  describe("getImageUploading", () => {
    it("should return true", () => {
      const state = getState({ loading: true });

      expect(getImageUploading(state)).toBe(true);
    });
    it("should return false", () => {
      const state = getState({ loading: false });

      expect(getImageUploading(state)).toBe(false);
    });
  });
  it("getImageUploadError", () => {
    const state = getState({ error: true });

    expect(getImageUploadError(state)).toBe(true);
  });
});
