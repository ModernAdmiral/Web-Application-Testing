import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./Components/Dashboard";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<Dashboard balls={4} strikes={2} />);
  expect(asFragment()).toMatchSnapshot();
});
