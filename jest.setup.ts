import React from "react";
import "@testing-library/jest-dom";

// Mock motion
jest.mock("motion/react", () => ({
  motion: new Proxy(
    {},
    {
      get: (_: unknown, tag: string) => {
        const Component = ({
          children,
          ...props
        }: React.PropsWithChildren<Record<string, unknown>>) => {
          const validProps = Object.fromEntries(
            Object.entries(props).filter(
              ([key]) =>
                ![
                  "initial",
                  "animate",
                  "whileInView",
                  "whileHover",
                  "whileTap",
                  "transition",
                  "variants",
                  "viewport",
                ].includes(key),
            ),
          );
          return React.createElement(tag, validProps, children);
        };
        Component.displayName = tag;
        return Component;
      },
    },
  ),
  AnimatePresence: ({ children }: React.PropsWithChildren) =>
    React.createElement(React.Fragment, null, children),
  useInView: () => true,
  useAnimation: () => ({ start: jest.fn() }),
}));

const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("Warning:")) return;
    originalError(...args);
  };
});
afterAll(() => {
  console.error = originalError;
});
