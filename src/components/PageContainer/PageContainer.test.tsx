import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PageContainer from "./PageContainer";

describe("PageContainer", () => {
  it("renders", () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <PageContainer children={<p>Child element</p>} />
      </MemoryRouter>
    );

    const heading = getByText("It's all about Cats");
    const childElement = getByText("Child element");
    const navigation = container.querySelector(".navigation");

    expect(heading).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
