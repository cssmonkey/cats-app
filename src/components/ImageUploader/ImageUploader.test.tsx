import React from "react";

import { initialState } from "../../state/imageUpload/reducers";
import ImageUploader from "./ImageUploader";

import renderConnected from "../../utilities/test/renderConnected";

describe("ImageUploader", () => {
  it("renders", () => {
    const state = {
      imageUpload: {
        ...initialState,
      },
    };
    const onImageUploadSuccess = jest.fn();

    const { getByText } = renderConnected({
      ui: <ImageUploader onImageUploadSuccess={onImageUploadSuccess} />,
      state,
    });

    const uploadButton = getByText("Click or Drop here");
    expect(uploadButton).toBeInTheDocument();
  });
  it("renders error message", () => {
    const state = {
      imageUpload: {
        ...initialState,
        error: true,
      },
    };
    const onImageUploadSuccess = jest.fn();

    const { getByText } = renderConnected({
      ui: <ImageUploader onImageUploadSuccess={onImageUploadSuccess} />,
      state,
    });

    const errorMessage = getByText(
      "Sorry something went wrong with your image upload, please try again"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
