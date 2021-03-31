import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UploadPage from "./UploadPage";

describe("UploadPage", () => {
  it("renders", () => {
    const { getByText } = render(
      <MemoryRouter>
        <UploadPage />
      </MemoryRouter>
    );

    const heading = getByText("Upload image");
    expect(heading).toBeInTheDocument();
  });
});
