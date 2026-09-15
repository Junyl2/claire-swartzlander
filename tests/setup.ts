import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(globalThis, "ResizeObserver", {
  writable: true,
  value: MockResizeObserver,
});

vi.mock("next/image", () => ({
  default: (incomingProps: Record<string, unknown>) => {
    const props = { ...incomingProps };
    delete props.fill;
    delete props.priority;

    return React.createElement("img", { ...props, alt: props.alt ?? "" });
  },
}));
