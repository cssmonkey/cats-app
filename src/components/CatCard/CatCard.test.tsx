import React from "react";
import { render } from "@testing-library/react";

import CatCard from "./CatCard";

describe("CatCard", () => {
  it("renders", () => {
    const { getByAltText } = render(<CatCard url="images/image.png" fileName="image.png" />);

    const catImage = getByAltText("image.png");
    expect(catImage).toBeInTheDocument();
  });
});
