import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  it("renders", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    const heading = getByText("Landing page");
    expect(heading).toBeInTheDocument();
  });
});
