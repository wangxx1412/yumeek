import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UserInfo from "../UserInfo";

afterEach(cleanup);

const user = {
  created_at: "2020-04-14T21:47:43.396Z",
  email: "fake@gmail.com",
  first_name: "ff",
  id: 3,
  img_url: null,
  last_name: "ff",
  password_digest:
    "$2a$12$3k7YqnjPAJr9eTAc2cP0d.1MbQPt.rIe8YYvBuq4EXGJcZjc5OnYi",
  updated_at: "2020-04-14T21:47:43.396Z",
};

describe("UserInfo", () => {
  it("renders without crashing", () => {
    render(<UserInfo />);
  });

  it("renders a 'singup/login' button when there is no user", () => {
    const { getByText } = render(<UserInfo />);

    expect(getByText("Sign Up / Log In")).toBeInTheDocument();
  });

  it("renders the form when clicked the button", () => {
    const { getByText } = render(<UserInfo />);

    const button = getByText("Sign Up / Log In");

    fireEvent.click(button);

    expect(
      getByText("Are you ready to start your yumeek?")
    ).toBeInTheDocument();
  });

  it("renders user email and a logout button when gives a user", () => {
    const { getByText } = render(<UserInfo user={user} />);

    expect(getByText("fake@gmail.com")).toBeInTheDocument();
    expect(getByText("logout")).toBeInTheDocument();
  });
});
