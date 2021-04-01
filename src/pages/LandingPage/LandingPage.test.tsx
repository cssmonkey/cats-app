import React from "react";
import { MemoryRouter } from "react-router-dom";

import { initialState } from "../../state/catsListing/reducers";
import LandingPage from "./LandingPage";
import renderConnected from "../../utilities/test/renderConnected";

describe("LandingPage", () => {
  it("renders", () => {
    const state = {
      catsListing: {
        ...initialState,
        catImages: [{ url: "/image1.png", original_filename: "cat1.png" }],
      },
    };
    const { getByText, container } = renderConnected({
      ui: (
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      ),
      initialState: state,
    });

    const heading = getByText("Landing page");
    const catListItems = container.querySelectorAll(".cat-listing__item");
    expect(heading).toBeInTheDocument();
    expect(catListItems.length).toBe(1);
  });

  it("renders error message", () => {
    const state = {
      catsListing: {
        ...initialState,
        catImages: [],
        error: true,
      },
    };
    const { getByText } = renderConnected({
      ui: (
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      ),
      initialState: state,
    });

    const errorMessage = getByText("Sorry something loading your images, please try again");

    expect(errorMessage).toBeInTheDocument();
  });
});
