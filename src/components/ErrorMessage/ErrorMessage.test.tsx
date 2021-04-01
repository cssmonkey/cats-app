import React from "react";
import { render } from "@testing-library/react";

import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders with string as child", () => {
    const { getByText } = render(<ErrorMessage>error message</ErrorMessage>);

    const errorText = getByText("error message");
    expect(errorText).toBeInTheDocument();
  });
  it("renders with a Element as child", () => {
    const { getByText } = render(
      <ErrorMessage>
        <p>error message</p>
      </ErrorMessage>
    );

    const errorText = getByText("error message");
    expect(errorText).toBeInTheDocument();
  });
});
