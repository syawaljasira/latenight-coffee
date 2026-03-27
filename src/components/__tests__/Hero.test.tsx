import { render, screen } from "@testing-library/react";
import Hero from "@/components/home/Hero";

describe("Hero", () => {
  it("renders main headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders CTA button with correct text", () => {
    render(<Hero />);
    const ctaButtons = screen.getAllByRole("link", {
      name: /explore our menu|our story/i,
    });
    expect(ctaButtons).toHaveLength(2);
  });

  it("CTA button links to correct section", () => {
    render(<Hero />);
    const ctaButtons = screen.getAllByRole("link", {
      name: /explore our menu|our story/i,
    });
    ctaButtons.forEach((button) => {
      expect(button).toHaveAttribute("href", expect.stringMatching(/^#/));
    });
  });

  it("renders hero image with alt text", () => {
    render(<Hero />);
    const heroImage = screen.getByRole("img");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("alt", expect.not.stringMatching(/^$/)); // no empty alt
  });
});
