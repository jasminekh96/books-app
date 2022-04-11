import React from "react";
import { screen, render } from "@testing-library/react";
import BookResults from "../BookResults";
import "@testing-library/jest-dom";

describe("book results", () => {
  it("should show results with a valid book object", () => {
    render(<BookResults booksArray={[{ author: "Toni Morrison" }]} />);
    expect(screen.getByTestId("author-name-0")).toHaveTextContent(
      "Toni Morrison"
    );
  });

  it("should not show results without a valid book object", () => {
    render(<BookResults />);
    expect(screen.getByText("Search results not found")).toHaveTextContent(
      "Search results not found"
    );
  });
});
