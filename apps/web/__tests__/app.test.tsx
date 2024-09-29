import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page";

describe("web app tests", () => {
  it("render homepage", () => {
    const jsx = render(<HomePage />);
    expect(jsx).toMatchSnapshot();
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });
});
