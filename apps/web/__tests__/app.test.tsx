// import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HomePage from "../app/page";

describe("web app tests", () => {
  it("render homepage", () => {
    const jsx = render(<HomePage />);
    expect(jsx).toMatchSnapshot();
  });
});
