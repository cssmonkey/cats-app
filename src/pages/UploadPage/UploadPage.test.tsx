import React from "react";
import { MemoryRouter } from "react-router-dom";

import UploadPage from "./UploadPage";
import renderConnected from "../../utilities/test/renderConnected";

describe("UploadPage", () => {
  it("renders", () => {
    const { getByText, container } = renderConnected({
      ui: (
        <MemoryRouter>
          <UploadPage />
        </MemoryRouter>
      ),
    });

    const heading = getByText("Upload image");
    const uploadComponent = container.querySelector(".image-uploader");
    expect(heading).toBeInTheDocument();
    expect(uploadComponent).toBeInTheDocument();
  });
});
