import React from "react";
import { screen, render } from "@testing-library/react";
import Books from "../Books";

describe("books api", () => {
  it("should pull the list of books from the api", () => {
    render(<Books />);
    expect(screen.findAllByTitle("bookin")).toBeTruthy();
  });
});
