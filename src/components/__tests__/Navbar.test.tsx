import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  // === Rendering ===
  it("renders the brand/logo text", () => {
    render(<Navbar />);
    expect(screen.getByText(/late night coffee/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const navLinks = ["About", "Menu", "Gallery", "Reviews", "Visit Us"];
    navLinks.forEach((link) => {
      expect(
        screen.getByRole("link", { name: new RegExp(link, "i") }),
      ).toBeInTheDocument();
    });
  });

  it("navigation links point to correct anchors", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /menu/i })).toHaveAttribute(
      "href",
      "#menu",
    );
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
  });
});
