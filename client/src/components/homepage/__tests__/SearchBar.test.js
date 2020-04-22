import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

afterEach(cleanup);

describe("SearchBar", () => {
  it("renders without crashing", () => {
    render(<SearchBar />);
  });

  it("renders a placeholder 'search'", () => {
    const { getByText } = render(<SearchBar />);

    expect(getByText("Search")).toBeInTheDocument();
  });

  it("renders health labels", () => {
    const { getByText } = render(<SearchBar />);

    expect(getByText("vegetarian")).toBeInTheDocument();
    expect(getByText("vegan")).toBeInTheDocument();
    expect(getByText("alcohol-free")).toBeInTheDocument();
    expect(getByText("tree-nut-free")).toBeInTheDocument();
    expect(getByText("peanut-free")).toBeInTheDocument();
    expect(getByText("sugar-conscious")).toBeInTheDocument();
  });

  // it("calls the handleSearch function when clicked the 'Go!' button", () => {
  //   const handleSearch = jest.fn();

  //   const { getByText } = render(<SearchBar handleSearch={handleSearch} />);

  //   const button = getByText("Go!");

  //   fireEvent.click(button);

  //   expect(handleSearch).toHaveBeenCalledTimes(1);
  //   expect(handleSearch).toHaveBeenCalledWith("", {
  //     vegetarian: false,
  //     vegan: false,
  //     "alcohol-free": false,
  //     "tree-nut-free": false,
  //     "peanut-free": false,
  //     "sugar-conscious": false,
  //   });
  // });
});
