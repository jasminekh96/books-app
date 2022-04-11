import React from "react";
import { screen, render } from "@testing-library/react";
import Search from "../Search";

describe("search", () => {
  it("should return search", () => {
    render(<Search />);
    expect(screen.findAllByTitle("searchin")).toBeTruthy();
  });

  it("should contain a text box", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText("Search Books"));
  });
});
