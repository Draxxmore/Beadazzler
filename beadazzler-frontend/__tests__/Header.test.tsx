import { Header } from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  test("Header elements render", () => {
    render(<Header />);
    expect(screen.getByText('Beadazzler')).toBeInTheDocument()
  });
});
