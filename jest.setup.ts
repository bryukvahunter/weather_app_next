import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: string) => {
    return React.createElement("img", props);
  },
}));
