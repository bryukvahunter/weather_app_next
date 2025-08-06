import React from "react";
import { render, screen } from "@testing-library/react";

import MiniCard from "./MiniCard";

test("test render", () => {
  render(
    <MiniCard
      title={"Вторник, 5 августа"}
      icon={"/weather_icons/rain_sun.png"}
      temp={"+28"}
      feelsLike={"+31"}
      description={"небольшой дождь"}
    />,
  );
  expect(screen.getByText("Вторник, 5 августа")).toBeInTheDocument();
  expect(screen.getByText("+28°")).toBeInTheDocument();
  expect(screen.getByText("+31°")).toBeInTheDocument();
  expect(screen.getByText("небольшой дождь")).toBeInTheDocument();
});
