import { render, screen, within } from "@testing-library/react";
import Footer from "@/components/Footer";
import { SOCIAL_LINKS } from "@/utils/dummyData";

describe("Footer", () => {
  // === Branding ===
  it("renders brand name", () => {
    render(<Footer />);
    expect(
      screen.getByText(/late night coffee/i, { selector: "a" }),
    ).toBeInTheDocument();
  });

  it("renders copyright notice with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(String(currentYear))),
    ).toBeInTheDocument();
  });

  // === Navigation Links ===
  it("renders footer navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /menu/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /our story/i }),
    ).toBeInTheDocument();
  });

  // === Social Media ===
  it("renders social media links", () => {
    render(<Footer />);
    const socialContainer = screen.getByTestId("social-links");
    const socialLinks = within(socialContainer).getAllByRole("link");
    expect(socialLinks).toHaveLength(SOCIAL_LINKS.length);
  });

  it("social media links open in new tab", () => {
    render(<Footer />);
    const socialContainer = screen.getByTestId("social-links");
    const socialLinks = within(socialContainer).getAllByRole("link");

    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });
});
